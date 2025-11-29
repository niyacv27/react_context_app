import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useAuthContext() {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used inside a UserProvider");
  }
  return ctx;
}
