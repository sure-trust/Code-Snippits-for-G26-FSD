# T-Shirt Store

A modern e-commerce web application for browsing and purchasing t-shirts. Built with React and styled using Emotion.
# Working Url
 [Working url ](https://symphonious-madeleine-de5be4.netlify.app/)

# Video Link
[Video link](https://streamable.com/3xjwyi)

# Screenshots
 ### front page
   ![Front page](./public/screenshots/Screenshot%202025-05-08%20093611.png)
### shopping cart page
   ![Shoppig page](./public/screenshots/Screenshot%202025-05-08%20093631.png)
### responsive for every mobile device
   ![Repsonvieness](./public/screenshots/Screenshot%202025-05-08%20093701.png)
### Search and filter option 
![](./public/screenshots/Screenshot%202025-05-08%20093738.png)

## Features

### Product Listing
- Responsive grid layout displaying t-shirt products
- Each product card shows:
  - Product image
  - Name
  - Type
  - Color
  - Gender
  - Price
  - Stock status
  - Add to Cart button

### Search Functionality
- Real-time search across product names, colors, and types
- Search triggered by:
  - Enter key press
  - Search button click
- Search results update instantly

### Advanced Filtering
- Multiple filter options:
  - Gender (Men/Women)
  - Color (dynamically populated from available colors)
  - Type (dynamically populated from available types)
  - Price Range (₹0-250, ₹251-450, ₹451+)
- Filters can be:
  - Applied individually
  - Combined with other filters
  - Used together with search
  - Cleared by selecting "All"

### Shopping Cart
- Accessible via cart icon in header
- Features:
  - Product image and details
  - Quantity controls (increase/decrease)
  - Remove item functionality
  - Total amount calculation
  - Persistent cart data (saved in localStorage)
- Stock management:
  - Prevents adding more items than available
  - Shows "Out of Stock" message
  - Disables "Add to Cart" for out-of-stock items

## Technical Details

### Built With
- React
- React Router for navigation
- Emotion for styled components
- Local Storage for cart persistence

### Project Structure
```
src/
├── components/
│   ├── ProductList.js    # Main product listing with search and filters
│   └── Cart.js          # Shopping cart component
├── App.js               # Main app component with routing
└── index.js            # Entry point with global styles
```

### API Integration
- Fetches product data from:
  ```
  https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json
  ```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
```bash
npm start
```
The application will be available at http://localhost:3000

## Features Implementation Details

### Search
- Case-insensitive search
- Searches across multiple fields (name, color, type)
- Updates results in real-time

### Filters
- Dynamic filter options based on available products
- Immediate filter application
- Combination of multiple filters
- Price range categorization

### Cart Management
- Persistent cart data using localStorage
- Stock validation
- Quantity management
- Total price calculation

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License
This project is licensed under the MIT License.
