import { createTheme } from '@mui/material/styles';

// Elegant and modern color palette
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1a365d', // Deep navy blue - elegant and professional
      light: '#2d4a7c',
      dark: '#0f2544',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0d9488', // Elegant teal accent
      light: '#14b8a6',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc', // Clean, light gray-blue background
      paper: '#ffffff',
    },
    text: {
      primary: '#1e293b', // Dark slate for primary text
      secondary: '#64748b', // Muted slate for secondary text
    },
    error: {
      main: '#dc2626',
    },
    warning: {
      main: '#f59e0b',
    },
    info: {
      main: '#3b82f6',
    },
    success: {
      main: '#10b981',
    },
  },
  typography: {
    fontFamily: '"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#1a365d',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#1a365d',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#1a365d',
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#1a365d',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#1e293b',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      color: '#1e293b',
    },
    body1: {
      fontWeight: 400,
      letterSpacing: '0.01em',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.08), 0 1px 2px rgba(15, 23, 42, 0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(226, 232, 240, 0.8)',
          '&:hover': {
            boxShadow: '0 10px 20px rgba(15, 23, 42, 0.1), 0 3px 6px rgba(15, 23, 42, 0.08)',
            transform: 'translateY(-2px)',
            borderColor: 'rgba(13, 148, 136, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 2px 8px rgba(15, 23, 42, 0.15)',
          },
        },
        filled: {
          backgroundColor: '#f1f5f9',
          color: '#1e293b',
          border: '1px solid #e2e8f0',
          '&:hover': {
            backgroundColor: '#e2e8f0',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
          },
        },
        contained: {
          boxShadow: '0 1px 3px rgba(15, 23, 42, 0.1)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(26, 54, 93, 0.04)',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#1e293b',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#e2e8f0',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(15, 23, 42, 0.05)',
    '0 1px 3px rgba(15, 23, 42, 0.08)',
    '0 2px 4px rgba(15, 23, 42, 0.1)',
    '0 4px 6px rgba(15, 23, 42, 0.1)',
    '0 6px 8px rgba(15, 23, 42, 0.12)',
    '0 8px 10px rgba(15, 23, 42, 0.14)',
    '0 10px 12px rgba(15, 23, 42, 0.14)',
    '0 12px 16px rgba(15, 23, 42, 0.16)',
    '0 14px 18px rgba(15, 23, 42, 0.18)',
    '0 16px 20px rgba(15, 23, 42, 0.18)',
    '0 18px 24px rgba(15, 23, 42, 0.2)',
    '0 20px 28px rgba(15, 23, 42, 0.22)',
    '0 22px 32px rgba(15, 23, 42, 0.24)',
    '0 24px 36px rgba(15, 23, 42, 0.24)',
    '0 26px 40px rgba(15, 23, 42, 0.26)',
    '0 28px 44px rgba(15, 23, 42, 0.28)',
    '0 30px 48px rgba(15, 23, 42, 0.28)',
    '0 32px 52px rgba(15, 23, 42, 0.3)',
    '0 34px 56px rgba(15, 23, 42, 0.32)',
    '0 36px 60px rgba(15, 23, 42, 0.32)',
    '0 38px 64px rgba(15, 23, 42, 0.34)',
    '0 40px 68px rgba(15, 23, 42, 0.36)',
    '0 42px 72px rgba(15, 23, 42, 0.36)',
    '0 44px 76px rgba(15, 23, 42, 0.38)',
  ],
});

export default theme;
