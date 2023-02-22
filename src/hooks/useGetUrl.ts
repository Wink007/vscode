import { useLocation } from "react-router-dom";

export function useGetUrl() {
  const location = useLocation();
  return location.pathname + location.search;
}
