import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// gltfLoader사용
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Player } from './Player';
import { House } from './House';
import { Map } from './Map';
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
    const floorTexture = textureLoader.load('images/map_v3.png');
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.x = 1;
    floorTexture.repeat.y = 1;

    // Renderer
    // const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('lime');

    // Camera

    const camera = new THREE.OrthographicCamera(
      -(window.innerWidth / window.innerHeight), // left
      window.innerWidth / window.innerHeight, // right,
      1, // top
      -1, // bottom
      -1000,
      1000
    );
    const cameraPosition = new THREE.Vector3(1, 5, 5);
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    camera.zoom = 0.2;
    camera.updateProjectionMatrix();
    scene.add(camera);

    // 사용자 기준 카메라
    // const camera = new THREE.PerspectiveCamera(
    //   75,
    //   window.innerWidth / window.innerHeight,
    //   0.1,
    //   1000
    // );
    // camera.position.y = 1.5;
    // camera.position.z = 4;
    // scene.add(camera);

    // Light
    const ambientLight = new THREE.AmbientLight('white', 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight('white', 0.5);
    const directionalLightOriginPosition = new THREE.Vector3(1, 1, 1);
    directionalLight.position.x = directionalLightOriginPosition.x;
    directionalLight.position.y = directionalLightOriginPosition.y;
    directionalLight.position.z = directionalLightOriginPosition.z;
    directionalLight.castShadow = true;

    // mapSize 세팅으로 그림자 퀄리티 설정
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    // 그림자 범위
    directionalLight.shadow.camera.left = -100;
    directionalLight.shadow.camera.right = 100;
    directionalLight.shadow.camera.top = 100;
    directionalLight.shadow.camera.bottom = -100;
    directionalLight.shadow.camera.near = -100;
    directionalLight.shadow.camera.far = 100;
    scene.add(directionalLight);

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    // orbitControls.minDistance = 5;
    // orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();

    // Mesh
    const meshes = [];
    const floorMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshStandardMaterial({
        map: floorTexture,
      })
    );
    floorMesh.name = 'floor';
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.receiveShadow = true;
    scene.add(floorMesh);
    meshes.push(floorMesh);

    ////////////////////

    // 캐릭터 위치 나타낼 포인터 메쉬
    const pointerMeshTexture = textureLoader.load('/images/sta3r.png');

    const pointerMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshBasicMaterial({
        // color: 'skyblue',
        // transparent: true,
        // opacity: 0.5,
        map: pointerMeshTexture,
        size: 0.1,
        transparent: true,
        alphaMap: pointerMeshTexture,
        // depthWrite: false,
        // vertexColors: true,
        color: 'skyblue',
        opacity: 0.5,
      })
    );
    pointerMesh.rotation.x = -Math.PI / 2;
    pointerMesh.position.y = 0.01;
    pointerMesh.receiveShadow = true;
    scene.add(pointerMesh);

    // 스팟매쉬 - 여기들어가면 집 나와
    const spotMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshStandardMaterial({
        color: 'yellow',
        transparent: true,
        opacity: 0.5,
      })
    );
    spotMesh.position.set(5, 0.005, 5);
    spotMesh.rotation.x = -Math.PI / 2;
    spotMesh.receiveShadow = true;
    scene.add(spotMesh);

    // 스팟매쉬 - 여기들어가면 집 나와
    const spotMesh2 = new THREE.Mesh(
      new THREE.PlaneGeometry(3, 3),
      new THREE.MeshStandardMaterial({
        color: 'yellow',
        transparent: true,
        opacity: 0.5,
      })
    );
    spotMesh2.position.set(10, 0.005, 5);
    spotMesh2.rotation.x = -Math.PI / 2;
    spotMesh2.receiveShadow = true;
    scene.add(spotMesh2);

    // gltf로더 로드
    let gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    gltfLoader.setDRACOLoader(dracoLoader);

    // 집 로드
    const house = new House({
      gltfLoader,
      scene,
      modelSrc: '/models/house.glb',
      x: 5,
      y: -1.3,
      z: 2,
    });

    // 지도 로드
    // gltfLoader.load(
    //   // 'build/model/map/map.gltf',
    //   'models/map_floorx.glb',
    //   function (gltf) {
    //     gltf.scene.scale.set(1, 1, 1);
    //     // gltf.scene.position.y = 0.1;
    //     gltf.scene.position.z = 10;
    //     scene.add(gltf.scene);
    //   },
    //   // called while loading is progressing
    //   function (xhr) {
    //     // console.log(xhr)
    //     // console.log((xhr.loaded / xhr.total) * 100 + "% loaded city");
    //   },
    //   // called when loading has errors
    //   function (error) {
    //     console.log(error);
    //   }
    // );

    const player = new Player({
      scene,
      meshes,
      gltfLoader,
      modelSrc: '/models/people.glb',
    });

    const raycaster = new THREE.Raycaster();
    let mouse = new THREE.Vector2();
    let destinationPoint = new THREE.Vector3();
    let angle = 0;
    let isPressed = false; // 마우스를 누르고 있는 상태

    // 그리기
    const clock = new THREE.Clock();

    function draw() {
      const delta = clock.getDelta();

      if (player.mixer) player.mixer.update(delta);

      if (player.modelMesh) {
        camera.lookAt(player.modelMesh.position);
      }

      if (player.modelMesh) {
        if (isPressed) {
          raycasting();
        }

        if (player.moving) {
          // 걸어가는 상태
          angle = Math.atan2(
            destinationPoint.z - player.modelMesh.position.z,
            destinationPoint.x - player.modelMesh.position.x
          );
          player.modelMesh.position.x += Math.cos(angle) * 0.05;
          player.modelMesh.position.z += Math.sin(angle) * 0.05;

          camera.position.x = cameraPosition.x + player.modelMesh.position.x;
          camera.position.z = cameraPosition.z + player.modelMesh.position.z;

          player.actions[0].stop();
          player.actions[1].play();

          if (
            Math.abs(destinationPoint.x - player.modelMesh.position.x) < 0.03 &&
            Math.abs(destinationPoint.z - player.modelMesh.position.z) < 0.03
          ) {
            player.moving = false;
            console.log('멈춤');
          }

          if (
            Math.abs(spotMesh.position.x - player.modelMesh.position.x) < 1.5 &&
            Math.abs(spotMesh.position.z - player.modelMesh.position.z) < 1.5
          ) {
            // redirection
            window.location.href = 'http://localhost:3000/page4';
            if (!house.visible) {
              console.log('나와');
              house.visible = true;
              // naver로이동
              // window.open('https://naver.com');
              spotMesh.material.color.set('seagreen');
              gsap.to(house.modelMesh.position, {
                duration: 1,
                y: 1,
                ease: 'Bounce.easeOut',
              });
              gsap.to(camera.position, {
                duration: 1,
                y: 3,
              });
            }
          } else if (house.visible) {
            console.log('들어가');
            house.visible = false;
            spotMesh.material.color.set('yellow');
            gsap.to(house.modelMesh.position, {
              duration: 0.5,
              y: -1.3,
            });
            gsap.to(camera.position, {
              duration: 1,
              y: 5,
            });
          }
        } else {
          // 서 있는 상태
          player.actions[1].stop();
          player.actions[0].play();
        }
      }

      renderer.render(scene, camera);
      renderer.setAnimationLoop(draw);
    }

    function checkIntersects() {
      // raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(meshes);
      for (const item of intersects) {
        if (item.object.name === 'floor') {
          destinationPoint.x = item.point.x;
          destinationPoint.y = 0.3;
          destinationPoint.z = item.point.z;
          player.modelMesh.lookAt(destinationPoint);

          // console.log(item.point)

          player.moving = true;

          pointerMesh.position.x = destinationPoint.x;
          pointerMesh.position.z = destinationPoint.z;
        }
        break;
      }
    }

    function setSize() {
      camera.left = -(window.innerWidth / window.innerHeight);
      camera.right = window.innerWidth / window.innerHeight;
      camera.top = 1;
      camera.bottom = -1;

      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    }

    // 이벤트
    window.addEventListener('resize', setSize);

    // 마우스 좌표를 three.js에 맞게 변환
    function calculateMousePosition(e) {
      mouse.x = (e.clientX / canvas.clientWidth) * 2 - 1;
      mouse.y = -((e.clientY / canvas.clientHeight) * 2 - 1);
    }

    // 변환된 마우스 좌표를 이용해 래이캐스팅
    function raycasting() {
      raycaster.setFromCamera(mouse, camera);
      checkIntersects();
    }

    // 마우스 이벤트
    canvas.addEventListener('mousedown', (e) => {
      isPressed = true;
      calculateMousePosition(e);
    });
    canvas.addEventListener('mouseup', () => {
      isPressed = false;
    });
    canvas.addEventListener('mousemove', (e) => {
      if (isPressed) {
        calculateMousePosition(e);
      }
    });

    // 터치 이벤트
    canvas.addEventListener('touchstart', (e) => {
      isPressed = true;
      calculateMousePosition(e.touches[0]);
    });
    canvas.addEventListener('touchend', () => {
      isPressed = false;
    });
    canvas.addEventListener('touchmove', (e) => {
      if (isPressed) {
        calculateMousePosition(e.touches[0]);
      }
    });

    draw();
  }, []);

  return (
    <div
      className="canvas_Wrap"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      {/* <canvas id="myThreeJsCanvas"></canvas>;    */}
      {/* <Card> */}
      <canvas className="meta-ssafy2" ref={canvasRef}></canvas>
      <video id="video"></video>
      {/* </Card> */}
    </div>
  );
}

export default Metaverse;
