import { Badge, Box, Button, Container, Flex, Grid, Image, Text } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      name: "Dynotxt",
      title: "This is a blog application. where user can share their storys and knowlage to others",
      img: "https://github.com/remintroy/dynotxt/assets/86014784/0455ebd1-cd27-42c1-bdd0-dad8fdfc72ff",
      tags: ["ReactJs", "NodeJs", "Express", "MongoDb", "Redux", "Typescript", "Docker", "Micro service"],
      live: "https://dynotxt.com",
      github: "https://github.com/remintroy/dynotxt",
    },
    {
      name: "Nester-Ecommerce",
      title: "A fully functional ecommerce application",
      img: "https://github.com/remintroy/Nester-ECommerce/assets/86014784/42398e93-c532-4760-8705-4e3ce2b789fe",
      tags: ["EJS", "NodeJs", "Express", "MongoDb", "Razorpay", "Paypal"],
      live: null,
      github: "https://github.com/remintroy/Nester-ECommerce",
    },
  ];

  return (
    <>
      <section>
        <Container className="flex justify column h-full p-30 gap">
          <motion.div style={{ opacity: 0, marginTop: 30 }} className="h-full" animate={{ opacity: 1 }}>
            <Flex direction={"column"} gap={20}>
              <Text size="sm" color="dimmed">
                02 Projects.md
              </Text>
              <Box sx={{ overflowY: "hidden", scrollSnapType: "x mandatory" }}>
                <Flex w={"calc(200% + calc(20px * calc(2 - 1)))"} gap={10}>
                  {projects.map((project, index) => {
                    return (
                      <Box py={20} key={index} className="flex column gap-20 snapChild" w={"100%"}>
                        <Text size="sm">
                          0{index + 1}. {project.name}
                        </Text>
                        <motion.div
                          className="flex column gap-20"
                          style={{ opacity: 0, width: "100%", position: "relative" }}
                          whileInView={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <AnimatePresence>
                            <Box w={"100%"}>
                              <Grid>
                                <Grid.Col span={12}>
                                  <Image className="image" width={"100%"} height={"100%"} src={project.img} withPlaceholder />
                                </Grid.Col>
                                <Grid.Col span={12}>
                                  <Box className="flex column gap">
                                    <Text size={"sm"} color="dimmed">
                                      {project.title}
                                    </Text>
                                    <Box>
                                      {project.tags.map((skill) => {
                                        return <Badge>+ {skill}</Badge>;
                                      })}
                                    </Box>
                                    <motion.div
                                      className="flex column gap-20"
                                      style={{ opacity: 0, width: "100%", position: "relative" }}
                                      whileInView={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      transition={{ duration: .6 }}
                                    >
                                      <Flex gap={10} mt={10}>
                                        {project.live && (
                                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <Button leftIcon="/">Live demo</Button>
                                          </a>
                                        )}
                                        {project.github && (
                                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Button variant="outline" leftIcon="/">
                                              Github
                                            </Button>
                                          </a>
                                        )}
                                      </Flex>
                                    </motion.div>
                                  </Box>
                                </Grid.Col>
                              </Grid>
                            </Box>
                          </AnimatePresence>
                        </motion.div>
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default ProjectsSection;
