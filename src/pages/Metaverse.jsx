import { Outlet } from 'react-router';
import MetaverseThree from './metaverse/MetaverseThree';
const Metaverse = () => {
  return (
    <div>
      {/* <h1>meta</h1> */}
      <div>
        <MetaverseThree />
      </div>
      <Outlet />
    </div>
  );
};

export default Metaverse;
