import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './home';
import Dashboard from './dashboard';
import Login from './login';
import Register from './register';
import NotFound from './notfound';

export default function Pages() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    );
}
