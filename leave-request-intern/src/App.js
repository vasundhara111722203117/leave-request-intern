import React, { useState } from 'react';
import { Box } from '@mui/material';

import Sidebar from './components/Sidebar/Sidebar';
import SummaryCards from './components/SummaryCards/SummaryCards';
import LeaveTable from './components/LeaveTable/LeaveTable';
import TabsHeaderWithControls from './components/TabsHeaderWithControls/TabsHeaderWithControls';

import leaveData from './data/leavedata';

const App = () => {
  const [filter, setFilter] = useState('All');

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f5f6fa',
          minHeight: '100vh',
        }}
      >
        {/* ✅ Summary section */}
        
        <Box sx={{ mb: 3 }}>
  <SummaryCards />
</Box>



        {/* 👇 Tabs + Search + Month Dropdown */}
        <TabsHeaderWithControls filter={filter} setFilter={setFilter} />

        {/* 👇 Leave request table */}
        <LeaveTable filter={filter} data={leaveData} />
      </Box>
    </Box>
  );
};

export default App;
