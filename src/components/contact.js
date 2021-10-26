import React, { Component } from 'react'
import { Breadcrumb,Container,Form,Button} from 'react-bootstrap';

export class contact extends Component {
    render() {
        return (
            <div class="py-5">
                <Container>
            <Breadcrumb>
  <Breadcrumb.Item >Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>Contact</Breadcrumb.Item>
</Breadcrumb>
    </Container>
    <div class="container">
        <h2>Want to Say Some Thing?</h2>
        
        <Form>
        <Form.Text className="text-muted">
     For Any Query,or just to Say hello,get in touch and contact me.
    </Form.Text>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Your Message" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Send Mail
  </Button>
</Form>
    </div>
            </div>
        )
    }
}

export default contact
