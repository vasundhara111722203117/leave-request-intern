
import React, { useState } from 'react';

import { Box, Container } from '@mui/material';
import Header from './components/header/header';
import SummaryCards from './components/SummaryCards/SummaryCards';
import TabsFilter from './components/TabsFilter/TabsFilter';
import LeaveTable from './components/LeaveTable/LeaveTable';


import leaveData from './leavedata/leavedata';

const App = () => {
  const [filter, setFilter] = useState('All');

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Header />
      <Box sx={{ my: 3 }}>
        <SummaryCards data={leaveData} />
      </Box>
      <TabsFilter filter={filter} setFilter={setFilter} />
      <LeaveTable filter={filter} data={leaveData} />
    </Container>
  );
};

export default App;
