import firebase from "firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  useState,
  useEffect
} from "react";
import app from "./app";

export const useCreateUserWithEmailAndPassword = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cb = async (email, password) => {
    setLoading(true);
    try {
      setLoading(false);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  return [cb, loading, error];
};

export const useSignInWithEmailAndPassword = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cb = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return [cb, loading, error];
};

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider);
};

export const useFacebookAuth = () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();
  signInWithRedirect(auth, provider);
};

export const useUserChangedState = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, [auth]);
  return [user];
};

export const useSetPasswordResetEmail = () => {
  var actionCodeSettings = {
    url: 'http://localhost:3000',
    handleCodeInApp: false
  };
  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const cb = async (email) => {
    setIsLoading(true);
    console.log(email)
    try {
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      console.log(email)
    } catch (err) {
      setIsError(err);
      setIsLoading(false);
    }
  };

  return [cb, isLoading, isError];
}