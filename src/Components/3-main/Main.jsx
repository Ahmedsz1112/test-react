import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./main.css";

const  myProject = [{projectTitle: "Food" , category: "css",imgPath: "./food7.jpeg" , view:"https://ahmedsz1112.github.io/food/" , repo: "https://github.com/Ahmedsz1112/food.git"  },
                    {projectTitle: "Solar", category: "css" ,imgPath: "./solar.png" , view:"https://ahmedsz1112.github.io/Web-Masters/" , repo: "https://github.com/Ahmedsz1112/Web-Masters.git"  },
                    {projectTitle: "Landing Page", category: "css" ,imgPath: "./2.png" , view:"https://ahmedsz1112.github.io/task1/" , repo: "https://github.com/Ahmedsz1112/task1.git"  },
                    {projectTitle: "E-commerce", category: "bootstrap" ,imgPath: "./01.jpg" , view:"https://ahmedsz1112.github.io/ecimmerce-app/" , repo: "https://github.com/Ahmedsz1112/ecimmerce-app.git"  },
                    {projectTitle: "weather-app", category: "js" ,imgPath: "./weather.jpg" , view:"https://ahmedsz1112.github.io/weather-app/" , repo: "https://github.com/Ahmedsz1112/weather-app.git"  },
                    {projectTitle: "Cruds", category: "js" ,imgPath: "./coffee1.jpg" , view:"https://ahmedsz1112.github.io/my-cruds/" , repo: "https://github.com/Ahmedsz1112/my-cruds.git"  }
]

const Main = () => {
    const [currentActive, setcureentActive] = useState("all");
    const [arr, setArr] = useState(myProject);

    const handleClick = (para) => {
        setcureentActive(para);
        const newArr = myProject.filter((item) => {
            return item.category === para
        })
        setArr(newArr);
    }

    return (
        <main className="flex" id="artical">
            <section className="left-section flex">
                <button onClick={() => {
                    setcureentActive("all");
                    setArr(myProject);
                }} className={currentActive === "all" ? "active" : null}>All Projects</button>
                <button onClick={() => {
                    handleClick("css")    
                }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>
                <button onClick={() => {
                    handleClick("bootstrap")    
                }} className={currentActive === "bootstrap" ? "active" : null}>Bootstrap</button>
                <button  onClick={() => {
                    handleClick("js")
                    
                }} className={currentActive === "js" ? "active" : null}>JavaScript</button>
                <button onClick={() => {
                    handleClick("react");
                }} className={currentActive === "react" ? "active" : null}>React JS</button>
            </section>

            <section className="rigth-section flex">
            <AnimatePresence>
            {arr.map((item) => {
                    return (
                        <motion.article 
                        layout
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{type: "spring", damping: 8, stiffness: 50}}
                        key={item.imgPath} className="card">
                            <img width={266} src={item.imgPath} alt="" />
                            <div style={{width: '266px'}} className="box">
                                <h2 className="title">{item.projectTitle}</h2>
                                <p className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sequi ut ad. Minus, voluptatem accusamus!</p>
                                <div className="flex icons">
                                    <div style={{gap: '11px'}} className="flex ">
                                        <a href={item.repo} target="_blank"><i class="fa-solid fa-link"/></a>
                                        <a href={item.view} target="_blank"><i class="fa-brands fa-github"/></a>
                                    </div>
                                    <a className="link flex" href="">
                                        more 
                                        <i style={{alignSelf: "end"}} class="fa-solid fa-arrow-right"/>
                                    </a>
                                </div> 
                            </div>
                        </motion.article>
                    )
                })}
            </AnimatePresence>
            </section>
        </main>
    )
}

export default Main;