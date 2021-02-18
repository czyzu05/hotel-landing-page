import {useState} from 'react'
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { sliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Hero slides={sliderData}/>
    </>
  );
}

export default App;
