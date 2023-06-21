import { Box, useMantineTheme } from "@mantine/core";
import BG_Pattern from "../../assets/bg_2.svg";
import { motion } from "framer-motion";

const BackgroundBanner = () => {
  const { colorScheme } = useMantineTheme();
  const bg = colorScheme != "dark" ? "rgba(255,255,255,.5)" : "rgba(0,0,0,.1)";

  return (
    <motion.div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, height: "300%", zIndex: -1 }} transition={{ delay: 0 }}>
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: `url(${BG_Pattern})`, opacity: 0.09 }}></Box>
      <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(circle at 85% 22%, ${bg}, ${bg})` }}></Box>
    </motion.div>
  );
};

export default BackgroundBanner;
