import { createTheme } from '@mui/material/styles';

// Custom color palette inspired by IIT Delhi branding
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#003366', // Deep navy blue (IIT Delhi primary)
      light: '#0056A3',
      dark: '#001F3F',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#FFD700', // Golden accent (IIT Delhi secondary)
      light: '#FFE44D',
      dark: '#CCB000',
      contrastText: '#003366',
    },
    background: {
      default: '#F5F7FA', // Light blue-gray background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A1A2E',
      secondary: '#4A5568',
    },
    error: {
      main: '#E53E3E',
    },
    warning: {
      main: '#FF6B35',
    },
    info: {
      main: '#4299E1',
    },
    success: {
      main: '#38A169',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#003366',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#003366',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#003366',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#003366',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#1A1A2E',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      color: '#1A1A2E',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 51, 102, 0.1), 0 1px 3px rgba(0, 51, 102, 0.08)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 51, 102, 0.08)',
          '&:hover': {
            boxShadow: '0 12px 20px rgba(0, 51, 102, 0.15), 0 4px 8px rgba(0, 51, 102, 0.1)',
            transform: 'translateY(-4px)',
            borderColor: 'rgba(255, 215, 0, 0.3)',
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
            boxShadow: '0 2px 8px rgba(0, 51, 102, 0.2)',
          },
        },
        filled: {
          backgroundColor: '#E6F2FF',
          color: '#003366',
          border: '1px solid #B3D9FF',
          '&:hover': {
            backgroundColor: '#CCE5FF',
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
            boxShadow: '0 4px 12px rgba(0, 51, 102, 0.2)',
          },
        },
        contained: {
          boxShadow: '0 2px 4px rgba(0, 51, 102, 0.1)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.2s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 51, 102, 0.04)',
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#1A1A2E',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(0, 51, 102, 0.15)',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 1px 2px rgba(0, 51, 102, 0.05)',
    '0 2px 4px rgba(0, 51, 102, 0.08)',
    '0 4px 6px rgba(0, 51, 102, 0.1)',
    '0 6px 8px rgba(0, 51, 102, 0.12)',
    '0 8px 12px rgba(0, 51, 102, 0.14)',
    '0 10px 16px rgba(0, 51, 102, 0.16)',
    '0 12px 20px rgba(0, 51, 102, 0.18)',
    '0 14px 24px rgba(0, 51, 102, 0.2)',
    '0 16px 28px rgba(0, 51, 102, 0.22)',
    '0 18px 32px rgba(0, 51, 102, 0.24)',
    '0 20px 36px rgba(0, 51, 102, 0.26)',
    '0 22px 40px rgba(0, 51, 102, 0.28)',
    '0 24px 44px rgba(0, 51, 102, 0.3)',
    '0 26px 48px rgba(0, 51, 102, 0.32)',
    '0 28px 52px rgba(0, 51, 102, 0.34)',
    '0 30px 56px rgba(0, 51, 102, 0.36)',
    '0 32px 60px rgba(0, 51, 102, 0.38)',
    '0 34px 64px rgba(0, 51, 102, 0.4)',
    '0 36px 68px rgba(0, 51, 102, 0.42)',
    '0 38px 72px rgba(0, 51, 102, 0.44)',
    '0 40px 76px rgba(0, 51, 102, 0.46)',
    '0 42px 80px rgba(0, 51, 102, 0.48)',
    '0 44px 84px rgba(0, 51, 102, 0.5)',
    '0 46px 88px rgba(0, 51, 102, 0.52)',
  ],
});

export default theme;
