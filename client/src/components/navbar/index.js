import React, { useContext } from 'react'
import { Button, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { handleLogout as logout } from '../../services/authorization';
import { AppContext } from '../../store';

function NavBar() {

    const navigate = useNavigate();
    const {globalContext, setGlobalContext} = useContext(AppContext);
    const { isLoggedIn } = globalContext;

    const handleLogout = () => {
        logout();
        setGlobalContext({ ...globalContext, isLoggedIn: false });
        navigate('../');
    }

    return (
        <Navbar className='mx-5 position-relative'>
            <Navbar.Brand className='justify-content-start'>
                <Link to="../" className="btn btn-secondary">Avatar App</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-3'>
                {
                    isLoggedIn ?
                        <>
                            <Link className="btn btn-primary" to={'../dashboard'}>Dashboard</Link>
                            <Button variant='primary' onClick={handleLogout}>Logout</Button>
                        </>
                        :
                        <>
                            <Link className="btn btn-primary" to={'../login'}>Iniciar Sesion</Link>
                            <Link className="btn btn-primary" to={'../register'}>Registrar</Link>
                        </>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
