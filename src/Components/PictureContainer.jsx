import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import './Style.css';
import selfPicture from './../img/selfPicture.png';
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

function PictureContainer() {
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalHref, setModalHref] = useState([]);

  const handleClose = () => setShow(false);

  const handlePhoneModal = () => {
    setShow(true);
    setModalTitle("Phone Number (Email Preferred)");
    setModalHref([
      {
        name: "+1 (315) 440-0828",
        hrefReference: "tel:+13154400828"
      }
    ]);
  }

  function handleEmailModal() {
    setShow(true);
    setModalTitle("Email (Preferred)");
    setModalHref([
      {
        name: "University Email",
        hrefReference: "mailto:ap4534@rit.edu"
      },

      {
        name: "Personal Email",
        hrefReference: "mailto:andreapallotta9@gmail.com"
      }
    ]);
  }
  
    return (

        <Card id="picture_container" style={{backgroundColor: "#727e94", borderStyle: 'none'}}>
          <Card.Img variant="top" src={selfPicture} id="selfPicture" />
          <Card.Title className="card-text" style={{marginTop: '1em', fontSize: '150%', fontWeight: 'bold'}}>Andrea Pallotta</Card.Title>
          <Card.Subtitle className="card-text" style={{margin: '0.4em 0.4em 0.4em 0.4em'}}>
            3rd Year Student at Rochester Institute of Technology
          </Card.Subtitle>
          <br />
          <Card.Text>
            <p style={{fontStyle: 'italic'}}>B.S. Web and Mobile Computing</p>
            <br />
            <div>
              <Card.Link href="https://www.facebook.com/andreapallotta9/" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={32} color={'#3B5998'} className="card-icons"></FaFacebook>
              </Card.Link>
              <Card.Link href="https://www.linkedin.com/in/andreapallotta9/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={32} color={'#0E76A8'} className="card-icons"></FaLinkedin>
              </Card.Link>
              <Card.Link href="https://github.com/AndreaPallotta/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={32} color={'#4078C0'} className="card-icons"></FaGithub>
              </Card.Link>
              <Card.Link href="#" onClick={handlePhoneModal}>
                <FaPhoneAlt size={32} color={'#555555'} className="card-icons"></FaPhoneAlt>
              </Card.Link>
              <Card.Link href="#" onClick={handleEmailModal}>
                <FaEnvelope size={32} color={'#BB001B'} className="card-icons"></FaEnvelope>
              </Card.Link>
            </div>
          </Card.Text>


          <Modal show={show} onHide={handleClose}>

            <Modal.Header closeButton>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {modalHref.map(ref => (
                <a href={ref.hrefReference} style={{display: 'block'}}>{ref.name}</a>
              ))}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>

          </Modal>

        </Card>
      );
}

export default PictureContainer;