import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(result =>{})
        .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg='light' varient='light' className='text-white mb-3'>
            <Container>
                <Navbar.Brand><Link to='/'>Vergo News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">All News</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <>
                        {user?.uid?
                            <>
                                {user?.displayName}
                                <Button className='py-1 mx-2' onClick={handleLogOut} variant="secondary">Log out</Button>
                            </>
                            :
                            <>
                                <Link to='/login' className='me-2'>Log in</Link>
                                <Link to='/register'>Register</Link>
                            </>
                        }
                    </>
                    <Link to='/profile' className='mx-3'>
                        {user?.photoURL ?
                            <Image
                                roundedCircle
                                src={user?.photoURL}
                                style={{height: '30px'}}
                            ></Image>
                            : <FaUser></FaUser>
                        }
                    </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;