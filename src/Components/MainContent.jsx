import React from 'react';
import PictureContainer from './PictureContainer';
import ContentContainer from './ContentContainer';
import { Container } from 'react-bootstrap';
import './Style.css';

function MainContent ({ navSelected, setShowToast }) {

        return (
            <Container id="main_content">
                <PictureContainer />
                <ContentContainer navSelected = {navSelected} setShowToast = {setShowToast} />
            </Container>
        );
}

export default MainContent;