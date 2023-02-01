import { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
// console.log(THREE);

function Page3() {
  const canvasRef = useRef(null); // useRef사용
  const [canvasTag, setCanvasTag] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setCanvasTag(canvas);

    // const canvas = document.querySelector('#three-canvas');
    // object를 생성하여 canvas속성의 값에 canvas 대입 - 속성과 값이 같은 경우 canvas만 적어도 무방
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 창 크기 조절한다고 자동적으로 바뀌지 않기 때문에 주의가 필요할 것으로 보임

    // Scene
    // 장면 생성
    const scene = new THREE.Scene();

    // Camera
    // 주로 2가지 카메라를 많이 사용 - PerspectiveCamera
    // 1. PerspectiveCamera (원근 카메라)
    // fov 시야각 (카메라 절두체 수직 시야) aspect (카메라 절두체 종횡비) near (카메라 절두체 근평면) far (카메라 절두체 원평면)
    // const camera = new THREE.PerspectiveCamera(
    //     75, // 시야각 (field of view)
    //     window.innerWidth / window.innerHeight, // 종횡비(aspect)
    //     0.1, // near
    //     1000 // far
    // )

    // 2. OrthographicCamera (직교 카메라)
    // 멀어도 크기가 똑같이 보인다. 하늘에서 기울여서 보는 듯한 게임은 orthograpic camera를 많이 사용한다.
    // left 카메라 절두체 좌평면, right - 카메라 절두체 우평면, top - 카메라 절두체 삼평면, bottom - 카메라 절두체 하평면, near - 카메라 절두체 근평면, far - 카메라 절두체 원평면
    const camera = new THREE.OrthographicCamera(
      -(window.innerWidth / window.innerHeight), //left
      window.innerWidth / window.innerHeight, // right
      1, // top
      -1, // bottom
      0.1,
      1000
    );

    // 카메라를 살짝 뒤로 해야 잘 보인다. z축 멀어지는거 +
    camera.position.x = 2;
    camera.position.y = 10;
    camera.position.z = 1;
    // 원하는 좌표를 바라보도록 한다.
    camera.lookAt(0, 0, 0);

    // zoom만 하면 안됨 - 카메라 설정을 건드리고 나면 updateProjectionMatrix()사용해주어야 함
    camera.zoom = 0.5;
    camera.updateProjectionMatrix();

    // 무대 위에 카메라를 올려 주어야 한다.
    scene.add(camera);
    // 위치설정을 안하면 0,0,0

    // 무대 위에 올라가는 물체 하나를 mesh라고 하고 이 mesh는 Geometry(모양)와 material(재질)로 구성되어 있다
    // geometry라는 것을 자주 사용하는 직육면체를 만들 수 있는 BoxGeometry -> 1,1,1로 정육면체 만들 수 있다.
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
      // color: 0xff0000
      color: 'red',
    });
    //아직 이까지만 해서는 물체가 보이지 않는다.
    // geometry와 material을 합쳐주어야 mesh가 생성된다
    const mesh = new THREE.Mesh(geometry, material);
    // 생성된 mesh를 무대 위에 올려준다.
    scene.add(mesh);
    // 하지만 아직 안보인다. 그려주자
    // renderer를 사용해서 render해주어야 화면에 보이기 시작할 것이다.
    renderer.render(scene, camera);

    // 기본적으로 perspective camera이다가(1인칭 느낌) 메뉴 이동시 orthographic camera 사용(3인칭 느낌)
  }, []);

  return (
    <section>
      <h1>Page3</h1>
      <div className="canvas_Wrap">
        {/* <canvas id="myThreeJsCanvas"></canvas>;    */}
        {/* <Card> */}
        <canvas className="meta-ssafy2" ref={canvasRef}></canvas>
        <h1>Canvas</h1>
        {/* </Card> */}
      </div>
    </section>
  );
}

export default Page3;
