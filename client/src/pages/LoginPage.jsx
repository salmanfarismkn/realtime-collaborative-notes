import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

/** User login form with demo account shortcut. */
export default function LoginPage() {
  useDocumentTitle('Log in');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/dashboard';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch {
      setError('Unable to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDemo = async () => {
    setLoading(true);
    await login('alex@collabnotes.io', 'demo');
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Welcome back</h1>
        <p className="mt-2 text-sm text-gray-600">Sign in to your CollabNotes workspace</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <Input
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="current-password"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? 'Signing in…' : 'Sign in'}
        </Button>
      </form>

      <p className="relative my-6 text-center text-xs text-gray-400 before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-gray-200">
        <span className="relative bg-white px-2">or</span>
      </p>

      <Button type="button" variant="secondary" className="w-full" onClick={handleDemo} disabled={loading}>
        Continue with demo account
      </Button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don&apos;t have an account?{' '}
        <Link to="/signup" className="font-medium text-brand-600 hover:text-brand-700">
          Sign up free
        </Link>
      </p>
    </>
  );
}
