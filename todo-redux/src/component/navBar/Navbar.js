import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar(){

    return(
        <>
        <div className={styles.navContainer}>
                <div className={styles.leftNav}>
                    <p>
                        <Link to="/" >
                            Utility App
                        </Link>
                    </p>

                    <p>
                        <Link to="/todos" >
                            TODO
                        </Link>
                    </p>

                    <p>
                        <Link to="/notes" >
                           Notes
                        </Link>
                    </p>
                </div>

               
        </div>
        <Outlet />
        </>
    )
}