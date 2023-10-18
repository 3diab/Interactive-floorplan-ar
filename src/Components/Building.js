import { Canvas } from "@react-three/fiber";
import { Rosalia } from "../Rosalia";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { useRef } from "react";

const wrapperDiv = {
  width: "100vw",
  height: "100vh",
};

const Building = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const modelViewerRef = useRef(null);

  const updateScale = (value) => {
    console.log(modelViewerRef.current.scale);
    modelViewerRef.current.scale = `${value} ${value} ${value} `;
  };
  return (
    <>
      <div style={wrapperDiv}>
        <Canvas camera={{ position: [0, 50, 50] }} shadowMap>
          <OrbitControls
            minDistance={50}
            maxDistance={1000}
            maxPolarAngle={Math.PI / 2.2}
          />
          <Environment files="./HDR/Gradient.hdr" background={true} blur={0} />
          <Rosalia />
        </Canvas>
        <Modal opened={opened} onClose={close} fullScreen>
          <model-viewer
            ref={modelViewerRef}
            style={{ width: "100vw", height: "80vh" }}
            src="./Models/rosalia_test16.glb"
            alt="A 3D model of an apartment"
            auto-rotate
            camera-controls
            ar
            ar-placement="floor"
            scale="$1 $1 $1"
            ar-modes="webxr scene-viewer quick-look"
            environment-image="neutral"
            exposure="0.5"
            shadow-intensity="1"
            shadow-softness="0.5"
            ios-src="./Models/rosalia2.usd"
          > { /*
            <div className="controls" id="control">
              <button
                id="1"
                left="90%"
                top="90%"
                onClick={() => {
                  updateScale(1);
                }}
              >
                1:1
              </button>
              <button
                id="20"
                onClick={() => {
                  updateScale(2);
                }}
              >
                1:20
              </button>
            </div>
              */ }
          </model-viewer>
        </Modal>
        <Button
          onClick={open}
          style={{
            position: "absolute",
            left: "90%",
            top: "10%",
            zIndex: 1,
            transform: "translate(-50%, -50%)",
          }}
        >
          AR
        </Button>
        <Link to="/">
          <Button
            style={{
              position: "absolute",
              left: "10%",
              top: "10%",
              zIndex: 1,
              transform: "translate(-50%, -50%)",
            }}
          >
            Back
          </Button>
        </Link>
      </div>
      <Loader />
    </>
  );
};



export default Building;
