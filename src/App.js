import React , {useEffect, useState} from 'react';
import './App.css';
import Header from './Components/1-header/Header';
import Hero from './Components/2-hero/Hero';
import Main from './Components/3-main/Main';
import Contact from './Components/4-contact/Contact';
import Footer from './Components/5-footer/Footer';
import { IoIosArrowUp } from "react-icons/io";

function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 200){
        setshowScrollBTN(true)
      }else {
        setshowScrollBTN(false)
      }
    })
  }, []);  

  const [showScrollBTN, setshowScrollBTN] = useState(false)
  
  return (
    <div className="container" id='up'>
              <Header/>
              <Hero />
              <div className='divider'/>
              <Main/>
              <div className='divider'/>
              <Contact/>
              <div className='divider'/>
              <Footer/>
              
                <a href='#up' style={{opacity: showScrollBTN ? 1 : 0 , transition: "0.3s"}}>
                  <IoIosArrowUp className='scrollTotop fa-solid fa-angle-up'/>
                </a>
          </div>
  );
}

export default App;