import { useReducer } from "react";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export default function useStore<StoreType>(
  init: StoreType
): [StoreType, React.Dispatch<AtLeastOne<StoreType>>] {
  return useReducer(
    (prev: StoreType, next: Partial<StoreType>) => ({ ...prev, ...next }),
    init
  );
}
