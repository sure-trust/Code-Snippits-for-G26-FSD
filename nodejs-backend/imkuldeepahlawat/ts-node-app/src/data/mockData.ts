import type { User, Product, Order } from '../types/index.js';

export const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

export const products: Product[] = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 499.99 },
    { id: 3, name: 'Headphones', price: 99.99 },
];

export const orders: Order[] = [
    {
        id: 1,
        userId: 1,
        products: [products[0], products[2]],
        total: 1099.98
    },
    {
        id: 2,
        userId: 2,
        products: [products[1]],
        total: 499.99
    },
]; 