import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="row w-100 p-5">
        <div className="col-md-4">
            <h4 className='text-warning mb-4'>
                <FontAwesomeIcon icon={faVideo}/> Media Player
            </h4>
            <p style={{textAlign:'justify'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis esse rerum in, natus cupiditate aut vitae non! Animi, officiis sint iste ipsum in est ad vitae enim pariatur, nihil veniam?dhff fhh rthrt htrtr trht
            </p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center">
           <div>
                <h4>Links</h4>
                <div>
                   <Link to='/'> <p>Landing page</p></Link>
                   <Link to='/home'> <p>Home</p></Link>
                   <Link to='/watchhistory'> <p>Watch History</p></Link>
                </div>
           </div>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-2">
        <h4>Guide</h4>
            <div>
                <p>React</p>
                <p>React Boostrap</p>
                <p>Bootswatch</p>
            </div>

        </div>
        <div className="col-md-3 d-md-flex justify-content-center">
            <div>
                <h4>Contact Us</h4>
                <div className='d-flex mt-4'>
                    <input type="text" className='form-control' placeholder='Email ID' />
                    <button className='btn btn-warning ms-4 '>Subscribe</button>

                </div>
                <div className='d-flex justify-content-between mt-4'>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
                <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
               <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
               <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
               <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer