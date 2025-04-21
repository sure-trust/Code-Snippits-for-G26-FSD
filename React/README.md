# React Course Structure and Interview Guide 📚

## Directory Structure
```
React/
├── assignments/              # Student assignments and submissions
│   ├── your-github-username/ # Individual student folders
│   │   ├── day1/            # Day-wise assignments
│   │   └── ...
│   └── README.md            # Assignment guidelines
├── day1-fundamentals.md     # React basics, JSX, Components
├── day2-functional-components.md    # Hooks, State Management
├── day3-component-patterns.md       # Design Patterns
├── day4-effects-and-hooks.md       # Side Effects, Custom Hooks
├── day5-performance.md             # Optimization
├── day6-advanced-patterns.md       # Error Boundaries, HOCs
├── day7-testing-deployment.md      # Testing, Deployment
└── README.md                # This file
```

## Course Overview
- **Day 1**: React Fundamentals & Class Components
- **Day 2**: Modern React with Functional Components
- **Day 3**: Component Patterns & State Management
- **Day 4**: Side Effects & Custom Hooks
- **Day 5**: Performance Optimization
- **Day 6**: Advanced Patterns & Error Handling
- **Day 7**: Testing & Deployment

## React Interview Questions & Answers

### 1. Core Concepts

#### Q: What is React and why use it over vanilla JavaScript?
**Answer**: 
React is a JavaScript library for building user interfaces. Key advantages:
```javascript
// Vanilla JS - Imperative
const updateUI = (user) => {
  document.getElementById('name').textContent = user.name;
  document.getElementById('email').textContent = user.email;
  // Need to manually update each element
};

// React - Declarative
function UserProfile({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
// React automatically handles updates
```

Benefits:
- Virtual DOM for efficient updates
- Component-based architecture
- Rich ecosystem
- Strong community support

#### Q: Explain Virtual DOM
**Answer**: 
The Virtual DOM is a lightweight copy of the real DOM. Here's how it works:

1. State changes trigger render
2. New Virtual DOM tree is created
3. Diffing algorithm compares with previous Virtual DOM
4. Only changed nodes are updated in real DOM

```javascript
// Example showing Virtual DOM benefit
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// Only the count text updates, not the entire div
```

### 2. Components & Props

#### Q: Class vs Functional Components - When to use which?
**Answer**:
```javascript
// Class Component - Use when:
// - Need lifecycle methods in older React versions
// - Working with legacy code
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  componentDidMount() {
    // Side effects
  }
  
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Functional Component - Modern approach:
// - Simpler syntax
// - Hooks support
// - Better performance
const Welcome = ({ name }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Side effects
  }, []);
  
  return <h1>Hello, {name}</h1>;
};
```

### 3. State Management

#### Q: Explain different state management approaches
**Answer**:

1. **Local State**:
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

2. **Lifting State Up**:
```javascript
function Parent() {
  const [shared, setShared] = useState('');
  return (
    <>
      <ChildA shared={shared} />
      <ChildB onUpdate={setShared} />
    </>
  );
}
```

3. **Context API**:
```javascript
const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed</button>;
}
```

### 4. Hooks Deep Dive

#### Q: Explain useCallback vs useMemo
**Answer**:
```javascript
// useCallback - Memoizes functions
const memoizedFn = useCallback(() => {
  doSomething(a, b);
}, [a, b]);

// useMemo - Memoizes values
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// Example usage:
function SearchResults() {
  const [query, setQuery] = useState('');
  
  // Memoize expensive computation
  const filteredResults = useMemo(() => {
    return expensiveFilter(query);
  }, [query]);
  
  // Memoize callback
  const handleSearch = useCallback((newQuery) => {
    setQuery(newQuery);
  }, []);
  
  return (
    <>
      <SearchInput onSearch={handleSearch} />
      <ResultsList results={filteredResults} />
    </>
  );
}
```

### 5. Performance Optimization

#### Q: How to optimize React performance?
**Answer**:

1. **Component Memoization**:
```javascript
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});
```

2. **Code Splitting**:
```javascript
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}
```

3. **Virtualization for Long Lists**:
```javascript
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemCount={items.length}
      itemSize={35}
    >
      {Row}
    </FixedSizeList>
  );
}
```

### 6. Testing

#### Q: How to test React components effectively?
**Answer**:
```javascript
// Component to test
function SubmitButton({ onSubmit }) {
  const [isSubmitting, setSubmitting] = useState(false);
  
  const handleClick = async () => {
    setSubmitting(true);
    await onSubmit();
    setSubmitting(false);
  };
  
  return (
    <button onClick={handleClick} disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Submit'}
    </button>
  );
}

// Test file
import { render, fireEvent, waitFor } from '@testing-library/react';

test('button shows loading state when clicked', async () => {
  const mockSubmit = jest.fn().mockImplementation(() => 
    new Promise(resolve => setTimeout(resolve, 1000))
  );
  
  const { getByRole } = render(<SubmitButton onSubmit={mockSubmit} />);
  const button = getByRole('button');
  
  fireEvent.click(button);
  expect(button).toHaveTextContent('Submitting...');
  expect(button).toBeDisabled();
  
  await waitFor(() => {
    expect(button).toHaveTextContent('Submit');
    expect(button).not.toBeDisabled();
  });
});
```

## Additional Resources
- [React Official Docs](https://reactjs.org/docs/getting-started.html)
- [React GitHub](https://github.com/facebook/react)
- [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools)
- [Create React App](https://create-react-app.dev/)
