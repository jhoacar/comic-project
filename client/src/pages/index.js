import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './home';
import Dashboard from './dashboard';
import { useState } from "react";

import Login from './login';
import Register from './register';
import NotFound from './notfound';
import { AppContext, defaultContext } from "../store";


export default function Pages() {

    // eslint-disable-next-line
    const [globalContext, setGlobalContext] = useState(defaultContext);

    const AuthMiddleWareComponent = function ({ children }) {
        const { isLoggedIn } = globalContext;

        return (
            <>
                {isLoggedIn && children}
                {!isLoggedIn && <Home />}
            </>
        );
    }

    return (
        <AppContext.Provider value={{ globalContext, setGlobalContext }}>
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<Home />} />

                    <Route path="dashboard" element={
                        <AuthMiddleWareComponent>
                            <Dashboard />
                        </AuthMiddleWareComponent>
                    } />

                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />

                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}
