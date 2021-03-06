import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { layoutState } from '../state';
import { useRecoilState } from 'recoil';

const Header = () => {
  const [layoutVisible] = useRecoilState(layoutState);

  return (
    <>
      {layoutVisible ? (
        <div>
          <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
              <Navbar.Brand as={Link} to="/main">
                <img src="/img/logo/main_logo.png" width="142.48" height="31" className="d-inline-block align-top" alt="" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navbar-nav">
                  <Nav.Link as={Link} to="/main">
                    홈
                  </Nav.Link>
                  <Nav.Link as={Link} to="/main/explorePage">
                    콘텐츠
                  </Nav.Link>
                  <Nav.Link as={Link} to="/main/likePage">
                    찜한 콘텐츠
                  </Nav.Link>
                  <Nav.Link as={Link} to="/main/myPage">
                    마이 페이지
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      ) : null}
    </>
  );
};

export default Header;
