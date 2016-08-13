import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const coverPreview = require('./cover_preview.jpg');
    const appPreview = require('./app_preview.jpg');
    const alive = require('./alive.jpg');
    const storyTime = require('./story_time.jpg');
    const girl = require('./girl.jpg');
    const secretCode = require('./secret_code.jpg');
    const facebook = require('./facebook.svg');
    const instagram = require('./instagram.svg');
    const email = require('./email.svg');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className="container">
          <div className={styles.parallaxTools}>
          <h1>make her<br/>see what<br/>she can be</h1>
          </div>
          <h2>a personalized picture book<br/>that empowers your girl.</h2>

          <img className={styles.full} src={coverPreview}/>

          <p className={styles.squigglyGreen}>
            Stereotypes start young – and so do aspirations. We’re creating a personalized picture book that challenges stereotypes and introduces your girl to a trail-blazing role-model she can be inspired by: herself.
          </p>

          <div className={styles.squareCta}>
              <h3>Launch: Fall 2016</h3>
              <p>Sign up to be aware of the project launch!</p>
              <Button bsStyle="primary" bsSize="large">Sign Up</Button>
          </div>

          <div className={styles.howItWorks}>
            <h3>How it works</h3>
            <div className={styles.one}>
              <span className={styles.number}>1</span>
              <p>Choose her name, skin color, hair style, parents’s orientation, inspiring your girl to identify with the main character.</p>
              <img className={styles.full} src={appPreview}/>
            </div>
            <div className={styles.two}>
              <Grid>
                <Row className={styles.showGrid}>
                  <Col md={6} mdPush={6}>
                    <span className={styles.number}>2</span>
                    <p>She receives the book at home, and sees herself in a fun story about bravery and resourcefulness.</p>
                    <p className={styles.squigglyYellow}>What’s the story?</p>
                  </Col>
                  <Col md={6} mdPull={6}>
                      <img className={styles.full} src={storyTime}/>
                  </Col>
                </Row>
              </Grid>
            </div>
            <div className={styles.alive}>
              <img className={styles.full} src={alive} />
            </div>
            <div className={styles.three}>
              <span className={styles.number}>3</span>
              <p>Turning inspiration into action, you can continue the fun with coding activities to get her started in coding and engineering.</p>
              <Row className={styles.showGrid}>
                  <Col md={6} mdPush={6}>
                    <img className={styles.full} src={girl}/>
                  </Col>
                  <Col md={6} mdPull={6}>
                      <div className={styles.squareCta}>
                          <h3>we’re looking for partners!</h3>
                          <p>Are you in tech education for kids? We want to partner with you to make sure that parents know their options when it comes to getting their children into coding and robotics.</p>
                          <Button bsStyle="primary" bsSize="large">Email Us</Button>
                      </div>
                  </Col>
                </Row>
            </div>
          </div>
          <div className={styles.mission}>
            <h3>this isn’t just a story about technology.</h3>
            <h3>it’s about democratizing <span>bravery</span>, <span>problem-solving</span> and <span>leadership</span>.</h3>
          </div>
          <div className={styles.social}>
            <div className="square-cta">
              <h3>Launch: Fall 2016</h3>
              <p>Sign up to be aware of the project launch!</p>
              <Button bsStyle="primary" bsSize="large">Sign Up</Button>
            </div>
            <div className={styles.socialLinks}>
              <a href="http://instagram.com" target="_blank"><img className={styles.full} src={instagram}/></a>
              <a href="http://facebook.com" target="_blank"><img className={styles.full} src={facebook}/></a>
              <a href="mailto:info@radseed.org" target="_blank"><img className={styles.full} src={email}/></a>
            </div>
          </div>
          <div className={styles.secretCode}>
            <img className={styles.full} src={secretCode} />
          </div>

        </div>
      </div>
    );
  }
}
