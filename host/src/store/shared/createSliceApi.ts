import type { AppDispatch } from "../index";
import type {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";

type AnyActionCreator =
  | ActionCreatorWithPayload<any>
  | ActionCreatorWithoutPayload;

export function createSliceApi<T extends Record<string, AnyActionCreator>>(
  actions: T,
  dispatch: AppDispatch,
) {
  const api = {} as {
    [K in keyof T]: (...args: Parameters<T[K]>) => ReturnType<T[K]>;
  };

  (Object.keys(actions) as (keyof T)[]).forEach((key) => {
    api[key] = ((...args: Parameters<T[typeof key]>) => {
      return dispatch((actions[key] as (...a: typeof args) => any)(...args));
    }) as (typeof api)[typeof key];
  });

  return api;
}
