/**
 * @fileoverview Express server for handling file uploads and API endpoints
 * @requires express
 * @requires multer
 * @requires cors
 * @requires path
 * @requires fs
 * @requires express-ejs-layouts
 */

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const expressLayouts = require('express-ejs-layouts');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5001;

/**
 * @constant {string} uploadDir - Path to the uploads directory
 */
const uploadDir = path.join(__dirname, 'uploads');

// Middleware
app.use(cors());
app.use(express.json());
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', 'layout');

// Session middleware for user authentication
const session = require('express-session');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // set to true if using https
}));

// Data file paths
const USERS_FILE = path.join(__dirname, 'data', 'users.json');
const CARTS_FILE = path.join(__dirname, 'data', 'carts.json');

/**
 * Creates the uploads directory if it doesn't exist
 * @throws {Error} If directory creation fails
 */
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

/**
 * Configure multer storage settings
 * @type {multer.StorageEngine}
 */
const storage = multer.diskStorage({
    /**
     * Sets the destination for uploaded files
     * @param {Express.Request} req - Express request object
     * @param {Express.Multer.File} file - Uploaded file object
     * @param {function} cb - Callback function
     */
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    /**
     * Generates a unique filename for uploaded files
     * @param {Express.Request} req - Express request object
     * @param {Express.Multer.File} file - Uploaded file object
     * @param {function} cb - Callback function
     */
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

/**
 * Multer instance configured with storage and file size limits
 * @type {multer.Multer}
 */
const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    }
});

/**
 * Helper function to format file size
 * @param {number} bytes - File size in bytes
 * @returns {string} Formatted file size
 */
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Helper function to get file list
 * @returns {Array} List of files with metadata
 */
function getFileList() {
    const files = fs.readdirSync(uploadDir);
    return files.map(filename => {
        const filePath = path.join(uploadDir, filename);
        const stats = fs.statSync(filePath);
        return {
            id: filename,
            originalName: filename.split('-').slice(1).join('-'),
            size: formatFileSize(stats.size),
            uploadDate: stats.mtime.toLocaleDateString(),
            path: filePath
        };
    });
}

/**
 * Reads and parses a JSON file, creating it with default data if it doesn't exist
 * @param {string} filePath - Path to the JSON file
 * @returns {Object} Parsed JSON data
 */
function readJsonFile(filePath) {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({ users: [], carts: [] }));
    }
    return JSON.parse(fs.readFileSync(filePath));
}

/**
 * Writes data to a JSON file
 * @param {string} filePath - Path to the JSON file
 * @param {Object} data - Data to write
 */
function writeJsonFile(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/**
 * Finds a user by email in the users database
 * @param {string} email - User's email address
 * @returns {Object|undefined} User object if found, undefined otherwise
 */
function findUser(email) {
    const data = readJsonFile(USERS_FILE);
    return data.users.find(user => user.email === email);
}

/**
 * Gets a user's shopping cart, creating a new one if it doesn't exist
 * @param {string} userId - User's ID
 * @returns {Object} Cart object containing user's items
 */
function getUserCart(userId) {
    const data = readJsonFile(CARTS_FILE);
    return data.carts.find(cart => cart.userId === userId) || { userId, items: [] };
}

/**
 * Authentication middleware to protect routes
 * @param {Express.Request} req - Express request object
 * @param {Express.Response} res - Express response object
 * @param {Express.NextFunction} next - Express next middleware function
 */
function requireAuth(req, res, next) {
    if (!req.session.user) {
        if (req.xhr) {
            return res.status(401).json({ error: 'Please login to continue' });
        }
        return res.redirect('/login');
    }
    next();
}

// Web Routes
/**
 * Home page route - displays products from FakeStore API
 * @route GET /
 */
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const products = response.data;
        res.render('home', { 
            title: 'ShopEasy - Home',
            products,
            user: req.session.user
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.render('home', { 
            title: 'ShopEasy - Home',
            products: [],
            user: req.session.user
        });
    }
});

/**
 * Login page route
 * @route GET /login
 */
app.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
    }
    res.render('login', { 
        title: 'ShopEasy - Login',
        error: null
    });
});

/**
 * Sign up page route
 * @route GET /signup
 */
app.get('/signup', (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
    }
    res.render('signup', { 
        title: 'ShopEasy - Sign Up',
        error: null
    });
});

/**
 * Shopping cart page route
 * @route GET /cart
 */
