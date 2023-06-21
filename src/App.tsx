import { Box, useMantineTheme } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Loading from "./components/Loading";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import BackgroundBanner from "./components/BackgroundBanner";
import AnimatedCursor from "react-animated-cursor";
import TitleSection from "./sections/Title";
import ProjectsSection from "./sections/ Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { colorScheme, colors, primaryColor } = useMantineTheme();

  const bg_inverse = colorScheme != "dark" ? colors.dark[5] : colors.gray[5];

  const mainContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: mainContainerRef });

  return (
    <Box ref={mainContainerRef} sx={{ position: "fixed", left: 0, right: 0, height: "100vh", overflowX: "hidden", scrollSnapType: "y mandatory" }}>
      <div>
        <motion.div style={{ scaleX: scrollYProgress, position: "fixed", zIndex: 100, top: 0, left: 0, right: 0, height: "2px", background: primaryColor }} />
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          trailingSpeed={2}
          innerStyle={{ backgroundColor: bg_inverse }}
          outerStyle={{ border: `3px solid  ${bg_inverse}` }}
        />
        <BackgroundBanner />
        <AnimatePresence>
          {isLoading && (
            <motion.div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 100 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
              <Loading onClick={() => setIsLoading(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <TitleSection />
      <ProjectsSection />

      {/* <section>
        <Container className="flex center column h-full">
          <Image
            className="image"
            width={400}
            height={400}
            src={"https://avatars.githubusercontent.com/u/86014784?s=400&u=e939daf778734cfa21f3e5cb3c523ee2b7a33486&v=4"}
            withPlaceholder
          />
        </Container>
      </section> */}

      <div className="dummy"></div>
    </Box>
  );
}

export default App;
