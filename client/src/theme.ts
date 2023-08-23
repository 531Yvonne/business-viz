export const tokens = {
    grey: {
      100: "#f9fafa",
      200: "#f2f5f6",
      300: "#ecf0f1",
      400: "#e5ebed",
      500: "#dfe6e8",
      600: "#b2b8ba",
      700: "#868a8b",
      800: "#595c5d",
      900: "#2d2e2e",
    },
    primary: {
      // light pink
      100: "#fce5ff",
      200: "#f9ccff",
      300: "#f5b2ff",
      400: "#f299ff",
      500: "#ef7fff",
      600: "#bf66cc",
      700: "#8f4c99",
      800: "#603366",
      900: "#301933",
    },
    secondary: {
      // green
      100: "#d6f4dc",
      200: "#ace9b9",
      300: "#83df95",
      400: "#59d472",
      500: "#30c94f",
      600: "#26a13f",
      700: "#1d792f",
      800: "#135020",
      900: "#0a2810",
    },
    tertiary: {
      // blue
      500: "#55c4dc",
    },
    background: {
      light: "#353838",
      main: "#1f2026",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[500],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[700],
      },
    },
  };