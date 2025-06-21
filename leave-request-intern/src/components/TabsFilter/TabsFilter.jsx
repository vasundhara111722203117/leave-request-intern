import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabsFilter = ({ filter, setFilter }) => {
  const filters = ['All', 'Pending', 'Approved', 'Rejected'];

  return (
    <Box
      sx={{
        overflowX: 'auto',
        width: '100%',
        mb: 2,
        scrollbarWidth: 'none', // Firefox
        '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari
      }}
    >
      <Tabs
        value={filter}
        onChange={(e, newValue) => setFilter(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        TabIndicatorProps={{ style: { display: 'none' } }}
        sx={{
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
              color: 'black',
              backgroundColor: 'white',
              border: '1px solid #ccc',
              marginRight: 1,
              whiteSpace: 'nowrap',
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
