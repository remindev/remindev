import { Box, Button, Container, Divider, Flex, Highlight, Kbd, Text, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import BackgroundBanner from "./components/BackgroundBanner";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const { colorScheme, colors, primaryColor } = useMantineTheme();
  const { toggleColorScheme } = useMantineColorScheme();
  const bg_inverse = colorScheme != "dark" ? colors.dark[5] : colors.gray[5];

  const { scrollYProgress, scrollY } = useScroll();

  const [showKeyBoardSortcuts, setShowKeyBoardSortcuts] = useState(false);
  const y1 = useTransform(scrollY, [0, 10000], [0, 4000]);
  return (
    <>
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

        {showKeyBoardSortcuts && (
          <motion.div
            className="fixed flex center z glassy"
            animate={{ opacity: 1 }}
            style={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <motion.div>
              <Box p={40}>
                <Text>I see 👀, you are some what like me 😉. So here is something for you to play with.</Text>
                <Divider my={20} />
                <Text color="dimmed">Keybard shortcuts</Text>
                <Flex direction={"column"} gap={10} mt={20}>
                  <Flex align={"center"} justify={"space-between"}>
                    <Text>FullScreen</Text> <Kbd>f</Kbd>
                  </Flex>
                  <Flex align={"center"} justify={"space-between"}>
                    <Text>Theme</Text> <Kbd>ctrl+j</Kbd>
                  </Flex>
                </Flex>
                <Button fullWidth mt={50} onClick={() => setShowKeyBoardSortcuts(false)}>
                  Close
                </Button>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div style={{ y: y1, position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100vh" }}>{/* <VideoBackground /> */}</motion.div>

      <section id="title.md">
        <Container>
          <Flex align="center" justify="space-between" h={100}>
            <a href="/" className="link">
              <Text style={{ userSelect: "none" }}>
                <Highlight highlight={["re"]}>remin.in</Highlight>
              </Text>
            </a>
            <Flex gap={10}>
              <Button leftIcon={"/"} onClick={() => toggleColorScheme()}>
                {colorScheme == "dark" ? "Light" : "Dark"}
              </Button>
              <a href="https://github.com/remintroy" target="_blank">
                <Button leftIcon={"/"} variant="outline">
                  Github
                </Button>
              </a>
            </Flex>
          </Flex>

          <motion.div
            style={{ opacity: 0, marginTop: 30, scale: 1, height: "calc(100% - 100px)" }}
            animate={{ opacity: 1, y: [-10, -20] }}
            transition={{ delay: 2.2 }}
          >
            <Flex align="center" justify="center" mih={500}>
              <motion.div>
                <Box p={20}>
                  <Text size="sm" color="dimmed" pb={15}>
                    01 Title.md
                  </Text>
                  {/* <Divider my={10}/> */}
                  <Text size="sm">Hi, I am</Text>
                  <Text size="2.3rem" fw={"bold"} py={5}>
                    <Highlight highlight={[""]}>Remin T Roy</Highlight>
                  </Text>
                  <Text size="sm">
                    <Highlight
                      highlight={["self-taught", "problem-solving", "interactive", "fast"]}
                      highlightStyles={{ fontWeight: "bold", background: "inherit", color: "inherit" }}
                    >
                      A self-taught MERN stack developer based in Palakkad, Kerala, curious to learn more about developing scalable distributed systems. Loves
                      problem-solving and cares about writing readable and maintainable code. Passionate about making web applications fast and interactive.
                    </Highlight>
                  </Text>

                  <Button leftIcon="/" mt={10} onClick={() => setShowKeyBoardSortcuts(true)}>
                    Don't click here
                  </Button>
                </Box>
              </motion.div>
            </Flex>
            {/* <Flex pt={50} justify="center" direction={"column"} align={"center"}>
              <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 3 }}>
                <Text size="sm">Scroll for more</Text>
              </motion.div>
            </Flex> */}
          </motion.div>
        </Container>
      </section>

      {/* <div className="dummy"></div> */}
    </>
  );
}

export default App;
