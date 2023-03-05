import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../css/Header.css';


export default function Header() {

	return (
		<Navbar expand='md' className='navbar-root' variant="dark">
			<Container>
				<Navbar.Brand href="/">🐒 <b>C_ASM</b></Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-collapse-id" />
				<Navbar.Collapse id="navbar-collapse-id">
					<hr style={{borderColor: 'white'}} className='d-block d-md-none' />
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						{/* Above links are just to fill navbar, no routing is implimented in this project */}
					</Nav>
        		</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}