// eslint-disable-next-line
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedSection({ 
  children, 
  delay = 0,
  className = "",
  direction = "up" // up, down, left, right
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        x: 0
      } : { 
        opacity: 0, 
        ...directions[direction]
      }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
