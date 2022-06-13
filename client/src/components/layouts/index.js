import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import styles from './styles.module.scss';
import { Card } from 'react-bootstrap';

function Layout({ children }) {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            <Card className='text-center m-5 p-5'>{children}</Card>
            <Footer></Footer>
        </main>
    );
}

export default Layout;