import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import TravelOverviewCards from './TravelOverviewCards';
import TravelList from './TravelList';

const TravelRequest = ({ onAddNew }) => {
  return (
    <Box sx={{ p: 3, backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
      {/* Title */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Travel Requests
      </Typography>

      {/* Overview Cards */}
      <TravelOverviewCards onAddNew={onAddNew} />

      {/* Download Report Button - Right Aligned */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <Button
          variant="outlined"
          startIcon={<FileDownloadIcon />}
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            borderColor: '#000',
            borderRadius: 2,
            fontWeight: 'bold',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#f0f0f0',
              borderColor: '#000',
            },
          }}
          onClick={() => {
            // Intentionally left blank — no alert or download
          }}
        >
          Download Report
        </Button>
      </Box>

      {/* Travel Cards */}
      <TravelList />
    </Box>
  );
};

export default TravelRequest;
