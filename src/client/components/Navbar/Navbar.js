import React from 'react'
import styles from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <header>
            <nav>
                <div className={styles.Logo}>
                    <a href="/">THE LOGO</a>
                </div>

                <div className={styles.Links}>
                    <ul>
                        <li><a href='#'>User Cases</a></li>
                        <li><a href='#'>Documentation</a></li>
                        <li><a href='#'>About</a></li>
                    </ul>
                </div>

                <div className={styles.User}>
                    <div className={styles.Actions}>
                        

                    </div>
                    <div className={styles.Details}>
                        
                    </div>
                </div>
            </nav>
        </header>
        
    );



} 

export default Navbar;