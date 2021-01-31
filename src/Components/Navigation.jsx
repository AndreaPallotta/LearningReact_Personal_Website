import React from 'react';
import NavigationItems from './NavigationItems';
import { Container } from 'react-bootstrap';

function Navigation({ navSelected, setNavSelected }) {

    return (
        <Container>
            <NavigationItems setNavSelected = {setNavSelected} navSelected = {navSelected} />
        </Container>
      );
}

export default Navigation;