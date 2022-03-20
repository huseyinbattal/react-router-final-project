import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Carousel, Button, Form, Alert,Accordion } from "react-bootstrap";
import "./App.css";



function App() {


  return (
    <Router>
      <div className="App mt-4">
        <nav>
          <ul>
            <Link to="/">  <Button size="lg" variant="outline-primary">Home</Button></Link>
            <Link to="/candidates"> <Button size="lg" variant="outline-danger">Candidates</Button></Link>
            <Link to="/about"> <Button size="lg" variant="outline-success">About</Button></Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route exact path="/alert" element={<AlertPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {

  return <div>
    <Carousel className="imgSlider">
      <Carousel.Item>
        <img className="d-block w-100"
          src="https://smartslider3.com/wp-content/uploads/2019/05/rotatingslider.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://smartslider3.com/wp-content/uploads/2019/05/layerslider.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="formControl">
      <Form action="/alert" className="formControlInside">
        <h4 style={{ color: "blue", textAlign: "center", marginBottom: "20px" }}>Contact Form</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control required="true" type="text" placeholder="Enter your name..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>E-mail:</Form.Label>
          <Form.Control required="true" type="email" placeholder="Enter your e-mail" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check value="agree" id="agree" type="checkbox" label="I agree" required="true" />

        </Form.Group>
        <Button variant="primary" type="submit">Submit
          {/* <AlertButton/> */}
        </Button>

      </Form>
    </div>
  </div>;
}


function AlertPage() {
  return <div className="alertPage">
    <Alert variant="success">
      <Alert.Heading style={{ fontSize: "30px" }}>Your informations have been sent!</Alert.Heading>
      <hr />
      <p style={{fontSize:"large"}} className="mb-0">
        Aww yeah, you successfully read this important alert message. This example
        text is going to run a bit longer so that you can see how spacing within an
        alert works with this kind of content.
      </p>
    </Alert>

  </div>;
}


function About() {
  return <div className="about"><Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>About Us</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Our Missions</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion></div> ;
}

function Candidates() {
  return <h2>Candidates</h2>;
}

export default App;