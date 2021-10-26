import React from 'react'
import './footer.css';

function Footer() {
    return (
        <div class="footer">
            <div class="container">
                <div class="row py-5 ">
                    <div class="col-lg-9">
                        <div class="row">
                            <div class="col-lg-3 col-sm-4">About</div>
                            <div class="col-lg-3 col-sm-4">Experience</div>
                            <div class="col-lg-3 col-sm-4">Projects</div>
                            <div class="col-lg-3 col-sm-4">Contact</div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="row">
                        <div class="col-lg-2 col-sm-6"><a href="#facebook" value="Facebook"><i class="fa fa-facebook-square fontbest"></i></a></div>
                    <div class="col-lg-2 col-sm-12"><a href="#linkedin" value="Linkedin"><i class="fa fa-linkedin-square fontbest1"></i></a></div>
                    <div class="col-lg-2 col-sm-12"><a href="#email" value="Email"><i class="fa fa-envelope fontbest2"></i></a></div>
                    <div class="col-lg-2 col-sm-12"><a href="#twitter" value="Twitter"><i class="fa fa-twitter-square fontbest3"></i></a></div>
                    <div class="col-lg-2 col-sm-12"><a href="#github" value="Github"><i class="fa fa-github-square fontbest4"></i></a></div>
                        </div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer
