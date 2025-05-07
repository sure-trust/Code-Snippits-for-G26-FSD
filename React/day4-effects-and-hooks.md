# Day 4: React Hooks Deep Dive 🎣

## React Hooks (Magic Spells for React) ✨

### Hook Rules (Important Rules to Follow!)
1. Only call Hooks at the top level
2. Only call Hooks from React functions
3. Name custom Hooks starting with "use"

```javascript
// ✅ Good: Top level Hook
function GoodComponent() {
  const [count, setCount] = useState(0);
  
  // More code...
}

// ❌ Bad: Hook in condition
function BadComponent() {
  if (something) {
    const [count, setCount] = useState(0); // Don't do this!
  }
}
```

## useEffect Deep Dive 🔄

### Side Effects Types

#### 1. Data Fetching
```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(`/api/users/${userId}`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]); // Only re-fetch when userId changes

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
```

#### 2. Subscriptions
```javascript
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    connection.onMessage((message) => {
      setMessages(prev => [...prev, message]);
    });

    // Cleanup: disconnect when component unmounts or roomId changes
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.text}</div>
      ))}
    </div>
  );
}
```

#### 3. DOM Manipulation
```javascript
function AutoFocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current.focus();
  }, []); // Empty array = run once on mount

  return <input ref={inputRef} placeholder="I'll focus automatically!" />;
}
```

## Custom Hooks (Create Your Own Magic) 🪄

### 1. useLocalStorage Hook
```javascript
function useLocalStorage(key, initialValue) {
  // Get stored value or use initial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update stored value
  const setValue = value => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Using the custom Hook
function App() {
  const [name, setName] = useLocalStorage('name', 'Bob');
  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
    />
  );
}
```

### 2. useWindowSize Hook
```javascript
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

// Using the Hook
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  return (
    <div>
      Window size: {width} x {height}
    </div>
  );
}
```

### 3. useFetch Hook
```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Using the Hook
function DataDisplay({ url }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;

  return <div>{JSON.stringify(data)}</div>;
}
```

## useRef and DOM References 🎯

### Basic useRef Usage
```javascript
function VideoPlayer() {
  const videoRef = useRef();

  const play = () => {
    videoRef.current.play();
  };

  const pause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video ref={videoRef} src="video.mp4" />
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
```

### Storing Previous Values
```javascript
function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Practice Assignments 🎯

### 1. Build a Form Manager Hook
Create a hook that:
- Manages form state
- Handles validation
- Tracks dirty fields
- Manages submissions

### 2. Create an Animation Hook
Build a hook that:
- Handles animations
- Controls timing
- Manages cleanup
- Supports different effects

### 3. Implement API Hook
Make a hook that:
- Handles API calls
- Manages loading states
- Handles errors
- Caches responses

### 4. Build Theme Hook
Create a hook that:
- Manages theme state
- Handles preferences
- Persists settings
- Provides theme utilities

### 5. Develop Auth Hook
Build a hook that:
- Manages authentication
- Handles tokens
- Controls sessions
- Manages permissions

## Remember 📝
1. Follow Hook rules
2. Clean up effects
3. Use dependencies correctly
4. Keep Hooks simple
5. Test Hook behavior

## Extra Tips 💡
1. Name Hooks clearly
2. Document Hook usage
3. Handle errors gracefully
4. Test edge cases
5. Share common logic 