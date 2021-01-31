import React, { useState } from 'react';
import { Container, Toast } from 'react-bootstrap';
import './App.css';
import AlertMobile from './Components/AlertMobile';
import ParticlesBg from 'particles-bg';
import Navigation from './Components/Navigation';
import MainContent from './Components/MainContent';
import MetaTagsHeader from './Components/MetaTagsHeader';

function App() {

    const [navSelected, setNavSelected] = useState('home');
    const [showToast, setShowToast] = useState(false);

    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    }

    return (
      <Container>
        <MetaTagsHeader />
        <ParticlesBg color="#ffffff" type="cobweb" bg={true} style={{
          zIndex: -1,
          position: 'absolute',
          top: 0,
          left: 0
          }}/>
        <AlertMobile />

        <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide style={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}>
            <Toast.Header>
                <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1764a5a9d7d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1764a5a9d7d%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2210%22%20y%3D%2210%22%3E%20%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" className="rounded mr-2" alt="" />
                <strong className="mr-auto">The repository is private.</strong>
                <small>just now</small>
            </Toast.Header>
            <Toast.Body>Sorry. You are not allowed to access the repository (yet)!</Toast.Body>
        </Toast>

        <Navigation  navSelected = {navSelected} setNavSelected = {setNavSelected} />
        <MainContent navSelected = {navSelected} setNavSelected = {setNavSelected} setShowToast = {setShowToast} />
      </Container>
    );
}

export default App;
