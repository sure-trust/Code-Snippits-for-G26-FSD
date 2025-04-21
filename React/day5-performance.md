# Day 5: React Performance Optimization 🚀

## Preventing Re-renders 🔄

### React.memo (Remember Component)
```javascript
// Without memo - re-renders on every parent update
function RegularButton({ onClick, text }) {
  console.log('Button rendered');
  return <button onClick={onClick}>{text}</button>;
}

// With memo - only re-renders when props change
const MemoButton = React.memo(function Button({ onClick, text }) {
  console.log('Memo Button rendered');
  return <button onClick={onClick}>{text}</button>;
});

// Using the components
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <RegularButton 
        text="Regular" 
        onClick={() => console.log('clicked')} 
      />
      <MemoButton 
        text="Memo" 
        onClick={() => console.log('clicked')} 
      />
      <button onClick={() => setCount(c => c + 1)}>
        Count: {count}
      </button>
    </div>
  );
}
```

### useMemo (Remember Values)
```javascript
function ExpensiveCalculation({ numbers }) {
  // Memoize expensive calculation
  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]); // Only recalculate if numbers change

  return <div>Sum: {sum}</div>;
}

// Using with objects
function UserProfile({ user }) {
  // Memoize object to prevent unnecessary re-renders
  const userStyles = useMemo(() => ({
    color: user.isActive ? 'green' : 'red',
    fontWeight: user.isAdmin ? 'bold' : 'normal'
  }), [user.isActive, user.isAdmin]);

  return <div style={userStyles}>{user.name}</div>;
}
```

### useCallback (Remember Functions)
```javascript
function TodoList() {
  const [todos, setTodos] = useState([]);

  // Memoize function to prevent unnecessary re-renders
  const addTodo = useCallback((text) => {
    setTodos(prev => [...prev, { id: Date.now(), text }]);
  }, []); // No dependencies = function never changes

  return (
    <div>
      <AddTodoInput onAdd={addTodo} />
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

// Child component using memo
const AddTodoInput = React.memo(function AddTodoInput({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </form>
  );
});
```

## Code Splitting (Load What You Need) 📦

### React.lazy and Suspense
```javascript
// Split code into chunks
const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Route-based Code Splitting
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load routes
const Home = React.lazy(() => import('./routes/Home'));
const Dashboard = React.lazy(() => import('./routes/Dashboard'));
const Profile = React.lazy(() => import('./routes/Profile'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

## List Optimization 📝

### Virtual Lists
```javascript
function VirtualList({ items }) {
  const [startIndex, setStartIndex] = useState(0);
  const VISIBLE_ITEMS = 10;

  const visibleItems = items.slice(
    startIndex, 
    startIndex + VISIBLE_ITEMS
  );

  return (
    <div 
      style={{ height: '400px', overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: `${items.length * 40}px` }}>
        <div style={{ 
          transform: `translateY(${startIndex * 40}px)`
        }}>
          {visibleItems.map(item => (
            <div key={item.id} style={{ height: '40px' }}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### List Item Keys
```javascript
// ❌ Bad: Using index as key
function BadList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </ul>
  );
}

// ✅ Good: Using unique ID as key
function GoodList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
```

## Performance Monitoring 📊

### Using React DevTools
```javascript
function MonitoredComponent() {
  // Enable profiling in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Component rendered');
  }

  return <div>Performance Monitored!</div>;
}
```

### Custom Performance Hooks
```javascript
function usePerformanceTracker(componentName) {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      console.log(
        `${componentName} took ${endTime - startTime}ms to render`
      );
    };
  });
}

// Using the hook
function TrackedComponent() {
  usePerformanceTracker('TrackedComponent');
  return <div>Tracking Performance!</div>;
}
```

## Practice Assignments 🎯

### 1. Optimize Image Gallery
Build a gallery that:
- Lazy loads images
- Uses infinite scroll
- Implements virtual list
- Caches loaded images

### 2. Create Fast Search
Make a search that:
- Debounces input
- Memoizes results
- Uses virtual list
- Highlights matches

### 3. Build Efficient Form
Create a form that:
- Prevents unnecessary renders
- Validates efficiently
- Manages large datasets
- Optimizes submissions

### 4. Implement Chat App
Build a chat that:
- Handles real-time updates
- Manages message history
- Optimizes scroll performance
- Implements lazy loading

### 5. Dashboard Components
Create components that:
- Handle large datasets
- Update efficiently
- Use code splitting
- Implement caching

## Remember 📝
1. Measure before optimizing
2. Use appropriate tools
3. Consider trade-offs
4. Test performance
5. Document optimizations

## Extra Tips 💡
1. Profile in production
2. Use Chrome DevTools
3. Monitor bundle size
4. Implement error boundaries
5. Use performance budgets 