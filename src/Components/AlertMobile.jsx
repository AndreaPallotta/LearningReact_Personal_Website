import React, { useState } from 'react';
import {Alert, Button} from 'react-bootstrap';

function AlertMobile() {

    const [show, setShow] = useState(true); 

    return (
          <Alert show={show} variant="warning" style={{
              marginTop: '1em',
          }}>
            <Alert.Heading>Hi there, thanks for viewing my website!</Alert.Heading>
            <p>
                The mobile version of this website has not been implemented yet (might not be implemented at all) due to lack of free time.
                I am sorry for the inconvenience. 
            </p>
            <p>
                Also, the website is not finished yet. I am currently fixing the navigation and adding animations/transitions!
            </p>

            <hr />
            <div className="d-flex justify-content-start">
                <Button onClick={() => setShow(false)} variant="outline-warning">
                    Close Alert
                </Button>
            </div>
          </Alert>
      );
}

export default AlertMobile;