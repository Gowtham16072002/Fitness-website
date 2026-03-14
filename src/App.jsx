import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Pages/Layout'

import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Programs from './Pages/Programs'
import Contact from './Pages/Contact'

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Services />} />
          <Route path="programs" element={<Programs />} />
          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
