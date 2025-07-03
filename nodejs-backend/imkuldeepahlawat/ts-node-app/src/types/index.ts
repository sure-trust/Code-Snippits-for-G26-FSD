// User type definition
export interface User {
    id: number;
    name: string;
    email: string;
}

// Product type definition
export interface Product {
    id: number;
    name: string;
    price: number;
}

// Order type definition
export interface Order {
    id: number;
    userId: number;
    products: Product[];
    total: number;
}

// Custom error type
export interface ApiError {
    message: string;
    statusCode: number;
} 