import { createTheme, alpha } from '@mui/material/styles';

const primary = {
  main: '#1d4ed8',       // blue-700
  light: '#3b82f6',      // blue-500
  dark: '#1e40af',       // blue-800
  contrastText: '#ffffff',
};

const secondary = {
  main: '#0ea5e9',       // sky-500
  light: '#38bdf8',      // sky-400
  dark: '#0369a1',       // sky-700
  contrastText: '#ffffff',
};

const gray = {
  0: '#121212',
  50: '#1c1c1e',
  100: '#2c2c2e',
  200: '#3a3a3c',
  300: '#48484a',
  400: '#636366',
  600: '#8e8e93',
  700: '#aeaeb2',
  800: '#f2f2f7',
  900: '#ffffff',
};

const theme = createTheme({
  palette: {
    mode: 'dark', // embracing the night
    primary,
    secondary,
    background: {
      default: '#121212',   // dark background
      paper: '#1c1c1e',    // cards/surfaces
    },
    divider: gray[300],
    text: {
      primary: '#f2f2f7',   // light, clear text
      secondary: '#d1d1d6',
    },
  },

  typography: {
    fontFamily:
      '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: { fontWeight: 800, fontSize: '2.9rem', letterSpacing: '-0.03em', color: '#ffffff' },
    h2: { fontWeight: 750, fontSize: '2.2rem', letterSpacing: '-0.02em', color: '#e5e5e7' },
    h3: { fontWeight: 700, fontSize: '1.85rem', letterSpacing: '-0.015em', color: '#d1d1d6' },
    h4: { fontWeight: 700, fontSize: '1.55rem', color: '#a1a1a6' },
    h5: { fontWeight: 600, fontSize: '1.25rem', color: '#939397' },
    h6: { fontWeight: 600, fontSize: '1.05rem', color: '#8e8ea1' },

    subtitle1: { fontWeight: 600, color: '#72727d' },
    body1: { lineHeight: 1.75, color: gray[600] },
    body2: { color: gray[700], lineHeight: 1.65 },

    button: { fontWeight: 700, letterSpacing: '0.01em', color: primary.contrastText },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(600px circle at 0% 0%, ${alpha(primary.main, 0.1)}, transparent 45%),
            radial-gradient(400px circle at 100% 0%, ${alpha(secondary.main, 0.1)}, transparent 25%),
            #121212
          `,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#1c1c1e', 0.85),
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${gray[300]}`,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${gray[300]}`,
          background: '#1c1c1e',
          boxShadow:
            '0 1px 2px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.4)',
          transition: 'transform 200ms ease, box-shadow 200ms ease',

          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow:
              '0 4px 8px rgba(0, 0, 0, 0.3), 0 12px 24px rgba(0, 0, 0, 0.6)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          padding: '10px 22px',
        },

        contained: {
          background: `linear-gradient(135deg, ${primary.main}, ${primary.dark})`,
          boxShadow: '0 10px 28px rgba(30, 64, 175, 0.4)',

          '&:hover': {
            boxShadow: '0 14px 36px rgba(30, 64, 175, 0.6)',
          },
        },

        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            backgroundColor: alpha(primary.main, 0.05),
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: gray[300],
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&:hover': {
            backgroundColor: alpha(primary.main, 0.08),
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: primary.main,
          '&:hover': {
            color: primary.light,
          },
        },
      },
    },
  },
});

export default theme;