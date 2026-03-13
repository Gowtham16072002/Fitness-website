// import './App.css'
// import Footer from './Footer'
// import FooterAbove from './FooterAbove'
// import Home from './Home'
// import HomeMidsec from './HomeMidsec'
// import About from './About'
// import NavBar from './NavBar'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Services from './Services'
// import Contact from './Contact'
// import Programs from './Programs'



// function App() {
  

//   return (
//     <>
//     <NavBar/>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<About/>}/>
//           <Route path='/service' element={<Services/>}/>
//           <Route path='/programs' element={<Programs/>}/>
//           <Route path='/contact' element={<Contact/>}/>
//         </Routes>
//       </BrowserRouter>
//       <Footer/>
//     </>
//   )
// }

// export default App


import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout'

import Home from './Home'
import About from './About'
import Services from './Services'
import Programs from './Programs'
import Contact from './Contact'

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
