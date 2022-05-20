import React from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import styles from './styles.module.scss';

function Layout({ children }) {
    return (
        <main className={styles.main}>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
        </main>
    );
}

export default Layout;