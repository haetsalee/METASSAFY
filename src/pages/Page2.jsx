// import { useHistory } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

// import { AnimationClip, AnimationMixer } from "three";

import Stats from 'three/examples/jsm/libs/stats.module';

import { socket } from '../Socket';
import Card from '../components/UI/Card';
import Chat from '../modules/chat/Chat';

function Page2() {
  const canvasRef = useRef(null); // useRef사용
  const [canvasTag, setCanvasTag] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setCanvasTag(canvas);

    let id;
    // let instances = [];
    let clients = new Object();
    console.log(clients);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('white');

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // camera.position.z = 96;
    camera.position.y = 5;
    camera.position.z = 5;
    camera.position.x = 5;

    // canvas가 하나뿐이면 아래처럼 id 설렉트 후 render에 넣지 않아도
    // 3D 오브젝트가 알아서 canvas 안에 들어가는 것 같음.
    // 다만 지정 했을 때 안 했을 때 렌더 되는 위치가 다르다(이유는 잘...)

    // const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.shadowMap.enabled = true;
    // ㄴ 이게 무엇인지는 확인이 필요
    // document.body.appendChild(renderer.domElement);
    //   // ㄴ 이건 필요함(없으면 렌더가 안보임)

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    // orbitControls.minDistance = 5;
    // orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);

    let loaders = new GLTFLoader();
    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
    loaders.setDRACOLoader(dracoLoader);

    loaders.load(
      'model/map/map.gltf',
      function (gltf) {
        gltf.scene.scale.set(10, 10, 10);
        // gltf.scene.position.y = 0.5;
        gltf.scene.position.z = 5;
        scene.add(gltf.scene);
      },
      // called while loading is progressing
      function (xhr) {
        // console.log(xhr)
        // console.log((xhr.loaded / xhr.total) * 100 + "% loaded city");
      },
      // called when loading has errors
      function (error) {
        console.log(error);
      }
    );

    // animation 관련
    let mixer;

    loaders.load(
      // "model/toon_cat_free/scene.gltf",
      'model/people/ilbuni.glb',
      function (gltf) {
        // console.log('-------------')
        // console.log(gltf.scene.children);
        // console.log(gltf);
        // console.log(gltf.animations[0]);
        // console.log(gltf.animations[1]);
        // console.log(gltf.animations[2]);

        mixer = new THREE.AnimationMixer(gltf.scene.children[0]);
        const actions = [];
        actions[0] = mixer.clipAction(gltf.animations[0]);
        actions[0].play();
        animate();

        // console.log('-------------')
        // gltf.scene.scale.x = 0.01;
        // gltf.scene.scale.y = 0.01;
        // gltf.scene.scale.z = 0.01;
        gltf.scene.scale.x = 3;
        gltf.scene.scale.y = 3;
        gltf.scene.scale.z = 3;
        gltf.scene.position.y += 2;
        scene.add(gltf.scene);
        // console.log(gltf.scene.rotation)

        document.addEventListener('keydown', onDocumentKeyDown, false);
        function onDocumentKeyDown(event) {
          var keyCode = event.which;
          if (keyCode === 87) {
            gltf.scene.position.z += 0.3;
            socket.emit('move', {
              pos: [
                gltf.scene.position.x,
                gltf.scene.position.y,
                gltf.scene.position.z,
              ],
              rot: [
                gltf.scene.rotation.x,
                gltf.scene.rotation.y,
                gltf.scene.rotation.z,
              ],
            });
          } else if (keyCode === 83) {
            gltf.scene.position.z -= 0.3;
            socket.emit('move', {
              pos: [
                gltf.scene.position.x,
                gltf.scene.position.y,
                gltf.scene.position.z,
              ],
              rot: [
                gltf.scene.rotation.x,
                gltf.scene.rotation.y,
                gltf.scene.rotation.z,
              ],
            });
          } else if (keyCode === 65) {
            gltf.scene.position.x += 0.3;
            socket.emit('move', {
              pos: [
                gltf.scene.position.x,
                gltf.scene.position.y,
                gltf.scene.position.z,
              ],
              rot: [
                gltf.scene.rotation.x,
                gltf.scene.rotation.y,
                gltf.scene.rotation.z,
              ],
            });
          } else if (keyCode === 68) {
            gltf.scene.position.x -= 0.3;
            socket.emit('move', {
              pos: [
                gltf.scene.position.x,
                gltf.scene.position.y,
                gltf.scene.position.z,
              ],
              rot: [
                gltf.scene.rotation.x,
                gltf.scene.rotation.y,
                gltf.scene.rotation.z,
              ],
            });
          } else if (keyCode === 32) {
            gltf.scene.position.set(0, 0, 0);
            socket.emit('move', {
              pos: [
                gltf.scene.position.x,
                gltf.scene.position.y,
                gltf.scene.position.z,
              ],
              rot: [
                gltf.scene.rotation.x,
                gltf.scene.rotation.y,
                gltf.scene.rotation.z,
              ],
            });
          }
          animate();
        }
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded me');
      },
      // called when loading has errors
      function (error) {
        console.log(error);
      }
    );
    // ㄴ 내 모델

    // 남의 모델
    function getModel() {
      loaders.load(
        // "ptoon_cat_free/scene.gltf",
        'people/ilbuni.glb',
        function (gltf) {
          mixer = new THREE.AnimationMixer(gltf.scene.children[0]);
          const actions = [];
          actions[0] = mixer.clipAction(gltf.animations[0]);
          actions[0].play();
          // gltf.scene.scale.x = 0.01;
          // gltf.scene.scale.y = 0.01;
          // gltf.scene.scale.z = 0.01;
          gltf.scene.scale.x = 3;
          gltf.scene.scale.y = 3;
          gltf.scene.scale.z = 3;
          gltf.scene.position.y += 2;
          scene.add(gltf.scene);
          animate();
        },
        // called while loading is progressing
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        // called when loading has errors
        function (error) {
          console.log(error);
        }
      );
    }

    //On connection server sends the client his ID
    socket.on('introduction', (_id, _clientNum, _ids) => {
      for (let i = 0; i < _ids.length; i++) {
        if (_ids[i] !== _id) {
          clients[_ids[i]] = {
            mesh: null,
          };

          loaders.load(
            // "model/toon_cat_free/scene.gltf",
            'model/people/ilbuni.glb',
            function (gltf) {
              mixer = new THREE.AnimationMixer(gltf.scene.children[0]);
              const actions = [];
              actions[0] = mixer.clipAction(gltf.animations[0]);
              actions[0].play();

              // gltf.scene.scale.x = 0.01;
              // gltf.scene.scale.y = 0.01;
              // gltf.scene.scale.z = 0.01;
              gltf.scene.scale.x = 3;
              gltf.scene.scale.y = 3;
              gltf.scene.scale.z = 3;
              gltf.scene.position.y += 2;
              animate();
              clients[_ids[i]].mesh = gltf.scene;
              //Add initial users to the scene
              scene.add(clients[_ids[i]].mesh);
              socket.emit('move', {
                pos: [
                  gltf.scene.position.x,
                  gltf.scene.position.y,
                  gltf.scene.position.z,
                ],
                rot: [
                  gltf.scene.rotation.x,
                  gltf.scene.rotation.y,
                  gltf.scene.rotation.z,
                ],
              });
            },
            // called while loading is progressing
            function (xhr) {
              console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            // called when loading has errors
            function (error) {
              console.log(error);
            }
          );
        }
      }

      console.log(clients);

      id = _id;
      console.log('My ID is: ' + id);
    });

    socket.on('newUserConnected', (clientCount, _id, _ids) => {
      console.log(clientCount + ' clients connected');
      let alreadyHasUser = false;
      for (let i = 0; i < Object.keys(clients).length; i++) {
        if (Object.keys(clients)[i] === _id) {
          alreadyHasUser = true;
          break;
        }
      }
      if (_id !== id && !alreadyHasUser) {
        console.log('A new user connected with the id: ' + _id);
        clients[_id] = {
          mesh: null,
        };
        loaders.load(
          // "model/toon_cat_free/scene.gltf",
          'model/people/ilbuni.glb',
          function (gltf) {
            mixer = new THREE.AnimationMixer(gltf.scene.children[0]);
            const actions = [];
            actions[0] = mixer.clipAction(gltf.animations[0]);
            actions[0].play();
            animate();
            // gltf.scene.scale.x = 0.01;
            // gltf.scene.scale.y = 0.01;
            // gltf.scene.scale.z = 0.01;
            gltf.scene.scale.x = 3;
            gltf.scene.scale.y = 3;
            gltf.scene.scale.z = 3;
            gltf.scene.position.y += 2;
            clients[_id].mesh = gltf.scene;
            console.log(clients);
            console.log(clients[_id].mesh, 'mesh 보이는지 확인하는 용도');
            //Add initial users to the scene
            scene.add(clients[_id].mesh);
          },
          // called while loading is progressing
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
          },
          // called when loading has errors
          function (error) {
            console.log(error);
          }
        );
      }
    });

    socket.on('userDisconnected', (clientCount, _id, _ids) => {
      //Update the data from the server
      // document.getElementById("numUsers").textContent = clientCount;

      if (_id !== id) {
        console.log('A user disconnected with the id: ' + _id);
        scene.remove(clients[_id].mesh);
        delete clients[_id];
      }
    });

    socket.on('connect', () => {});

    //Update when one of the users moves in space
    socket.on('userPositions', (_clientProps) => {
      // console.log('Positions of all users are ', _clientProps, id);
      // console.log(Object.keys(_clientProps)[0] == id);
      for (let i = 0; i < Object.keys(_clientProps).length; i++) {
        if (Object.keys(_clientProps)[i] !== id) {
          //Store the values
          let oldPos = clients[Object.keys(_clientProps)[i]].mesh.position;
          let newPos = _clientProps[Object.keys(_clientProps)[i]].position;

          // console.log(newPos)

          let newRot = _clientProps[Object.keys(_clientProps)[i]].rotation;
          // console.log(newRot)

          //Create a vector 3 and lerp the new values with the old values
          let lerpedPos = new THREE.Vector3();
          lerpedPos.x = THREE.MathUtils.lerp(oldPos.x, newPos[0], 0.3);
          lerpedPos.y = THREE.MathUtils.lerp(oldPos.y, newPos[1], 0.3);
          lerpedPos.z = THREE.MathUtils.lerp(oldPos.z, newPos[2], 0.3);

          //Set the position
          // clients[Object.keys(_clientProps)[i]].mesh.position.set(
          //   lerpedPos.x,
          //   lerpedPos.y,
          //   lerpedPos.z
          // );
          clients[Object.keys(_clientProps)[i]].mesh.position.x = newPos[0];
          clients[Object.keys(_clientProps)[i]].mesh.position.y = newPos[1];
          clients[Object.keys(_clientProps)[i]].mesh.position.z = newPos[2];

          clients[Object.keys(_clientProps)[i]].mesh.rotation.x = newRot[0];
          clients[Object.keys(_clientProps)[i]].mesh.rotation.y = newRot[1];
          clients[Object.keys(_clientProps)[i]].mesh.rotation.z = newRot[2];
        }
      }
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const stats = Stats();
    // document.body.appendChild(stats.dom);

    // var xSpeed = 0.0001;
    // var ySpeed = 0.0001;

    // document.addEventListener("keydown", onDocumentKeyDown, false);
    // function onDocumentKeyDown(event) {
    //   var keyCode = event.which;
    //   if (keyCode === 87) {
    //     boxMesh.position.y += ySpeed;
    //   } else if (keyCode === 83) {
    //     boxMesh.position.y -= ySpeed;
    //   } else if (keyCode === 65) {
    //     boxMesh.position.x -= xSpeed;
    //   } else if (keyCode === 68) {
    //     boxMesh.position.x += xSpeed;
    //   } else if (keyCode === 32) {
    //     boxMesh.position.set(0, 0, 0);
    //   }
    //   animate();
    // }

    // 애니메이션
    const clock = new THREE.Clock();

    const animate = () => {
      // boxMesh.rotation.x += 0.01;
      // boxMesh.rotation.y += 0.01;

      // 애니메이션을 위한 것
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

      stats.update();
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section>
      <h1>Page2</h1>
      <Chat />
      <div className="canvas_Wrap">
        {/* <canvas id="myThreeJsCanvas"></canvas>;    */}
        <Card>
          <canvas className="meta-ssafy" ref={canvasRef}></canvas>
          <h1>Canvas</h1>
        </Card>
      </div>
    </section>
  );
}

export default Page2;
