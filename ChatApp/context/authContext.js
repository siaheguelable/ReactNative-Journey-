import { createContext, useEffect, useState, useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    // Uncomment and use your Firebase logic here
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setUser(user);
    //     setIsAuthenticated(true);
    //   } else {
    //     setUser(null);
    //     setIsAuthenticated(false);
    //   }
    // });
    // setTimeout(() => {
    setIsAuthenticated(false);
    // }, 3000);
  }, []);

  const login = async (email, password) => {
    // await signInWithEmailAndPassword(auth, email, password);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    // await signOut(auth);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const signUp = async (email, password, username) => {
    // await createUserWithEmailAndPassword(auth, email, password);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return value;
};
