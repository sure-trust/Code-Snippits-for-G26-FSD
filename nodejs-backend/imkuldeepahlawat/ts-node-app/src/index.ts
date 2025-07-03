import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { users, products, orders } from './data/mockData.js';
import type { User, Product, Order, ApiError } from './types/index.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Type-safe route handlers
// 1. Get all users
app.get('/api/users', (_req: Request, res: Response<User[] | ApiError>) => {
    try {
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', statusCode: 500 });
    }
});

// 2. Get all products
app.get('/api/products', (_req: Request, res: Response<Product[] | ApiError>) => {
    try {
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products', statusCode: 500 });
    }
});

// 3. Get all orders
app.get('/api/orders', (_req: Request, res: Response<Order[] | ApiError>) => {
    try {
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch orders', statusCode: 500 });
    }
});

// 4. Get user by ID
app.get('/api/users/:id', (req: Request<{ id: string }>, res: Response<User | ApiError>) => {
    try {
        const userId = parseInt(req.params.id);
        const user = users.find(u => u.id === userId);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found', statusCode: 404 });
        }
        
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', statusCode: 500 });
    }
});

// 5. Get orders by user ID
app.get('/api/users/:id/orders', (req: Request<{ id: string }>, res: Response<Order[] | ApiError>) => {
    try {
        const userId = parseInt(req.params.id);
        const userOrders = orders.filter(order => order.userId === userId);
        
        if (userOrders.length === 0) {
            return res.status(404).json({ message: 'No orders found for this user', statusCode: 404 });
        }
        
        res.json(userOrders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user orders', statusCode: 500 });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});