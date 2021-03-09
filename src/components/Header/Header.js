import { Nav} from 'react-bootstrap';
import React from 'react';

const Header = () => {
    return (
        <div>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Country</Nav.Link>
                </Nav.Item>
                </Nav>
        </div>
    );
};

export default Header;<h1>Hi</h1>