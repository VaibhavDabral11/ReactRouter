import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home" >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link eventKey="/Login">Login</Nav.Link>
      </Nav.Item>
      
      <Nav.Item>
        <Nav.Link eventKey="/Register">Register</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;