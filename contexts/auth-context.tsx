'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// This is a placeholder for Firebase Auth
// In a real implementation, you would import and initialize Firebase here
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role?: 'mentee' | 'mentor' | 'admin';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signUp: (email: string, password: string, role: 'mentee' | 'mentor') => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication for demo purposes
  // This would be replaced with actual Firebase auth in production
  useEffect(() => {
    // Simulate auth state check
    const storedUser = localStorage.getItem('mentorMatchUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
    
    // In a real implementation, you would use Firebase onAuthStateChanged here
  }, []);

  const signIn = async (email: string, password: string) => {
    // Mock sign in
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo user - in a real app, this would be a Firebase auth call
      const newUser: User = {
        uid: 'demo-user-id',
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
        role: 'mentee', // Demo role
      };
      
      setUser(newUser);
      localStorage.setItem('mentorMatchUser', JSON.stringify(newUser));
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    // Mock Google sign in
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo user - in a real app, this would use Firebase GoogleAuthProvider
      const newUser: User = {
        uid: 'google-user-id',
        email: 'demo@gmail.com',
        displayName: 'Demo User',
        photoURL: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        role: 'mentee', // Demo role
      };
      
      setUser(newUser);
      localStorage.setItem('mentorMatchUser', JSON.stringify(newUser));
    } catch (error) {
      console.error('Google sign in error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, role: 'mentee' | 'mentor') => {
    // Mock sign up
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo user - in a real app, this would create a Firebase user and store role in Firestore
      const newUser: User = {
        uid: 'new-user-id',
        email: email,
        displayName: email.split('@')[0],
        photoURL: null,
        role: role,
      };
      
      setUser(newUser);
      localStorage.setItem('mentorMatchUser', JSON.stringify(newUser));
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    // Mock sign out
    setLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('mentorMatchUser');
    } catch (error) {
      console.error('Sign out error:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signInWithGoogle,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};