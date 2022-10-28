import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [state, setState] = useState(() => {
    const storage = localStorage.getItem(key);
    if (!storage) {
      return initialValue;
    }
    return JSON.parse(storage);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key, initialValue]);

  return [state, setState];
}
