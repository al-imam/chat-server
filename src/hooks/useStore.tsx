import { useReducer } from "react";

export default function useStore<StoreType>(
  init: StoreType
): [StoreType, React.Dispatch<Partial<StoreType>>] {
  return useReducer(
    (prev: StoreType, next: Partial<StoreType>) => ({ ...prev, ...next }),
    init
  );
}
