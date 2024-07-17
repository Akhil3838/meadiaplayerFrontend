import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {faVideo} from '@fortawesome/free-solid-svg-icons';
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Header() {
  return (
    <div>
         <Navbar >
        <Container>
          <Navbar.Brand >
       <h4 className='text-warning'>   <FontAwesomeIcon icon={faVideo} beat className='me-3' />       Media Player
       </h4>
       
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
} 

export default Header