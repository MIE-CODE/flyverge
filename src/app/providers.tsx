"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { useAuthLogic } from "@/helpers/hooks/use-auth-logic.hooks";

const persistor = persistStore(store);
export function Providers(props: PropsWithChildren<unknown>) {
  const { loading } = useAuthLogic();
  if (loading) {
    return null;
  }
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>{props.children}</Provider>
    </PersistGate>
  );
}
