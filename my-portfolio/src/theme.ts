import { createTheme, alpha } from '@mui/material/styles';

const primary = {
  main: '#2563eb',       // indigo-600
  light: '#60a5fa',      // indigo-400
  dark: '#1d4ed8',       // indigo-700
  contrastText: '#ffffff',
};

const secondary = {
  main: '#14b8a6',       // teal-500
  light: '#2dd4bf',      // teal-400
  dark: '#0f766e',       // teal-700
  contrastText: '#ffffff',
};

const gray = {
  50: '#f8fafc',
  100: '#f1f5f9',
  200: '#e2e8f0',
  300: '#cbd5e1',
  700: '#334155',
  800: '#1e293b',
  900: '#0f172a',
};

const theme = createTheme({
  palette: {
    mode: 'light',
    primary,
    secondary,
    background: {
      default: gray[50],
      paper: '#ffffff',
    },
    divider: gray[200],
    text: {
      primary: gray[900],
      secondary: gray[700],
    },
  },
  typography: {
    fontFamily: '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 800, fontSize: '2.75rem', letterSpacing: '-0.02em', color: gray[900] },
    h2: { fontWeight: 700, fontSize: '2.1rem', letterSpacing: '-0.015em', color: gray[900] },
    h3: { fontWeight: 700, fontSize: '1.8rem', letterSpacing: '-0.01em', color: gray[900] },
    h4: { fontWeight: 700, fontSize: '1.5rem', color: gray[900] },
    h5: { fontWeight: 600, fontSize: '1.25rem', color: gray[800] },
    h6: { fontWeight: 600, fontSize: '1.05rem', color: gray[800] },
    subtitle1: { fontWeight: 600, color: gray[800] },
    body1: { letterSpacing: '0.005em', lineHeight: 1.7 },
    body2: { letterSpacing: '0.01em', color: gray[700], lineHeight: 1.6 },
    button: { fontWeight: 700, letterSpacing: '0.01em' },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `radial-gradient(circle at 20% 20%, ${alpha(primary.light, 0.12)}, transparent 32%),\n                       radial-gradient(circle at 80% 0%, ${alpha(secondary.light, 0.12)}, transparent 30%),\n                       ${gray[50]}`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#ffffff', 0.85),
          backdropFilter: 'blur(12px)',
          boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          border: `1px solid ${alpha(gray[200], 0.9)}`,
          boxShadow: '0 12px 30px rgba(15, 23, 42, 0.06)',
          transition: 'transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.1)',
            borderColor: alpha(primary.main, 0.25),
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          padding: '10px 22px',
          fontWeight: 700,
        },
        contained: {
          boxShadow: '0 10px 24px rgba(37, 99, 235, 0.18)',
          '&:hover': { boxShadow: '0 14px 32px rgba(37, 99, 235, 0.24)' },
        },
        outlined: {
          borderWidth: 1.5,
          '&:hover': {
            borderWidth: 1.5,
            backgroundColor: alpha(primary.main, 0.06),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
        },
        filled: {
          backgroundColor: gray[100],
          color: gray[800],
          border: `1px solid ${gray[200]}`,
          '&:hover': {
            backgroundColor: gray[200],
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 14,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: gray[200],
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          transition: 'background-color 160ms ease',
          '&:hover': {
            backgroundColor: alpha(primary.main, 0.05),
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          color: primary.main,
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline' },
        },
      },
    },
  },
});

export default theme;