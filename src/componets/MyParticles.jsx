import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.



export default function MyParticles() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          name: "Orbit",
          particles: {
              color: {
                  value: ["#bababa", "d9d9d9", "ffffff", "ffffff"],
              },
              move: {
                  enable: true,
                  speed: 3,
              },
              number: {
                  density: {
                      enable: true,
                  },
                  limit: 25,
                  value: 15,
              },
              opacity: {
                  value: .5,
              },
              orbit: {
                  animation: {
                      enable: true,
                      speed: 1,
                  },
                  enable: true,
                  opacity: 1,
                  color: "#bababa",
                  rotation: {
                      random: {
                          enable: true,
                      },
                  },
              },
              shape: {
                  type: ["circle"],
              },
              size: {
                  value: 4,
              },
          },
          background: {
              color: "#c2c2c2",
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
          },
          fullScreen: {
            zIndex: -1
          },
        }}
    />
);
}

