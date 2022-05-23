import { createContext } from "react";
import { isLoggedIn } from "../services/authorization";

export const defaultContext = {
    isLoggedIn: isLoggedIn()
}

export const AppContext = createContext(defaultContext);
