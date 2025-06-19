import React from 'react';
import { Box, Typography } from '@mui/material';
import TravelCards from './TravelCards';
import { useNavigate } from 'react-router-dom';

const TravelList = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/travel-requests/${id}`);
  };

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
        <TravelCards key={index} item={item} onCardClick={handleCardClick} />
      ))}
    </Box>
  );
};

export default TravelList;
