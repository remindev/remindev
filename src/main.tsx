import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { useFullscreen, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";

const Main = () => {
  /**
   * Color schema for entire app
   * This includes default colors and dark, light themes
   */
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  /**
   * Toggle full screen view mode
   */
  const { toggle: toggleFulScreenMode } = useFullscreen();

  /**
   * short cut for changing the color scheme
   * Used keybord sortcuts for toggle dark and light color schemes
   */
  useHotkeys([
    ["mod+J", () => toggleColorScheme()],
    ["f", () => toggleFulScreenMode()],
  ]);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{
          fontFamily: '"Roboto Mono", monospace',
          colorScheme,
          primaryColor: "blue",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<Main />);
