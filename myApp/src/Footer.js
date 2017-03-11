import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';
import './Footer.css'



export default class Project extends Component {
  render() {
    return (
      <footer>
        <Grid>
          <Row>
            <p className='separator'> Got a project in mind?</p>
            <address>
              <a href="mailto:emekaokoli00@gmail.com" target='blank' className='wrapApps mail'>Send me a mail</a>
            </address>
            <aside>
              <h4 className='wraph4'>interact with me on social media.</h4>
              <a href="https://twitter.com/aeokoli" target='blank' ><i className="twiiter fa fa-twitter-square fa-4x" aria-hidden="true"></i></a>
              <a href="https://www.instagram.com/ookli/?hl=en" target='blank'><i className="instagram fa fa-instagram fa-4x" aria-hidden="true"></i></a>

            </aside>
          </Row>
        </Grid>
      </footer>
    );
  }
}

