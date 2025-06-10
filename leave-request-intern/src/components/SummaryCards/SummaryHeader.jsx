import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const SummaryHeader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
      <Typography variant="h6" fontWeight="bold">
        Leave Requests
      </Typography>
      <Button
  variant="contained"
  sx={{
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
    textTransform: 'none',
    boxShadow: 'none',
    border: '1px solid #ccc',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: 'none',
    },
    '&:active': {
      backgroundColor: 'white',
      color: 'black',
      boxShadow: 'none',
    },
  }}
>
  Download Report
</Button>


    </Box>
  );
};

export default SummaryHeader;
