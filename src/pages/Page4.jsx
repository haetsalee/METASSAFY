import * as THREE from 'three';
import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  OrbitControls,
} from '@react-three/drei';
import { MathUtils } from 'three';

import { useEffect } from 'react';

export default function Page2() {
  useEffect(() => {
    const material = new THREE.MeshStandardMaterial();
    const geometries = [
      { geometry: new THREE.TetrahedronGeometry(2) },
      { geometry: new THREE.CylinderGeometry(0.8, 0.8, 2, 32) },
      { geometry: new THREE.ConeGeometry(1.1, 1.7, 32) },
      { geometry: new THREE.SphereGeometry(1.5, 32, 32) },
      { geometry: new THREE.IcosahedronGeometry(2) },
      { geometry: new THREE.TorusGeometry(1.1, 0.35, 16, 32) },
      { geometry: new THREE.OctahedronGeometry(2) },
      { geometry: new THREE.SphereGeometry(1.5, 32, 32) },
      { geometry: new THREE.BoxGeometry(2.5, 2.5, 2.5) },
    ];

    function Geometries() {
      const n = 40;
      const randProps = useMemo(
        () =>
          Array.from(
            { length: n },
            () => geometries[Math.floor(Math.random() * geometries.length)]
          ),
        []
      );
      return randProps.map((prop) => {
        return (
          <Float>
            <mesh
              scale={MathUtils.randFloat(0.25, 0.5)}
              position={[
                MathUtils.randFloat(-8, 8),
                MathUtils.randFloat(-8, 8),
                MathUtils.randFloat(-8, 8),
              ]}
              geometry={prop.geometry}
              material={material}
            />
          </Float>
        );
      });
    }
  });
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <Canvas camera={{ position: [0, 0, 22.5] }}>
        <hemisphereLight groundColor="blue" />
        <Html
          castShadow
          receiveShadow
          occlude="blending"
          transform
          style={{ padding: '0' }}
        >
          <iframe
            title="embed"
            width={700}
            height={500}
            src="https://www.youtube.com/embed/l2DElZeiiYA"
            // src="http://threejs.org/"
            // scrolling="no"
            // style="border:0"
          />
        </Html>
        {/* <Geometries /> */}
        <Environment background preset="dawn" blur={0.8} />
        {/* <ContactShadows position={[0, -9, 0]} opacity={0.7} scale={40} blur={1} /> */}
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
