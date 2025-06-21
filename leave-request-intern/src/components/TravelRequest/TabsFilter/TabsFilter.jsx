import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabsFilter = ({ filter, setFilter }) => {
  const filters = ['All', 'Pending', 'Approved', 'Rejected'];

  return (
    <Box
      sx={{
        overflowX: 'auto',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        mb: 1,
      }}
    >
      <Tabs
        value={filter}
        onChange={(e, newValue) => setFilter(newValue)}
        TabIndicatorProps={{ style: { display: 'none' } }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          minWidth: 'max-content',
        }}
      >
        {filters.map((f, index) => (
          <Tab
            key={f}
            value={f}
            label={f}
            sx={{
              textTransform: 'none',
              fontWeight: 'bold',
              borderRadius: '8px',
              px: 2,
              py: 1,
              minHeight: 'auto',
              minWidth: 'auto',
              color: 'black',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              marginRight: index !== filters.length - 1 ? 1 : 0,
              '&.Mui-selected': {
                color: 'white',
                backgroundColor: 'black',
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabsFilter;
