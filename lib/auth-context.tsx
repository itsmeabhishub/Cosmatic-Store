"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  authLoaded: boolean;
  login: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("glamAuthUser");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        window.localStorage.removeItem("glamAuthUser");
      }
    }
    setAuthLoaded(true);
  }, []);

  const login = (incomingUser: User) => {
    setUser(incomingUser);
    window.localStorage.setItem("glamAuthUser", JSON.stringify(incomingUser));
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("glamAuthUser");
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      authLoaded,
      login,
      logout,
    }),
    [user, authLoaded]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
