# Day 7: Testing and Deployment in React 🚀

## Testing React Components 🧪

### Unit Testing with Jest and React Testing Library
```javascript
// Button.js
function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}

// Button.test.js
import { render, fireEvent } from '@testing-library/react';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    const { getByText } = render(
      <Button>Click Me</Button>
    );
    expect(getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Click Me</Button>
    );
    
    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Integration Testing
```javascript
// UserProfile.js
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// UserProfile.test.js
import { render, waitFor } from '@testing-library/react';
import { fetchUser } from './api';

jest.mock('./api');

describe('UserProfile', () => {
  test('loads and displays user data', async () => {
    const mockUser = {
      name: 'John Doe',
      email: 'john@example.com'
    };

    fetchUser.mockResolvedValueOnce(mockUser);

    const { getByText } = render(
      <UserProfile userId="123" />
    );

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText('John Doe')).toBeInTheDocument();
      expect(getByText('john@example.com')).toBeInTheDocument();
    });
  });
});
```

### Custom Hook Testing
```javascript
// useCounter.js
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}

// useCounter.test.js
import { renderHook, act } from '@testing-library/react-hooks';

describe('useCounter', () => {
  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('should handle initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });
});
```

## Deployment Strategies 🚢

### Environment Configuration
```javascript
// .env.development
REACT_APP_API_URL=http://localhost:3000
REACT_APP_DEBUG=true

// .env.production
REACT_APP_API_URL=https://api.myapp.com
REACT_APP_DEBUG=false

// Using environment variables
function Api() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const isDebug = process.env.REACT_APP_DEBUG === 'true';

  return (
    <div>
      <p>API URL: {apiUrl}</p>
      {isDebug && <p>Debug mode enabled</p>}
    </div>
  );
}
```

### Build Optimization
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 70000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};

// Using dynamic imports
const HeavyComponent = React.lazy(() => 
  import('./HeavyComponent')
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Production Monitoring
```javascript
// errorTracking.js
function initErrorTracking() {
  if (process.env.NODE_ENV === 'production') {
    window.onerror = (message, source, line, column, error) => {
      // Send to error tracking service
      logError({
        message,
        source,
        line,
        column,
        stack: error?.stack
      });
    };
  }
}

// performance.js
function trackPerformance() {
  if (process.env.NODE_ENV === 'production') {
    const metrics = {
      FCP: 0, // First Contentful Paint
      LCP: 0, // Largest Contentful Paint
      CLS: 0  // Cumulative Layout Shift
    };

    // Report Web Vitals
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      // Process and send metrics
    }).observe({ entryTypes: ['largest-contentful-paint'] });
  }
}
```

## Production Optimization 🔧

### Code Splitting
```javascript
// Route-based code splitting
import { Routes, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./routes/Home'));
const Dashboard = React.lazy(() => import('./routes/Dashboard'));
const Profile = React.lazy(() => import('./routes/Profile'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
```

### Performance Optimization
```javascript
// Image optimization
function OptimizedImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={e => {
        if ('performance' in window) {
          window.performance.mark(`image-loaded-${src}`);
        }
      }}
    />
  );
}

// Preload critical resources
function Head() {
  return (
    <Helmet>
      <link 
        rel="preload" 
        href="/critical.css" 
        as="style" 
      />
      <link 
        rel="preload" 
        href="/logo.png" 
        as="image" 
      />
    </Helmet>
  );
}
```

## Practice Assignments 🎯

### 1. Test Component Library
Create tests for:
- Button components
- Form elements
- Modal dialogs
- Custom hooks

### 2. Setup CI/CD Pipeline
Implement:
- Automated testing
- Build process
- Deployment steps
- Environment management

### 3. Optimize Bundle Size
Work on:
- Code splitting
- Tree shaking
- Asset optimization
- Lazy loading

### 4. Monitor Production
Create:
- Error tracking
- Performance monitoring
- User analytics
- Health checks

### 5. Security Implementation
Add:
- Authentication tests
- Input validation
- XSS prevention
- CSRF protection

## Remember 📝
1. Test critical paths
2. Optimize early
3. Monitor constantly
4. Secure thoroughly
5. Document everything

## Extra Tips 💡
1. Use testing patterns
2. Automate deployment
3. Monitor performance
4. Handle errors gracefully
5. Keep dependencies updated 