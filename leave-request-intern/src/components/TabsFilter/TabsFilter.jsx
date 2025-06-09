import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabsFilter = ({ filter, setFilter }) => {
  const filters = ['All', 'Pending', 'Approved', 'Rejected'];

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
      <Tabs
        value={filter}
        onChange={(e, newValue) => setFilter(newValue)}
        aria-label="filter tabs"
      >
        {filters.map(tab => (
          <Tab key={tab} label={tab} value={tab} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabsFilter;
