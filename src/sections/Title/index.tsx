import { Box, Button, Container, Divider, Flex, Highlight, Kbd, Switch, Text, useMantineColorScheme } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TitleSection = () => {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const { toggle: toggleFulScreenMode, fullscreen } = useFullscreen();
  const [showKeyBoardSortcuts, setShowKeyBoardSortcuts] = useState(false);
  return (
    <>
      <AnimatePresence>
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
                <Text>Hmm... Looks like you like customise things. Me too 😍</Text>
                <Divider my={20} />
                <Text color="dimmed">Settings</Text>
                <Flex direction={"column"} gap={10} mt={20}>
                  <Flex align={"center"} justify={"space-between"}>
                    <Text>Fullscreen</Text>
                    <Flex justify={"center"} align={"center"} gap={10}>
                      <Kbd>f</Kbd>
                      <Switch checked={fullscreen} onChange={() => toggleFulScreenMode()} size="md" />
                    </Flex>
                  </Flex>
                  <Flex align={"center"} justify={"space-between"}>
                    <Text>Dark theme</Text>
                    <Flex justify={"center"} align={"center"} gap={10}>
                      <Kbd>ctrl+j</Kbd>
                      <Switch checked={colorScheme == "dark"} onChange={() => toggleColorScheme()} size="md" />
                    </Flex>
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

      <section id="title.md">
        <Container className="flex center column h-full relative">
          <Flex sx={{ position: "absolute", top: 0 }} p={30} align="center" justify="space-between" h={100} w={"100%"}>
            <a href="/" className="link">
              <Text style={{ userSelect: "none" }}>
                <Highlight highlight={[""]} highlightColor="purple">
                  : remin.in
                </Highlight>
              </Text>
            </a>
            <Flex gap={10}>
              <Button leftIcon={"/"} variant="outline" onClick={() => setShowKeyBoardSortcuts(true)}>
                Settings
              </Button>
            </Flex>
          </Flex>

          <motion.div style={{ opacity: 0, marginTop: 30, scale: 1 }} animate={{ opacity: 1, y: [-10, -20] }} transition={{ delay: 2.2 }}>
            <Flex p={20} gap={10} direction={"column"}>
              <Text size="sm" color="dimmed">
                01 Title.md
              </Text>
              {/* <Divider my={10}/> */}
              <Text size="sm">Hi, I am</Text>
              <Text size="2.3rem" fw={"bold"}>
                <Highlight highlight={[""]}>Remin T Roy</Highlight>
              </Text>
              <Box>
                {/* {["ReactJs", "NodeJs", "Express", "MongoDb", "Redux", "Typescript", "Docker", "Micro service"].map((skill) => {
                  return <Badge m={3}>{skill}</Badge>;
                })} */}
              </Box>
              <Text size="sm">
                <Highlight
                  highlight={["self-taught", "problem-solving", "interactive", "fast", "mern", "readable and maintainable"]}
                  highlightStyles={{ fontWeight: "bold", background: "inherit", color: "inherit", fontSize: "14px" }}
                >
                  A self-taught MERN stack developer based in Palakkad, Kerala. Curious to learn more about developing scalable distributed systems. Loves
                  problem-solving and cares about writing readable and maintainable code. Passionate about making web applications fast and interactive.
                </Highlight>
              </Text>
              <Box className="flex align gap" mt={10}>
                <a href="https://github.com/remintroy" target="_blank">
                  <Button leftIcon={"/"}>Github</Button>
                </a>
                <a href="https://www.linkedin.com/in/remin-t-roy/" target="_blank">
                  <Button leftIcon={"/"} variant="outline">
                    LinkedIn
                  </Button>
                </a>
                <a href="https://www.instagram.com/remin_t_roy/" target="_blank">
                  <Button leftIcon={"/"} variant="outline">
                    Instagram
                  </Button>
                </a>
              </Box>
            </Flex>
          </motion.div>

          <Flex sx={{ position: "absolute", bottom: 100 }} pt={50} justify="center" direction={"column"} align={"center"}>
            <motion.div animate={{ y: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 3 }}>
              <Text size="sm">Scroll to see projects</Text>
            </motion.div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default TitleSection;
