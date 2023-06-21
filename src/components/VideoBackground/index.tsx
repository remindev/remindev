import { Box, useMantineTheme } from "@mantine/core";

const VideoBackground = () => {
  const { colorScheme, colors } = useMantineTheme();
  const bg = colorScheme != "dark" ? "white" : colors.dark[7];
  return (
    <Box sx={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, overflow: "hidden", zIndex: -1, filter: "opacity(30%)" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(90deg, ${bg} 0%, rgba(4,50,86,0) 49%, ${bg} 100%), linear-gradient(0deg, ${bg} 0%, rgba(4,50,86,0) 49%, ${bg} 100%)`,
        }}
      ></Box>
      <video src="/videos/banner_background_2.mp4" style={{ minHeight: "100%", minWidth: "100%", width:"100% auto" }} autoPlay muted loop />
    </Box>
  );
};

export default VideoBackground;
