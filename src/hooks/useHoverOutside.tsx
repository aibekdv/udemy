import { useEffect } from "react";

export function useOnHoverOutside(
  ref: React.RefObject<HTMLElement>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      event.preventDefault();
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mouseover", listener);
    return () => {
      document.removeEventListener("mouseout", listener);
    };
  }, [ref, handler]);
}
