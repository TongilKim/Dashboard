import { useCallback, useState } from "react";

export default function useOpenController(initialState: boolean) {
  const [isOpen, setOpenState] = useState(initialState);

  const toggle = useCallback(() => {
    setOpenState((state: boolean) => !state);
  }, [setOpenState]);

  return { isOpen, toggle };
}
