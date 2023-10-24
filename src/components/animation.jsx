import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

// animation objects

export const SlideReveal = ({
  children,
  width = "fit-content",
  delay = 0,
  flow,
  negative,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width }} className={`overflow-hidden relative`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: flow == "y" ? (negative ? -75 : 75) : 0,
            x: flow == "x" ? (negative ? -100 : 100) : 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.2, delay, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeReveal = ({ children, delay = 0, width = "fit-content" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ width }} className="overflow-hidden relative">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 2, delay, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
