import { createTheme, alpha } from '@mui/material/styles';

const primary = {
  main: '#2563eb',       // indigo-600
  light: '#60a5fa',      // indigo-400
  dark: '#1e40af',       // indigo-800
  contrastText: '#ffffff',
};

const secondary = {
  main: '#14b8a6',       // teal-500
  light: '#5eead4',      // teal-300
  dark: '#0f766e',       // teal-700
  contrastText: '#ffffff',
};

const gray = {
  0: '#ffffff',
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d1d5db',
  400: '#9ca3af',
  600: '#4b5563',
  700: '#374151',
  800: '#1f2933',
  900: '#0b1220',
};

const theme = createTheme({
  palette: {
    mode: 'light', // stop gaslighting MUI
    primary,
    secondary,
    background: {
      default: '#f6f8fb',   // soft app background
      paper: '#ffffff',    // cards/surfaces
    },
    divider: gray[200],
    text: {
      primary: '#0f172a',   // richer than Tailwind slate-900
      secondary: '#475569',
    },
  },

  typography: {
    fontFamily:
      '"Inter", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',

    h1: { fontWeight: 800, fontSize: '2.9rem', letterSpacing: '-0.03em' },
    h2: { fontWeight: 750, fontSize: '2.2rem', letterSpacing: '-0.02em' },
    h3: { fontWeight: 700, fontSize: '1.85rem', letterSpacing: '-0.015em' },
    h4: { fontWeight: 700, fontSize: '1.55rem' },
    h5: { fontWeight: 600, fontSize: '1.25rem' },
    h6: { fontWeight: 600, fontSize: '1.05rem' },

    subtitle1: { fontWeight: 600 },
    body1: { lineHeight: 1.75 },
    body2: { color: gray[700], lineHeight: 1.65 },

    button: { fontWeight: 700, letterSpacing: '0.01em' },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: `
            radial-gradient(800px circle at 0% 0%, ${alpha(primary.light, 0.08)}, transparent 40%),
            radial-gradient(600px circle at 100% 0%, ${alpha(secondary.light, 0.08)}, transparent 35%),
            #f6f8fb
          `,
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha('#ffffff', 0.75),
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${gray[200]}`,
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.06)',
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: `1px solid ${gray[200]}`,
          background: '#ffffff',
          boxShadow:
            '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 32px rgba(15, 23, 42, 0.06)',
          transition: 'transform 200ms ease, box-shadow 200ms ease',

          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow:
              '0 4px 8px rgba(15, 23, 42, 0.06), 0 20px 48px rgba(15, 23, 42, 0.10)',
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
          boxShadow: '0 10px 28px rgba(37, 99, 235, 0.25)',

          '&:hover': {
            boxShadow: '0 14px 36px rgba(37, 99, 235, 0.35)',
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
          borderColor: gray[200],
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          '&:hover': {
            backgroundColor: alpha(primary.main, 0.04),
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
            color: primary.dark,
          },
        },
      },
    },
  },
});

export default theme;
