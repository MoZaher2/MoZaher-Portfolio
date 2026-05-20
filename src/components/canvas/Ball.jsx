import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei"


const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl])

  return (
   <>
     <Float speed={0.75} rotationIntensity={1} floatIntensity={2}>
       <ambientLight intensity={0.35} />
       <directionalLight position={[0, 0, 0.15]} />
       <mesh castShadow receiveShadow scale={2.75}>
         <icosahedronGeometry args={[1, 1]} />
         <meshStandardMaterial
           color="#fff8eb"
           polygonOffset
           polygonOffsetFactor={-5}
           flatShading
         />
         <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} flatShading map={decal} />
       </mesh>
     </Float>
   </>
  )
}
const BallCanvas = ({ icon, name }) => {
  return (
    <>
      <Canvas
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
     <h1 className="text-secondary text-center select-none">{name}</h1>
    </>
  )
}

export default BallCanvas

import PropTypes from "prop-types";
BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};
