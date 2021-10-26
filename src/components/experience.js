import React from 'react'
import { Breadcrumb,Container} from 'react-bootstrap';
import './experience.css'

function experience() {
    return (
        <div class="py-5">
            <Container>
            <Breadcrumb>
  <Breadcrumb.Item >Home</Breadcrumb.Item>
  
  <Breadcrumb.Item active>Experience</Breadcrumb.Item>
</Breadcrumb>
    </Container>
    <div class="container">
        <div class="row">
            <h2>Work Experience</h2>
            
             <div class="row">
                <div class="col-lg-2">
                <p class="rejob">10X academy</p>
                
                </div>
                <div class="col-lg-10">
                <p>May-2021 - Present</p>
                    <p>built a full-stack web application Instaclone,
where users can create, view posts, and like
posts.
worked on the back-end using nodejs and
expressjs to serve the api and the frontend
design and development using react.
implemented the object data mappers using
mongoose to interact with the mongodb
database in the back-end.
added the styling for the components to make
the application responsive.
connected the front-end to the back-end using
axios to get, post, update and delete the data.
created the apis on the back-end to find, insert
and update the data in the database.
collaborated with peers and mentors in the
project through daily stand-ups, slack, code
reviews, git, and github
technologies used: html, css, javascript, reactjs,
nodejs, expressjs,mongoose, mongodb, github
link[1]https://github.com/manchala1/instaclone
</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                <p class="rejob">HCL</p>
                </div>
                <div class="col-lg-10">
                    <p>Analyst @HCL</p>
                    <p>Feb-2020 - Oct 2021</p>
                    <p>worked on oracle management system</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                <p class="rejob">W3Layouts</p>
                </div>
                <div class="col-lg-10">
                    <p>Analyst @HCL</p>
                    <p>Feb-2020 - Oct 2021</p>
                    <p>designs and creates software solutions to various
web pages.checks feasibility of software designs.
</p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-2">
                <p class="rejob">Prachatech</p>
                </div>
                <div class="col-lg-8">
                    <p>Analyst @HCL</p>
                    <p>Feb-2020 - Oct 2021</p>
                    <p>worked on oracle management system</p>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default experience
