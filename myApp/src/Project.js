import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col  } from 'react-bootstrap';
import alphard from './alphard.png';
import optimal from './optimal.png';
import Grancore from './Grancore.png';  


  let exLink = document.querySelectorAll("button"),
    i;
    for ( i = 0; i < exLink.length; i++ ) {
      exLink[i].addEventListener("focus", function () {
        this.parentNode.parentNode.setAttribute("style", "opacity: 1; z-index: 4");
      });

      exLink[i].addEventListener("blur", function () {
        this.parentNode.parentNode.removeAttribute("style");
      });
  }

function is_touch_device() {
  return ( ('ontouchstart' in window)
           || (navigator.MaxTouchPoints > 0)
           || (navigator.msMaxTouchPoints > 0)
         );
}

if ( is_touch_device() ) {
  document.getElementById('projects').classList.add('if-touch-device');
}
export default class Project extends Component {

  render() {
    return (
      <section className='projects'>
        <article>
          <Grid >
            <Row>
              <Col sm={6}>
                <figure className=' img-block img-block--3'  tabIndex="0" aria-describedby="projets I've done" >
                  <img src={alphard} className='img-block__img' alt='' height='250px'/>
                    <figcaption className="img-block__caption" id="figcaption-1">
                      <p className="img-block__title"> Alphard Technology</p>
                      <p className='img-block__text'>
                        Alphard technology is a security, telecommunication and data solution
                         systems company.
                      </p>
                      <a href="http://alphardtech.net" className="button" target='blank'>Visit Website</a>
                    </figcaption>
                </figure>
              </Col>
              <Col sm={6}>
                <figure className=' img-block img-block--3'  tabIndex="0" aria-describedby="projects I've done" >
                  <img src={Grancore} className='img-block__img' alt='' height='250px'/>
                    <figcaption className="img-block__caption" id="figcaption-1">
                      <p className="img-block__title"> Grancore Limited</p>
                      <p className='img-block__text'>
                        Grancore offers logistics and procurement services for varried customers
                        that have shipping and procurement needs.
                      </p>
                      <a href="http://grancore.com.ng" className="button" target='blank'>Visit Website</a>
                    </figcaption>
                </figure>
              </Col>
              <Col sm={6}>
                <figure className=' img-block img-block--3'  tabIndex="0" aria-describedby="projects I've done" >
                  <img src={optimal} className='img-block__img' alt='' height='250px'/>
                    <figcaption className="img-block__caption" id="figcaption-1">
                      <p className="img-block__title"> Optimal Childrens homes</p>
                      <p className='img-block__text'>
                        Optimal Childrens homes is an establishment for abandoned children,
                        orphans, as well as the homeless.
                      </p>
                      <a href="http://optimalhomes.com.ng" className="button" target='blank'>Visit Website</a>
                    </figcaption>
                </figure>
              </Col>
            </Row>
          </Grid>
      </article>
    </section>
    );
  }
}

