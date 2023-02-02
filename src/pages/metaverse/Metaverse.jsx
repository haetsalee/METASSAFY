import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// gltfLoader사용
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Player } from './Player';
import { House } from './House';
// import { Map } from './Map';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import gsap from 'gsap';

function Metaverse() {
  const canvasRef = useRef(null); // useRef사용
  const [canvasTag, setCanvasTag] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 1000;

    setCanvasTag(canvas);

    // Texture - 바닥 텍스쳐
    const textureLoader = new THREE.TextureLoader();
    const floorTexture = textureLoader.load('images/grid.png');
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 10;
    floorTexture.repeat.y = 10;
  }, []);

  return (
    <div
      className="canvas_Wrap"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {/* <canvas id="myThreeJsCanvas"></canvas>;    */}
      {/* <Card> */}
      <canvas className="meta-ssafy2" ref={canvasRef}></canvas>
      {/* </Card> */}
    </div>
  );
}

export default Metaverse;
