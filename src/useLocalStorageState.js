import { useEffect, useState } from 'react';

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        return valueInLocalStorage ? JSON.parse(valueInLocalStorage) : initialState;
    });

    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}
