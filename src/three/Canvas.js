import { useState, useEffect } from "react";

import { io } from "socket.io-client";

import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { AnimationClip, AnimationMixer } from "three";

import Stats from "three/examples/jsm/libs/stats.module";

const socket = io.connect("http://localhost:8080", {
  path: "/socket.io",
  transports: ["websocket"],
});

function Canvas() {
  useEffect(() => {
    let id;
    let instances = [];
    let clients = new Object();
    console.log(clients);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("white");

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

    const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    // renderer.shadowMap.enabled = true;
    // ㄴ 이게 무엇인지는 확인이 필요
    document.body.appendChild(renderer.domElement);
    // ㄴ 이건 필요함(없으면 렌더가 안보임)

    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.minDistance = 5;
    orbitControls.maxDistance = 15;
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

    const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    const boxMaterial = new THREE.MeshNormalMaterial();
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);

    let loaders = new GLTFLoader();
    loaders.load(
      "toon_cat_free/scene.gltf",
      function (gltf) {
        gltf.scene.scale.x = 0.01;
        gltf.scene.scale.y = 0.01;
        gltf.scene.scale.z = 0.01;

        scene.add(gltf.scene);

        document.addEventListener("keydown", onDocumentKeyDown, false);
        function onDocumentKeyDown(event) {
          var keyCode = event.which;
          if (keyCode === 87) {
            gltf.scene.position.y += 1;
            socket.emit("move", [
              gltf.scene.position.x,
              gltf.scene.position.y,
              gltf.scene.position.z,
            ]);
          } else if (keyCode === 83) {
            gltf.scene.position.y -= 1;
            socket.emit("move", [
              gltf.scene.position.x,
              gltf.scene.position.y,
              gltf.scene.position.z,
            ]);
          } else if (keyCode === 65) {
            gltf.scene.position.x -= 1;
            socket.emit("move", [
              gltf.scene.position.x,
              gltf.scene.position.y,
              gltf.scene.position.z,
            ]);
          } else if (keyCode === 68) {
            gltf.scene.position.x += 1;
            socket.emit("move", [
              gltf.scene.position.x,
              gltf.scene.position.y,
              gltf.scene.position.z,
            ]);
          } else if (keyCode === 32) {
            gltf.scene.position.set(0, 0, 0);
            socket.emit("move", [
              gltf.scene.position.x,
              gltf.scene.position.y,
              gltf.scene.position.z,
            ]);
          }
          // animate();
        }
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
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
        "ptoon_cat_free/scene.gltf",
        function (gltf) {
          gltf.scene.scale.x = 0.01;
          gltf.scene.scale.y = 0.01;
          gltf.scene.scale.z = 0.01;
          scene.add(gltf.scene);
        },
        // called while loading is progressing
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        function (error) {
          console.log(error);
        }
      );
    }

    //On connection server sends the client his ID
    socket.on("introduction", (_id, _clientNum, _ids) => {
      for (let i = 0; i < _ids.length; i++) {
        if (_ids[i] != _id) {
          clients[_ids[i]] = {
            mesh: null,
          };

          loaders.load(
            "toon_cat_free/scene.gltf",
            function (gltf) {
              gltf.scene.scale.x = 0.01;
              gltf.scene.scale.y = 0.01;
              gltf.scene.scale.z = 0.01;
              clients[_ids[i]].mesh = gltf.scene;
              //Add initial users to the scene
              scene.add(clients[_ids[i]].mesh);
              socket.emit("move", [
                gltf.scene.position.x,
                gltf.scene.position.y,
                gltf.scene.position.z,
              ]);
            },
            // called while loading is progressing
            function (xhr) {
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
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
      console.log("My ID is: " + id);
    });

    socket.on("newUserConnected", (clientCount, _id, _ids) => {
      console.log(clientCount + " clients connected");
      let alreadyHasUser = false;
      for (let i = 0; i < Object.keys(clients).length; i++) {
        if (Object.keys(clients)[i] == _id) {
          alreadyHasUser = true;
          break;
        }
      }
      if (_id != id && !alreadyHasUser) {
        console.log("A new user connected with the id: " + _id);
        clients[_id] = {
          mesh: null,
        };
        loaders.load(
          "toon_cat_free/scene.gltf",
          function (gltf) {
            gltf.scene.scale.x = 0.01;
            gltf.scene.scale.y = 0.01;
            gltf.scene.scale.z = 0.01;
            clients[_id].mesh = gltf.scene;
            console.log(clients);
            console.log(clients[_id].mesh, "mesh 보이는지 확인하는 용도");
            //Add initial users to the scene
            scene.add(clients[_id].mesh);
          },
          // called while loading is progressing
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          // called when loading has errors
          function (error) {
            console.log(error);
          }
        );
      }
    });

    socket.on("userDisconnected", (clientCount, _id, _ids) => {
      //Update the data from the server
      // document.getElementById("numUsers").textContent = clientCount;

      if (_id != id) {
        console.log("A user disconnected with the id: " + _id);
        scene.remove(clients[_id].mesh);
        delete clients[_id];
      }
    });

    socket.on("connect", () => {});

    //Update when one of the users moves in space
    socket.on("userPositions", (_clientProps) => {
      // console.log('Positions of all users are ', _clientProps, id);
      // console.log(Object.keys(_clientProps)[0] == id);
      for (let i = 0; i < Object.keys(_clientProps).length; i++) {
        if (Object.keys(_clientProps)[i] != id) {
          //Store the values
          let oldPos = clients[Object.keys(_clientProps)[i]].mesh.position;
          let newPos = _clientProps[Object.keys(_clientProps)[i]].position;

          //Create a vector 3 and lerp the new values with the old values
          let lerpedPos = new THREE.Vector3();
          lerpedPos.x = THREE.MathUtils.lerp(oldPos.x, newPos[0], 1);
          lerpedPos.y = THREE.MathUtils.lerp(oldPos.y, newPos[1], 1);
          lerpedPos.z = THREE.MathUtils.lerp(oldPos.z, newPos[2], 1);

          //Set the position
          clients[Object.keys(_clientProps)[i]].mesh.position.set(
            lerpedPos.x,
            lerpedPos.y,
            lerpedPos.z
          );
        }
      }
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const stats = Stats();
    document.body.appendChild(stats.dom);

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

    const animate = () => {
      boxMesh.rotation.x += 0.01;
      boxMesh.rotation.y += 0.01;
      stats.update();
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, []);
  return <canvas id="myThreeJsCanvas"></canvas>;
}

export default Canvas;
