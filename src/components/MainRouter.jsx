import React from 'react'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Contactus from './pages/Contactus'
import Registration from './pages/Registration'
import StudentDetails from './pages/StudentDetails'
import Update from './pages/Update'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Routes,Route,Link } from 'react-router-dom'

const MainRouter = () => {
  return (
    <div>
        {/* -------------------------navbar---------------------------------------------------- */}
        <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand className='text-warning  fs-1'>CollegeWeb</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="">            <Link className="text-white bg-primary" to="/">Home</Link>          </Nav.Link>
            <Nav.Link href="">     <Link   className="text-white bg-primary"   to="Registration" >Registration</Link></Nav.Link> 
            <Nav.Link href="">            <Link className="text-white bg-primary" to="StudDetails" >StudentDetails</Link>    </Nav.Link>    
            <Nav.Link href="">            <Link className="text-white bg-primary" to="contactus" >Contactus</Link>    </Nav.Link>  
            <Nav.Link href="">            <Link className="text-white bg-primary" to="aboutus" >Aboutus</Link>    </Nav.Link>  
             
          </Nav>
        </Container>
      </Navbar>       
{/* ---------------------------------Routes------------------------------------------ */}
<Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="Registration" element={<Registration/>}/>
         <Route path="StudDetails" element={<StudentDetails/>}/>
          <Route path="update/:rno" element={<Update/>}/>

        <Route path="aboutus" element={<Aboutus/>}/>
        <Route path="contactus" element={<Contactus/>}/>
 
</Routes>

{/* ---------------------------------Routes--End---------------------------------------- */}
{/* ---------------------------------Footer-----------------------------------------  */}
<section className="fixed-bottom">
      <footer className="pt-2 pb-2  bg-primary text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
           
              <h5>CollegeWeb    ---   Contact Number: 1234567890</h5>
            </div>
            <div className="col-6">
              © 2026 CollegeWeb. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </section>  
   
{/* /* ---------------------------------Footer--End---------------------------------------- */ }

    </div>
  )
}

export default MainRouter

