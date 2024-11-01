import { useEffect, useRef } from "react";

function useInterval(callback: () => void, delay: number | null): void {
    const savedCallback = useRef<(() => void) | undefined>();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      if (delay !== null) {
        function tick() {
          if (savedCallback.current) {
            savedCallback.current();
          }
        }
        const id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  export default useInterval