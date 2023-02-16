import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// gltfLoader사용
import styled from 'styled-components';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

function BlockBoxAnimation(props) {
  const canvasRef = useRef(null); // useRef사용
  const [canvasTag, setCanvasTag] = useState([]);
  //   text="METASSAFY는
  //   PC에서 즐거운 경험을 제공합니다."
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 1000;

    setCanvasTag(canvas);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    // Camera

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.y = 1.5;
    camera.position.z = 4;
    scene.add(camera);

    // Light
    const ambientLight = new THREE.AmbientLight('white', 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight('white', 1);
    directionalLight.position.x = 1;
    directionalLight.position.z = 2;
    scene.add(directionalLight);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.minDistance = 1;
    controls.maxDistance = 8;
    // controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.3;

    // points
    // 원래 가진 형태가 없고 geometry먼저 만들고 vertex설정
    const geometry = new THREE.BufferGeometry();
    const count = 30;
    // Geometry꾸물텅 Float32Array
    // 포지션 배열 생성
    const positions = new Float32Array(count * 3); // x, y, z 있어야해서 3배
    // 랜덤 색상을 위한 색상 배열 생성
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 10; //범위 -5~ +5
      colors[i] = Math.random(); //범위 -5~ +5
    }
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3) //점 하나당 3개의 값을 이용
    );
    // console.log(geometry);
    // 랜덤으로 색 다르게 나오도록
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const textureLoader = new THREE.TextureLoader();
    const particleTexture = textureLoader.load('/images/logo.png');

    // material생성
    const material = new THREE.PointsMaterial({
      size: 0.6,
      map: particleTexture,
      // 뒤에 배경 투명하기
      transparent: true,
      alphaMap: particleTexture,
      depthWrite: false,
      // opacity: 0.2,
      // 색상
      vertexColors: true,
      // color: 'white',
      // 원근
      // sizeAttenuation: false
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    // const points = new THREE.Points(geometry, material);
    // scene.add(points);

    // FontLoader
    const fontLoader = new FontLoader();
    const font = fontLoader.load(
      // resource URL
      'NotoSansKRMedium_Regular.json',

      // onLoad callback
      function (font) {
        // do something with the font
        console.log(font);
      },

      // onProgress callback
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },

      // onError callback
      function (err) {
        console.log('An error happened');
      }
    );

    // 그리기
    const clock = new THREE.Clock();

    function draw() {
      const delta = clock.getDelta();

      controls.update();
      particles.rotateY(delta * 0.05);
      particles.rotateX(delta * 0.05);
      particles.rotateZ(delta * 0.05);

      renderer.render(scene, camera);
      renderer.setAnimationLoop(draw);
    }

    function setSize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener('resize', setSize);

    draw();
  }, []);

  return (
    <PositionDiv style={{ display: 'flex' }}>
      <canvas id="blockBox" ref={canvasRef}></canvas>
    </PositionDiv>
  );
}

export default BlockBoxAnimation;

const PositionDiv = styled.div`
  overflow-x: hidden;
`;
