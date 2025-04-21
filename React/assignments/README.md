# React Course Assignments 📝

## Submission Guidelines

### Folder Structure
```
assignments/
├── your-github-username/
│   ├── day1/
│   │   ├── assignment1/
│   │   │   ├── .gitignore
│   │   │   ├── README.md
│   │   │   └── [react app files]
│   │   ├── assignment2/
│   │   └── ...
│   ├── day2/
│   └── ...
└── README.md
```

### Setup Requirements
- Node.js version 20.x
- npm or yarn package manager
- Git for version control

### Getting Started
1. Fork this repository
2. Create your folder structure:
```bash
cd assignments
mkdir your-github-username
cd your-github-username
```

3. For each assignment:
```bash
# Create new React app
npx create-react-app day1-assignment1
cd day1-assignment1

# Create proper .gitignore
echo "node_modules/
build/
.env
.DS_Store" > .gitignore
```

### Commit Guidelines
Each assignment should have multiple commits showing your progress:

```bash
# Example commit sequence
git add .
git commit -m "init: Start day1 assignment1 - User Profile Card"
git add .
git commit -m "feat: Add basic component structure"
git add .
git commit -m "feat: Implement user data display"
git add .
git commit -m "style: Add CSS styling"
git add .
git commit -m "test: Add component tests"
git add .
git commit -m "docs: Update README with instructions"
```

### Commit Types
- init: Project initialization
- feat: New feature
- fix: Bug fix
- style: CSS/formatting changes
- docs: Documentation updates
- test: Adding tests
- refactor: Code improvements

### Pull Request Template
When submitting your assignment:

```markdown
# Assignment Submission

## Day X - Assignment Y

### What I Built
Brief description of your implementation

### Key Features
- Feature 1
- Feature 2
- Feature 3

### Screenshots
[Add screenshots of your application]

### Technical Details
- Components created
- Hooks used
- Any libraries added

### Learning Outcomes
What you learned from this assignment

### Time Spent
Approximate time spent on the assignment

### Self-Assessment
- [ ] All requirements met
- [ ] Code is well-organized
- [ ] Proper commit history
- [ ] Documentation complete
```

### Example Assignment Structure
```
day1-assignment1/
├── .gitignore
├── README.md
├── package.json
├── public/
└── src/
    ├── components/
    │   └── UserCard.js
    ├── styles/
    │   └── UserCard.css
    ├── App.js
    └── index.js
```

### README Template for Each Assignment
```markdown
# Day X - Assignment Y

## Project Description
Brief description of what you built

## Setup Instructions
1. Clone repository
2. Install dependencies: `npm install`
3. Start development server: `npm start`

## Features Implemented
- Feature 1
- Feature 2
- Feature 3

## Technologies Used
- React
- Additional libraries

## Screenshots
[Add your screenshots here]

## Notes
Any additional information or challenges faced
```

### Important Notes
1. Never commit node_modules
2. Keep commits small and meaningful
3. Write clear commit messages
4. Test your code before submitting
5. Update README for each assignment

### Assignment Review Process
1. Create Pull Request
2. Wait for review
3. Address feedback if any
4. Merge when approved

### Common Issues to Avoid
1. Missing .gitignore
2. Large, unfocused commits
3. Incomplete documentation
4. Unorganized code structure
5. Missing setup instructions

## Need Help?
- Check the course materials
- Review previous examples
- Ask in discussions
- Contact course instructors 