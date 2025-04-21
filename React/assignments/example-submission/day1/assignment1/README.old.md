# Day 1 - Assignment 1: User Profile Card

## Project Description
A reusable user profile card component that displays user information with a clean, modern design.

## Setup Instructions
```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test
```

## Features Implemented
- Responsive design
- Dynamic data loading
- Hover effects
- Error handling
- Loading states

## Code Structure
```
src/
├── components/
│   ├── UserCard/
│   │   ├── UserCard.js
│   │   ├── UserCard.css
│   │   └── UserCard.test.js
│   └── Avatar/
│       ├── Avatar.js
│       └── Avatar.css
├── utils/
│   └── formatDate.js
└── App.js
```

## Commit History
```bash
38a7e21 docs: Update README with setup instructions
f2d9c13 test: Add UserCard component tests
91e4b2a style: Improve card layout and add animations
7b52d94 feat: Add error handling and loading states
3d42c1a feat: Implement basic UserCard component
1234567 init: Start user profile card assignment
```

## Screenshots
![User Card - Default State](./screenshots/default.png)
![User Card - Hover State](./screenshots/hover.png)
![User Card - Loading State](./screenshots/loading.png)

## Learning Outcomes
- Learned about component organization
- Practiced CSS modules
- Implemented error boundaries
- Used React testing library

## Time Spent
Approximately 4 hours

## Self-Assessment
- [x] All requirements met
- [x] Code is well-organized
- [x] Proper commit history
- [x] Documentation complete
- [x] Tests implemented
- [x] Responsive design
- [x] Error handling added

## Notes
Faced challenges with:
- Image optimization
- Test setup
- CSS animations

Solutions implemented:
- Used lazy loading for images
- Added proper test configurations
- Used CSS transitions for better performance 