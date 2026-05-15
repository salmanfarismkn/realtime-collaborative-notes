import { createContext, useContext, useMemo, useState } from 'react';
import { currentUser } from '../services/dummyData';

const AuthContext = createContext(null);

/** Provides authentication state for protected routes and profile UI. */
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, _password) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    setUser({ ...currentUser, email: email || currentUser.email });
  };

  const signup = async (name, email, _password) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
    setUser({ ...currentUser, name, email, avatarInitials: initials || 'U' });
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      signup,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
