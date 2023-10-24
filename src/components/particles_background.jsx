import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              //  value: "#002B35"
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              resize: true,
              onHover: { enable: true, mode: "repulse" },
            },
          },
          particles: {
            color: {
              value: "#C4CAD6",
            },
            // links: {
            //   color: "#ffffff",
            //   distance: 150,
            //   enable: true,
            //   opacity: 0.5,
            //   width: 1,
            // },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.2,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.8, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
