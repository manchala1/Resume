import React from 'react'
import { Breadcrumb,Container,ProgressBar} from 'react-bootstrap';
import jahnavi from '../components/assets/Jahnavi.jpg'

function about() {
    return (
        <div class="container py-5">
            <Container>
            <Breadcrumb>
  <Breadcrumb.Item >Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>About</Breadcrumb.Item>
</Breadcrumb>
    </Container>
      <div class="container card">
        <div class="row">
        <div class="col-lg-4 col-sm-12">
            <img src={jahnavi} alt="" />
        </div>
        <div class="col-lg-8 col-sm-12">
            <p>Hi, My Name is Jahnavi Manchala .I Like coding and Building New things with new Technologies.I am a Ex-HCL Employee</p>
            <h2>Skills </h2>
            <div class="row">
                <div class="col-lg-6"><label>Python</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={60} variant="success"/></div>
            </div>
            <div class="row">
                <div class="col-lg-6"><label>HTML</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={45} variant="warning"/></div>
            </div>
            <div class="row">
                <div class="col-lg-6"><label>Css</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={55} variant="info"/></div>
            </div>
            <div class="row">
                <div class="col-lg-6"><label>Java Script</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={50} variant="success"/></div>
            </div>
            <div class="row">
                <div class="col-lg-6"><label>React JS</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={60} variant="warning"/></div>
            </div>
            <div class="row">
                <div class="col-lg-6"><label>Node JS</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={65} variant="info"/></div>
            </div>
            <div class="row">
                <div class="col-lg-6"><label>Mongo DB</label></div>
                <div class="col-lg-6"> <ProgressBar animated now={50} variant="success"/></div>
            </div>
        </div>
        
      </div>
      </div>
      </div>
    )
}

export default about
