import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
// import {Link} from 'react-router';
import Project from './Project';
import Footer from './Footer';
export default class App extends Component {

  render() {
    return (
       <section className="App">
          <header>
            <nav className='landing'>
              <ul className='socialLinks'>
                <li><a href="https://twitter.com/aeokoli" target='blank' >
                  <i className="twiiter fa fa-twitter-square fa-4x" aria-hidden="true"></i></a>
                </li>
                <li><a href="https://www.instagram.com/ookli/?hl=en" target='blank'>
                  <i className="instagram fa fa-instagram fa-4x" aria-hidden="true"></i></a>
                </li>
              </ul>
              <Grid fluid>
                <Row>
                  <Col sm={12}>
                    <h1>
                      Hi, I'm <span className='wrapName'>  Emeka.</span>
                    </h1>
                    <p className='_wrap-intro'>
                      I enjoy fine-turning products to fit a need,
                      I <strong className='wrapApps'> design </strong>  and build
                      <strong className='wrapApps'> webApps </strong> that people
                      love to use.
                    </p>
                  </Col>
                </Row>
              </Grid>
            </nav>
          </header>
          <article className='wrapWork'>
            <h2> Some of my work </h2>
          </article>
    	 	  <Project/>
    	 	  <article className='clearfix'></article>
          <br /><br />
    	 	<Footer/>
    	</section>
    );
  }
}

