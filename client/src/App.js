import Pages from "./pages";
import { Toaster } from 'react-hot-toast';
import { useState } from "react";
import { isLoggedIn } from "./services/authorization";
import { AuthContext } from "./context/auth";

export default function App() {
    return (
        <AuthContext.Provider value={useState(isLoggedIn())}>
            <Toaster position="top-center" />
            <Pages />
        </AuthContext.Provider>
    )
}