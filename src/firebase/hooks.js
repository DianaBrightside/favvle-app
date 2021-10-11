import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import app from ".";

export const useCreateUserWithEmailAndPassword = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const cb = (email, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        setUser(userCredential.user);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return [cb, user, loading, error];
};

export const useSignInWithEmailAndPassword = () => {
  const auth = getAuth(app);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const cb = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false);
        setUser(userCredential.user);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  };
  return [cb, user, loading, error];
};
