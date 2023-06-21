import { Flex, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

const LoadingLogo = ({ onClick }: { onClick: () => any }) => {
  const { colorScheme, colors } = useMantineTheme();
  const bg = colorScheme == "dark" ? colors.dark[7] : "#FFFFFF";
  const logoFill = colorScheme == "dark" ? colors.gray[3] : colors.dark[5];
  return (
    <Flex direction={"column"} bg={bg} sx={{ zIndex: 1000, position: "absolute", left: 0, right: 0, top: 0, bottom: 0, height:"100%" }} align="center" justify="center">
      <motion.div exit={{scale: .1}}>
        <motion.svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="132" height="110" viewBox="0 0 92 110" fill="none">
          <motion.path
            strokeWidth={5}
            strokeDasharray={1000}
            strokeDashoffset={1000}
            opacity={1}
            animate={{ strokeDashoffset: 535, opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1] }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M65.8987 88.148H25.1875C18.3717 88.148 12.476 83.4011 11.0215 76.7423L4.69446 47.7766C3.51801 42.3907 5.49753 36.8035 9.80237 33.3597L38.3856 10.4931C43.7031 6.23905 51.2646 6.25859 56.5601 10.5401L84.0201 32.7417C88.6128 36.455 90.4944 42.5828 88.7771 48.2336L79.7722 77.8642C77.9158 83.9725 72.2828 88.148 65.8987 88.148Z"
            stroke={logoFill}
            stroke-width="5"
          />
          <motion.path
            opacity={0}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.3 }}
            d="M52.26 54.1C53.66 56.46 55.06 58.56 56.46 60.4C57.9 62.2 59.78 64.42 62.1 67.06C62.38 67.34 62.52 67.66 62.52 68.02C62.52 68.58 62.2 69.06 61.56 69.46C60.96 69.86 60.22 70.06 59.34 70.06C58.1 70.06 56.76 69.54 55.32 68.5C54.04 67.58 52.9 66.36 51.9 64.84C50.9 63.32 49.74 61.34 48.42 58.9C47.38 57.02 46.76 55.92 46.56 55.6C45 56.24 42.56 56.64 39.24 56.8C39.24 58.16 39.36 60 39.6 62.32C39.84 64.72 39.96 66.46 39.96 67.54C39.96 68.26 39.6 68.86 38.88 69.34C38.2 69.82 37.42 70.06 36.54 70.06C35.5 70.06 34.7 69.64 34.14 68.8C33.58 67.68 33.22 66.34 33.06 64.78C32.9 63.22 32.82 61.36 32.82 59.2C32.82 56.92 32.96 54.34 33.24 51.46C33.48 48.26 33.6 45.9 33.6 44.38C33.6 43.14 33.48 41.48 33.24 39.4C33.2 39.04 33.14 38.42 33.06 37.54C32.98 36.66 32.94 35.86 32.94 35.14C32.94 34.58 33.14 34.1 33.54 33.7C33.98 33.26 34.44 32.96 34.92 32.8C38.16 32.28 41.32 32.02 44.4 32.02C49.64 32.02 53.98 33 57.42 34.96C60.86 36.92 62.58 39.9 62.58 43.9C62.58 45.14 62.3 46.34 61.74 47.5C61.22 48.62 60.5 49.56 59.58 50.32C57.14 52.2 54.7 53.46 52.26 54.1ZM56.28 43.72C56.28 41.8 55.26 40.24 53.22 39.04C51.18 37.8 48.28 37.18 44.52 37.18C42.84 37.18 41.18 37.38 39.54 37.78L39.6 40.84C39.6 42.6 39.54 44.32 39.42 46C39.3 47.68 39.24 49.48 39.24 51.4C39.92 51.24 40.64 51.14 41.4 51.1C42.16 51.02 42.66 50.96 42.9 50.92C44.66 50.76 46.02 50.56 46.98 50.32C48.78 49.76 50.26 49.26 51.42 48.82C52.62 48.34 53.72 47.68 54.72 46.84C55.76 45.96 56.28 44.92 56.28 43.72Z"
            fill={logoFill}
          />
          {/* <motion.circle
            strokeWidth={5}
            strokeDasharray={1000}
            strokeDashoffset={1000}
            animate={{ strokeDashoffset: 715 }}
            transition={{ duration: 2, ease: "anticipate", delay: 1.6 }}
            fill="none"
            stroke={logoFill}
            stroke-width="4"
            cx="46"
            cy="50"
            r="44"
          />
          <motion.circle
            opacity={0}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "anticipate", delay: 2.6 }}
            fill={logoFill}
            stroke-width="3"
            cx="4"
            cy="54"
            r="6"
          >
            <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 46 48" to="360 46 52" repeatCount="indefinite" />
          </motion.circle> */}
        </motion.svg>
      </motion.div>
    </Flex>
  );
};

export default LoadingLogo;
