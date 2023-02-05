import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function MainNavigation() {
  return (
    <HeaderStyle>
      <LogoStyle>METASSAFY</LogoStyle>
      <nav>
        <UlStyle>
          <LiStyle>
            <NavLink to="/">MainPage</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/user-profile-page">UserProfilePage</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page1">Test Page1</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page2">Canvas</NavLink>
          </LiStyle>
          <LiStyle>
            <NavLink to="/page3">Metaverse Test</NavLink>
          </LiStyle>
        </UlStyle>
      </nav>
    </HeaderStyle>
  );
}

export default MainNavigation;

const LogoStyle = styled.div`
  font-size: 2rem;
  color: white;
  font-weight: bold;
  /* @media only screen and (min-width: 768px) {
    font-size: 3rem;
  } */
`;

const UlStyle = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
  width: 100%;
`;

const LiStyle = styled.li`
  margin-left: 3rem;

  & > a {
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    :hover {
      color: navy;
    }
    :active {
      color: navy;
    }
  }

  & > a.active {
    color: #3d3d3d;
  }
  & > a.active:hover {
    color: navy;
  }
`;

const HeaderStyle = styled.header`
  width: 100%;
  box-sizing: border-box;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(to left, #c1a1d3, #c3ddff);
  /* background-color: #c1a1d3; */
  padding: 0 10%;

  /* @media only screen and (min-width: 768px) {
    > div {
      font-size: 3rem;
    }
    a {
      font-size: 0.5rem;
    }
  } */
`;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function MainNavigation() {
//   return (
//     <Navbar bg="light" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default MainNavigation;
