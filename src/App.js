import Layout from "./components/layout/Layout";
import Canvas from "./three/Canvas";
import { Route, Routes } from 'react-router-dom'

import MainPage from './pages/MainPage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';


function App() {
  return (
    <div>
      {/* <div>
      <Canvas/>
      </div> */}
    <Layout>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/Page1' element={ <Page1/> } />
        <Route path='/Page2' element={ <Page2/> } />
      </Routes>
    </Layout>
    </div >
  );
}

export default App;
