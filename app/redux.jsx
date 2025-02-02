"use server";

import { useRef } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";

import { setupListeners } from "@reduxjs/toolkit/query";







export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default function StoreProvider({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    setupListeners(storeRef.current.dispatch);
  }
  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
