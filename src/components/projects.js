import React from 'react'
import { Breadcrumb,Container,Card,ListGroup,ListGroupItem,Accordion} from 'react-bootstrap';
import Trawing from '../components/assets/Trawing.PNG'
import Homade from '../components/assets/Homade.PNG'
import Salonbote from '../components/assets/Salonbote.PNG'
import Fashionbuzz from '../components/assets/Fashionbuzz.PNG'

function projects() {
    return (
        <div class="py-5">
             <Container>
            <Breadcrumb>
  <Breadcrumb.Item >Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>Projects</Breadcrumb.Item>
</Breadcrumb>
    </Container>
    <Container>
        <div class="row">
            <div class="col-lg-4 col-sm-6 py-4">
            <Card >
  <Card.Img variant="top" src={Trawing} />
  <Card.Body>
    <Card.Title>Travel Agency</Card.Title>
    <Card.Text>
      This Website provides Travel Packages,Services,and Prices for the Travelling Places.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>404 page,Coming Soon Pages</ListGroupItem>
    <ListGroupItem>Sign up and Sign in Pages</ListGroupItem>
    <ListGroupItem>Email Template Page</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://trawing-freedom.netlify.app/" class="btn btn-success">Trawing</Card.Link>
  </Card.Body>
</Card>
            </div>
            <div class="col-lg-4 col-sm-6 py-4">
            <Card >
  <Card.Img variant="top" src={Homade} />
  <Card.Body>
    <Card.Title>Travel Agency</Card.Title>
    <Card.Text>
      This Website provides Travel Packages,Services,and Prices for the Travelling Places.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>404 page,Coming Soon Pages</ListGroupItem>
    <ListGroupItem>Sign up and Sign in Pages</ListGroupItem>
    <ListGroupItem>Email Template Page</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://homade-freedom.netlify.app/" class="btn btn-success">Trawing</Card.Link>
  </Card.Body>
</Card>
            </div>
            <div class="col-lg-4 col-sm-6 py-4">
            <Card >
  <Card.Img variant="top" src={Salonbote} />
  <Card.Body>
    <Card.Title>Travel Agency</Card.Title>
    <Card.Text>
      This Website provides Travel Packages,Services,and Prices for the Travelling Places.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>404 page,Coming Soon Pages</ListGroupItem>
    <ListGroupItem>Sign up and Sign in Pages</ListGroupItem>
    <ListGroupItem>Email Template Page</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://salonbote-web-liberty.netlify.app/" class="btn btn-success">Trawing</Card.Link>
  </Card.Body>
</Card>
            </div>
            <div class="col-lg-4 col-sm-6 py-4">
            <Card >
  <Card.Img variant="top" src={Fashionbuzz} />
  <Card.Body>
    <Card.Title>Travel Agency</Card.Title>
    <Card.Text>
      This Website provides Travel Packages,Services,and Prices for the Travelling Places.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>404 page,Coming Soon Pages</ListGroupItem>
    <ListGroupItem>Sign up and Sign in Pages</ListGroupItem>
    <ListGroupItem>Email Template Page</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://fashion-buzz-demo.netlify.app/" class="btn btn-success">Trawing</Card.Link>
  </Card.Body>
</Card>
            </div>
            {/* <div class="col-lg-4 py-3">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Trawing} />
  <Card.Body>
    <Card.Title>Travel Agency</Card.Title>
    <Card.Text>
      This Website provides Travel Packages,Services,and Prices for the Travelling Places.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>404 page,Coming Soon Pages</ListGroupItem>
    <ListGroupItem>Sign up and Sign in Pages</ListGroupItem>
    <ListGroupItem>Email Template Page</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://trawing-freedom.netlify.app/" class="btn btn-success">Trawing</Card.Link>
  </Card.Body>
</Card>
            </div> */}
        </div>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
        </div>
    )
}

export default projects
