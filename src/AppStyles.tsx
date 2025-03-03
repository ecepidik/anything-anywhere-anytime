import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const StyledPaper = styled(Paper)({
  padding: '20px',
    width: '100%',
    height: '500px', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const InvisibleButton = styled(Button)({
  width: '20%',  // Makes the button full width of the Paper
    height: '100%',  // Optional, ensures full height of the Paper
    background: 'transparent',
    border: 'none',
    textTransform: 'none',
    '&:hover': {
      background: 'transparent',  // Keeps it invisible on hover
    },
    padding: '0'
})