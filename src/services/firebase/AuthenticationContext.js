import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "./firebaseConfig";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (user) => {
    if (user) setUser(user);
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.message);
      });
  };

  const onRegister = (email, password, repeatPass) => {
    if (password !== repeatPass) return setError("Password do not match");
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        setIsLoading(false);
        setUser(userCredential.user);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
        // ..
      });
  };

  const onLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setIsLoading(false);
        setUser(null);
      })
      .catch((e) => {
        console.log("logouterror", e);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
