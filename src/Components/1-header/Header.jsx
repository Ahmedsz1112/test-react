import React, { useEffect, useState } from "react";
import { FaMoon, FaList } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import './header.css'
const Header = () => {
    const [showModal, setshowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if(theme === "light"){
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme])
    return (
        <header className="flex">
            <button onClick={() => {
                setshowModal(true)
            }} className="menu fa-solid fa-bars">
                <FaList/>
            </button>
            <div/>

            <nav >
                <ul className="flex">
                    <li><a href="#about">About</a></li>
                    <li><a href="#artical">Articals</a></li>
                    <li><a href="#artical">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <button className="flex" onClick={() => {
                //sent value to ls
                localStorage.setItem("currentMode" , theme === "dark" ? "light" : "dark" );

                setTheme(localStorage.getItem("currentMode"))


            }} >{theme === "dark" ? <FaMoon className="fa-moon"/>: <CiSun className="fa-sun"/>}
            </button>



            {showModal && (
                <div className="fixed">
                <ul className="modal">
                    <li>
                        <button onClick={() => {
                            setshowModal(false)
                        }}>
                            <IoMdCloseCircleOutline className="fa-xmark"/>
                        </button>
                    </li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#artical">Articals</a></li>
                    <li><a href="#artical">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                </div>
            )}

            
        </header>
    )
}

export default Header;