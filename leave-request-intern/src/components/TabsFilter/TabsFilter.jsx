import React from 'react';
import { Tabs, Tab } from '@mui/material';

const TabsFilter = ({ filter, setFilter }) => {
  const filters = ['All', 'Pending', 'Approved', 'Rejected'];

  return (
    <Tabs
      value={filter}
      onChange={(e, newValue) => setFilter(newValue)}
      TabIndicatorProps={{ style: { display: 'none' } }} // hide the underline
      sx={{
        display: 'flex',
        alignItems: 'center',
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
            marginRight: index !== filters.length - 1 ? 1 : 0, // add space except last tab
            '&.Mui-selected': {
              color: 'white',
              backgroundColor: 'black',
            },
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsFilter;
