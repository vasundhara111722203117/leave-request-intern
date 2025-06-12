import React from 'react';
import { Box, Typography } from '@mui/material';
import TravelCards from './TravelCards';

const TravelList = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <Typography variant="body1" sx={{ mt: 4 }}>
        No travel requests found.
      </Typography>
    );
  }

  return (
    <Box mt={2}>
      {data.map((item, index) => (
        <TravelCards key={index} item={item} />
      ))}
    </Box>
  );
};

export default TravelList;
