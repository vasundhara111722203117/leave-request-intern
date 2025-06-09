import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';

const summaryData = [
  { label: 'Requested', value: 120, color: '#1976d2' },
  { label: 'Approved', value: 80, color: '#388e3c' },
  { label: 'Rejected', value: 20, color: '#d32f2f' },
];

const TotalSummary = () => {
  return (
    <Grid container spacing={3}>
      {summaryData.map(({ label, value, color }) => (
        <Grid item xs={12} sm={4} key={label}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: 'center',
              borderTop: `5px solid ${color}`,
              cursor: 'default',
              userSelect: 'none',
            }}
          >
            <Typography variant="h4" fontWeight="bold" color={color}>
              {value}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" mt={1}>
              {label}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TotalSummary;
