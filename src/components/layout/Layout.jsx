import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </div>
  );
}

export default Layout;

const MainStyle = styled.main`
  // margin: 3rem auto;
  width: 100%;
  min-height: 100vh;
  // background-color: aqua;
  /* position: absolute;
  top: 0; */
  // max-width: 40rem;
  // margin: 10rem;
`;
