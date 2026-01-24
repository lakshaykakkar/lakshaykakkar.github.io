import { createTheme, alpha } from '@mui/material/styles';

const primary = {
  main: '#3b82f6',
  light: '#93c5fd',
  dark: '#1d4ed8',
  contrastText: '#ffffff',
};

const gray = {
  bg: '#0b1220',      // deep navy background
  panel: '#0f172a',   // panels
  surface: '#ffffff', // cards
  border: 'rgba(148, 163, 184, 0.18)',
  text: '#e5e7eb',
  subtext: '#94a3b8',
};

export default createTheme({
  palette: {
    mode: 'dark',
    primary,
    background: {
      default: gray.bg,
      paper: gray.panel,
    },
    divider: gray.border,
    text: {
      primary: gray.text,
      secondary: gray.subtext,
    },
  },

  typography: {
    fontFamily:
      '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 850, letterSpacing: '-0.03em' },
    h2: { fontWeight: 750, letterSpacing: '-0.02em' },
    body1: { lineHeight: 1.75 },
    button: { fontWeight: 800, textTransform: 'none' },
  },

  shape: { borderRadius: 16 },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(900px circle at 0% 0%, ${alpha(primary.main, 0.18)}, transparent 45%),
            radial-gradient(700px circle at 100% 0%, ${alpha(primary.light, 0.10)}, transparent 40%),
            ${gray.bg}
          `,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(gray.panel, 0.72),
          backdropFilter: 'blur(16px)',
          borderBottom: `1px solid ${gray.border}`,
          boxShadow: 'none',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background: alpha('#0b1220', 0.35),
          border: `1px solid ${gray.border}`,
          boxShadow: '0 18px 60px rgba(0, 0, 0, 0.35)',
          transition: 'transform 200ms ease, border-color 200ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            borderColor: alpha(primary.main, 0.35),
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 12, padding: '10px 20px' },
        contained: {
          boxShadow: '0 14px 40px rgba(59, 130, 246, 0.25)',
        },
      },
    },
  },
});
