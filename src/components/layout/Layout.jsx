import styled from 'styled-components';
import MainNavigation from './MainNavigation';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <MainStyle>{props.children}</MainStyle>
    </div>
  );
}

export default Layout;

const MainStyle = styled.main`
  // margin: 3rem auto;
  width: 100%;
  // max-width: 40rem;
`;
