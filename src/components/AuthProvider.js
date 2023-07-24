import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase'; // Import `auth` from `firebase.js`
import { useNavigate } from 'react-router-dom';

// Create the context
export const AuthContext = createContext(null);

// Create a Provider component
export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // This effect runs when the component mounts, and sets up a listener
  // for auth state changes in Firebase.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // If a user is logged in, `user` will be a `User` object.
      // If no user is logged in, `user` will be null.
      setAuthUser(user);
      setIsLoading(false);
    });

    // This function will be called when the component unmounts,
    // and it ensures that the listener is properly cleaned up.
    return unsubscribe;
  }, []); // `auth` is not a dependency here, so the dependency array is empty

  // Function to handle sign out
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('Signed out');
        // Additional code after sign out if needed
        navigate('/signIn');
      })
      .catch((error) => {
        console.log(error);
        // Handle error if sign out fails
      });
  };

  const contextValue = {
    authUser,
    isLoading,
    userSignOut,
  };

  if(isLoading) {
    return null; // or a loading spinner
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;