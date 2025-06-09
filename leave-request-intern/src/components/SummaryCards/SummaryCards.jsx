import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';

const SummaryCards = ({ data }) => {
  const summary = {
    Requested: data.length,
    Approved: data.filter(d => d.status === 'Approved').length,
    Rejected: data.filter(d => d.status === 'Rejected').length,
  };

  return (
    <Grid container spacing={2}>
      {Object.entries(summary).map(([label, value]) => (
        <Grid item xs={12} sm={4} key={label}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
            <Typography variant="h6">{value}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
