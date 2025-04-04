import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { logout } from '../actions/userActions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


function Header() {
    const userLogin = useSelector(state => state.userLogin);
    const {userInfo} = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Navbar 
            expand="lg" 
            style={{
                padding: '15px 20px',
                backgroundImage: 'linear-gradient(to right, #1e1e30, #6C63FF)',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                borderBottom: '2px solid #6C63FF',
            }}
        >
            <Container>
                {/* Logo */}
                <Navbar.Brand 
                    href="/" 
                    style={{ 
                        fontWeight: 'bold', 
                        fontSize: '1.8rem', 
                        color: '#FFFFFF',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                    }}
                >
                    LootVault
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Search Bar */}
                    <Form className="mx-auto d-flex" style={{ width: '50%' }}>
                        <FormControl
                            type="search"
                            placeholder="Search for games..."
                            className="me-2"
                            aria-label="Search"
                            style={{
                                borderRadius: '30px',
                                border: 'none',
                                padding: '0.5rem 1rem',
                                backgroundColor: '#282c34',
                                color: '#FFFFFF',
                                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.6)',
                            }}
                        />
                        <Button 
                            variant="outline-light" 
                            style={{
                                borderRadius: '30px',
                                padding: '0.5rem 1.5rem',
                                border: '1px solid #6C63FF',
                                color: '#FFFFFF',
                                backgroundColor: '#6C63FF',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#5A53E8')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = '#6C63FF')}
                        >
                            Search
                        </Button>
                    </Form>

                    {/* Navigation Links */}
                    <Nav className="ms-auto">
                        <Nav.Link 
                            href="/" 
                            style={{
                                color: '#FFFFFF',
                                fontWeight: '500',
                                marginRight: '15px',
                                transition: 'color 0.3s ease',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                            onMouseLeave={(e) => (e.target.style.color = '#FFFFFF')}
                        >
                            <i className="fa-sharp-duotone fa-solid fa-house" style={{ marginRight: '5px' }}></i>
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            href="/about" 
                            style={{
                                color: '#FFFFFF',
                                fontWeight: '500',
                                marginRight: '15px',
                                transition: 'color 0.3s ease',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                            onMouseLeave={(e) => (e.target.style.color = '#FFFFFF')}
                        >
                            <i className="fa fa-info-circle" aria-hidden="true" style={{ marginRight: '5px' }}></i>
                            About
                        </Nav.Link>

                        {/* Profile Link */}
                        <Nav.Link 
                            href="/profile"
                            style={{
                                color: '#FFFFFF',
                                fontWeight: '500',
                                marginRight: '15px',
                                transition: 'color 0.3s ease',
                                textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                            onMouseLeave={(e) => (e.target.style.color = '#FFFFFF')}
                        >
                            <i className="fa-sharp-duotone fa-solid fa-circle-user" style={{ marginRight: '5px' }}></i>
                            Profile
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Nav className="ml-auto">
                {userInfo ? (
                    <NavDropdown title={userInfo.name} id="username">
                        <LinkContainer to="/profile">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler}>
                            Logout
                        </NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <LinkContainer to="/login">
                        <Nav.Link>
                            <i className="fas fa-user"></i> Login
                        </Nav.Link>
                    </LinkContainer>
                )}
            </Nav>
        </Navbar>
    );
}

export default Header;