app.get('/cart', requireAuth, (req, res) => {
    const cart = getUserCart(req.session.user.id);
    res.render('cart', { 
        title: 'ShopEasy - Cart',
        cart,
        user: req.session.user
    });
});

app.get('/upload', (req, res) => {
    res.render('upload', { title: 'Upload - File Upload Pro' });
});

app.get('/files', (req, res) => {
    const files = getFileList();
    res.render('files', { title: 'Files - File Upload Pro', files });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About - File Upload Pro' });
});

// API Routes
app.get('/api/hello', (req, res) => {
    try {
        res.json({ message: 'Hello from the backend!' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/upload', upload.array('files'), (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ error: 'No files uploaded' });
        }
        
        res.json({ 
            message: 'Files uploaded successfully',
            files: req.files.map(file => ({
                filename: file.filename,
                path: file.path
            }))
        });
    } catch (error) {
        res.status(500).json({ 
            error: 'Error uploading files',
            details: error.message 
        });
    }
});

app.get('/api/download/:fileId', (req, res) => {
    try {
        const filePath = path.join(uploadDir, req.params.fileId);
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'File not found' });
        }
        res.download(filePath);
    } catch (error) {
        res.status(500).json({ error: 'Error downloading file' });
    }
});

app.delete('/api/files/:fileId', (req, res) => {
    try {
        const filePath = path.join(uploadDir, req.params.fileId);
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'File not found' });
        }
        fs.unlinkSync(filePath);
        res.json({ message: 'File deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting file' });
    }
});

app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const data = readJsonFile(USERS_FILE);
    
    if (data.users.some(user => user.email === email)) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // In a real app, hash this password
        balance: 5000 // Default balance in rupees
    };

    data.users.push(newUser);
    writeJsonFile(USERS_FILE, data);

    req.session.user = newUser;
    res.json({ message: 'Signup successful', user: newUser });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = findUser(email);

    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.session.user = user;
    res.json({ message: 'Login successful', user });
});

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logout successful' });
});

app.get('/api/cart', requireAuth, (req, res) => {
    const cart = getUserCart(req.session.user.id);
    res.json(cart);
});

app.post('/api/cart/add', requireAuth, async (req, res) => {
    const { productId, quantity = 1 } = req.body;
    const data = readJsonFile(CARTS_FILE);
    
    try {
        const productResponse = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const product = productResponse.data;

        let cart = data.carts.find(cart => cart.userId === req.session.user.id);
        
        if (!cart) {
            cart = { userId: req.session.user.id, items: [] };
            data.carts.push(cart);
        }

        const existingItem = cart.items.find(item => item.productId === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                productId,
                title: product.title,
                price: product.price,
                quantity
            });
        }

        writeJsonFile(CARTS_FILE, data);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error: 'Error adding item to cart' });
    }
});

app.post('/api/cart/remove', requireAuth, (req, res) => {
    const { productId } = req.body;
    const data = readJsonFile(CARTS_FILE);
    
    const cart = data.carts.find(cart => cart.userId === req.session.user.id);
    if (cart) {
        cart.items = cart.items.filter(item => item.productId !== productId);
        writeJsonFile(CARTS_FILE, data);
    }
    
    res.json(cart || { userId: req.session.user.id, items: [] });
});

app.post('/api/checkout', requireAuth, (req, res) => {
    const userData = readJsonFile(USERS_FILE);
    const cartData = readJsonFile(CARTS_FILE);
    
    const user = userData.users.find(u => u.id === req.session.user.id);
    const cart = cartData.carts.find(c => c.userId === req.session.user.id);

    if (!cart || cart.items.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }

    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (user.balance < total) {
        return res.status(400).json({ error: 'Insufficient balance' });
    }

    user.balance -= total;
    cart.items = [];

    writeJsonFile(USERS_FILE, userData);
    writeJsonFile(CARTS_FILE, cartData);

    req.session.user = user; // Update session with new balance
    res.json({ message: 'Checkout successful', newBalance: user.balance });
});

/**
 * Global error handling middleware for multer errors
 * @middleware
 * @param {Error} err - Error object
 * @param {Express.Request} req - Express request object
 * @param {Express.Response} res - Express response object
 * @param {function} next - Next middleware function
 */
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).json({
                error: 'File size is too large. Max limit is 5MB'
            });
        }
        return res.status(400).json({
            error: err.message
        });
    }
    
    console.error(err);
    res.status(500).json({
        error: 'Something went wrong'
    });
});

/**
 * Start the server
 * @listens {number} PORT
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 