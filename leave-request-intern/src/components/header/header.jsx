import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const Header = ({ tabValue, setTabValue }) => {
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Total Summary" value="total" />
        <Tab label="Leave Type Summary" value="type" />
        <Tab label="Leave Request" value="request" />
      </Tabs>
    </Box>
  );
};

export default Header;
