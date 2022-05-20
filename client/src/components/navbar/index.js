import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar className='mx-5 position-relative'>
            <Navbar.Brand className='justify-content-start'>
                <Link to="../" className="btn btn-secondary">Avatar App</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end gap-3'>
                <Link className="btn btn-primary" to={'../login'}>Logout</Link>
                {/* <Link className="btn btn-primary" to={'../register'}>Register</Link> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
