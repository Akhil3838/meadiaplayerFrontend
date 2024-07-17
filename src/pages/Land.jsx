import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Land() {
  return (
    <>
    <Row>
      <Col md={1}></Col>
      <Col md={5} className='p-3'>
          <h3>Welcome to <span className='text-warning'>Media Plyaer</span></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis eaque ut, expedita suscipit excepturi adipisci? Asperiores rerum vitae voluptas, consectetur, repudiandae, eos quasi deleniti dolorem magnam dicta eligendi corporis perspiciatis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi similique minima explicabo eligendi nesciunt dolorem quisquam doloremque iusto enim accusamus, dolor reprehenderit pariatur. Libero, tempore sed? Sint laborum debitis similique.</p>
         <Link to='/home'> <button className='btn btn-warning mt-5'>Get Started</button></Link>
      </Col>
      <Col md={1}></Col>

      <Col md={5} className='d-flex justify-content-center align-items-center p-5'>
      <img src="https://i.pinimg.com/originals/1e/b9/8c/1eb98caa3b5394e96fee2f8645dd43b1.gif" alt="no image" className='w-75 rounded-2' />
      </Col>


    </Row>
    <div className='container'>
      <h3 className='text-center'>Features</h3>
      <Row>
      <Col md={1}></Col>
      <Col md={3}>
        <Card style={{ width: '100%' }}className='p-3 mt-5'>
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/41854/screenshots/3795361/lines2.gif" style={{height:'350px'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
      <Col md={4} className='px-md-5'>
      <Card style={{ width: '100%' }} className='p-3 mt-5 '>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/64/16/cf/6416cf11fd0bf68650a07136838bb49d.gif"  style={{height:'350px'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
      <Col md={3}>
      <Card style={{ width: '100%' }} className='p-3 mt-5'>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/64/53/24/645324641a0555cc55cea87787fc0bcb.gif" style={{height:'350px'}}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    
      </Card.Body>
    </Card>
    </Col>
      <Col md={1}></Col>

      </Row>
    </div>
    <div className="containar-fluid mt-5">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 border border-secondary p-3 mt-5 border-2 rounded-2 ">
           <div className="row p-4">
            <div className="col-md-6">
            <h3 className='text-warning'>Simple fast and PowerFul</h3>
                    <p className='mt-5'><span className='fs-5'>Play Everithing </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores aliquid dolorum quas facere enim voluptates omnis at magni adip fksdbkbsd isci explicabo. Alias modi rerum quod?</p>
                    <p><span className='fs-5'>Play Everithing </span>Lorem ipsum dolor sinnflnlt amet, consectetur adipisicing elit. Eius, dolores aliquid dolorum quas perferendis distinctio est at magni adipisci explicabo. Alias modi rerum quod?</p>
                    <p><span className='fs-5'>Play Everithing </span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, dolores aliquid dolorum quas perferendis distinctio enim voluptates omnis at magni adipisci jkdh ksdj ljlg explicabo. Alias modi rerum quod?</p>
            </div>
            <div className="col-md-6">
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/hvqnG6VjqV0" title="Thalatherichavar - Video | Romancham | Sushin Shyam | Johnpaul George Productions | Jithu Madhavan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
           </div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </>
  )
}

export default Land