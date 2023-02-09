import { Outlet } from 'react-router';
import styled from 'styled-components';
import MetaverseThree from './metaverse/MetaverseThree';

const Metaverse = () => {
  return (
    <FlexDiv>
      {/* <h1>meta</h1> */}
      <Outlet />
      <MetaverseThree />
    </FlexDiv>
  );
};

export default Metaverse;

const FlexDiv = styled.div`
  position: relative;
`;
