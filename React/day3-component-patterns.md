# Day 3: Advanced Component Patterns and Data Flow 🔄

## Component Patterns (Building Better Blocks) 🏗️

### Higher Order Components (HOC)
```javascript
// HOC is like a special wrapper for components
function withLogger(WrappedComponent) {
  return function LoggedComponent(props) {
    useEffect(() => {
      console.log('Component rendered:', WrappedComponent.name);
    }, []);

    return <WrappedComponent {...props} />;
  };
}

// Using the HOC
const LoggedButton = withLogger(Button);
```

### Render Props Pattern
```javascript
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return render(position);
}

// Using Render Props
<MouseTracker 
  render={({ x, y }) => (
    <div>Mouse is at: {x}, {y}</div>
  )}
/>
```

## Prop Drilling (Passing Data Down) 📦

### Problem Example
```javascript
function GrandParent({ user }) {
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <div>Hello, {user.name}!</div>;
}
```

### Solution 1: Context API
```javascript
const UserContext = React.createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Alice',
    theme: 'dark'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Using Context
function DeepChild() {
  const { user } = useContext(UserContext);
  return <div>Hello, {user.name}!</div>;
}
```

### Solution 2: Component Composition
```javascript
function Layout({ header, sidebar, content }) {
  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="sidebar">{sidebar}</div>
      <div className="content">{content}</div>
    </div>
  );
}

// Using Composition
<Layout 
  header={<Header />}
  sidebar={<Sidebar />}
  content={<Content />}
/>
```

## Data Flow Between Components 🔄

### Parent to Child (Props)
```javascript
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <Child 
      count={count} 
      onIncrement={() => setCount(count + 1)} 
    />
  );
}

function Child({ count, onIncrement }) {
  return (
    <button onClick={onIncrement}>
      Count is: {count}
    </button>
  );
}
```

### Child to Parent (Callbacks)
```javascript
function Parent() {
  const handleChildData = (data) => {
    console.log('Got data from child:', data);
  };

  return <Child onSendData={handleChildData} />;
}

function Child({ onSendData }) {
  return (
    <button onClick={() => onSendData('Hello!')}>
      Send to Parent
    </button>
  );
}
```

### Sibling Communication
```javascript
function Parent() {
  const [sharedData, setSharedData] = useState('');

  return (
    <div>
      <SiblingA onShare={setSharedData} />
      <SiblingB data={sharedData} />
    </div>
  );
}

function SiblingA({ onShare }) {
  return (
    <button onClick={() => onShare('Hello Sibling!')}>
      Share
    </button>
  );
}

function SiblingB({ data }) {
  return <div>Received: {data}</div>;
}
```

## Component Organization 📁

### Smart vs Presentational Components
```javascript
// Smart Component (Container)
function UserContainer() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(setUser);
  }, []);

  return <UserProfile user={user} />;
}

// Presentational Component
function UserProfile({ user }) {
  if (!user) return <div>Loading...</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

### Component Composition
```javascript
function Card({ header, content, footer }) {
  return (
    <div className="card">
      <div className="card-header">{header}</div>
      <div className="card-content">{content}</div>
      <div className="card-footer">{footer}</div>
    </div>
  );
}

// Using Composition
<Card 
  header={<h2>Title</h2>}
  content={<p>Content here</p>}
  footer={<button>Action</button>}
/>
```

## Practice Assignments 🎯

### 1. Build a Theme Provider
Create a system that:
- Provides theme to all components
- Allows theme switching
- Affects styled components

### 2. Create a Data Manager
Build a manager that:
- Handles shared state
- Provides data to components
- Manages updates

### 3. Implement Form Builder
Make a system that:
- Creates dynamic forms
- Validates inputs
- Manages form state

### 4. Build Component Library
Create reusable:
- Buttons
- Cards
- Modals
- Lists

### 5. Data Flow Exercise
Build an app with:
- Multiple levels
- State management
- Component communication

## Remember 📝
1. Use patterns wisely
2. Avoid prop drilling
3. Keep data flow clear
4. Compose don't inherit
5. Split smart/presentational

## Extra Tips 💡
1. Document patterns
2. Test component integration
3. Keep state close to use
4. Use composition
5. Think in components 