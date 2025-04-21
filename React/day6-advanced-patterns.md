# Day 6: Error Handling and Routing in React 🛣️

## Error Boundaries (Safety Nets) 🥅

### Creating Error Boundaries
```javascript
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-ui">
          <h2>Oops! Something went wrong 😢</h2>
          <button onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Using Error Boundary
function App() {
  return (
    <ErrorBoundary>
      <UserProfile />
    </ErrorBoundary>
  );
}
```

### Fallback Components
```javascript
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// Using with custom reset
<ErrorBoundary
  FallbackComponent={ErrorFallback}
  onReset={() => {
    // Reset app state here
  }}
>
  <RiskyComponent />
</ErrorBoundary>
```

## React Router (Navigation Made Easy) 🚦

### Basic Routing
```javascript
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link,
  useNavigate,
  useParams 
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Protected Routes
```javascript
function PrivateRoute({ children }) {
  const auth = useAuth(); // Your auth hook
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [auth.isAuthenticated, navigate]);

  return auth.isAuthenticated ? children : null;
}

// Using Protected Routes
<Routes>
  <Route path="/login" element={<Login />} />
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>
```

### Navigation and Parameters
```javascript
function UserList() {
  const navigate = useNavigate();
  const [users] = useState([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);

  return (
    <div>
      {users.map(user => (
        <button
          key={user.id}
          onClick={() => navigate(`/users/${user.id}`)}
        >
          View {user.name}
        </button>
      ))}
    </div>
  );
}

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(id).then(setUser);
  }, [id]);

  return user ? (
    <div>
      <h2>{user.name}'s Profile</h2>
      {/* Profile content */}
    </div>
  ) : <div>Loading...</div>;
}
```

## Automatic Redirects 🔄

### After Login
```javascript
function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/dashboard';

  const handleLogin = async (credentials) => {
    try {
      await loginUser(credentials);
      navigate(from, { replace: true });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/* Login form fields */}
    </form>
  );
}
```

### Conditional Redirects
```javascript
function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProduct(productId);
        if (data.isDiscontinued) {
          navigate('/products', { 
            replace: true,
            state: { message: 'Product no longer available' }
          });
        } else {
          setProduct(data);
        }
      } catch (error) {
        navigate('/error');
      }
    }
    loadProduct();
  }, [productId, navigate]);

  return product ? (
    <div>{/* Product details */}</div>
  ) : <div>Loading...</div>;
}
```

## Data Passing Between Routes 📦

### Using URL Parameters
```javascript
function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const filter = searchParams.get('filter');

  const updateFilter = (newFilter) => {
    setSearchParams({ q: query, filter: newFilter });
  };

  return (
    <div>
      <h2>Results for: {query}</h2>
      <select 
        value={filter} 
        onChange={(e) => updateFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      {/* Results list */}
    </div>
  );
}
```

### Using State in Navigation
```javascript
function ProductList() {
  const navigate = useNavigate();
  const [products] = useState([/* products data */]);

  const viewProduct = (product) => {
    navigate(`/product/${product.id}`, {
      state: { productData: product }
    });
  };

  return (
    <div>
      {products.map(product => (
        <button 
          key={product.id}
          onClick={() => viewProduct(product)}
        >
          View {product.name}
        </button>
      ))}
    </div>
  );
}

function ProductDetail() {
  const { state } = useLocation();
  const product = state?.productData;

  return product ? (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  ) : <div>Loading...</div>;
}
```

## Practice Assignments 🎯

### 1. Build Multi-Step Form
Create a form that:
- Uses multiple routes
- Saves progress
- Handles validation
- Manages navigation

### 2. Implement Auth Flow
Build authentication that:
- Protects routes
- Handles redirects
- Manages sessions
- Shows loading states

### 3. Create Dashboard Layout
Make a dashboard with:
- Nested routes
- Sidebar navigation
- Protected sections
- Error boundaries

### 4. Build Shopping Cart
Create a cart system with:
- Product routes
- Cart persistence
- Checkout flow
- Error handling

### 5. User Management System
Implement a system with:
- User profiles
- Role-based access
- Navigation guards
- Error recovery

## Remember 📝
1. Always use error boundaries
2. Plan your routes carefully
3. Handle loading states
4. Manage navigation state
5. Implement fallbacks

## Extra Tips 💡
1. Use lazy loading
2. Handle edge cases
3. Test navigation flows
4. Document route structure
5. Consider mobile navigation 