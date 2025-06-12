import React, { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './components/Sidebar/Sidebar';

// Leave-related components
import SummaryCards from './components/SummaryCards/SummaryCards';
import TabsHeaderWithControls from './components/TabsHeaderWithControls/TabsHeaderWithControls';
import LeaveTable from './components/LeaveTable/LeaveTable';
import leaveData from './data/leavedata';

// Travel-related components
import TravelOverviewCards from './components/TravelRequest/TravelOverviewCards';
import SearchPagination from './components/TravelRequest/SearchPagination';
import TravelList from './components/TravelRequest/TravelList';
import travelData from './data/travelData';

// ✅ Import the MUI icon
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';

const App = () => {
  const [filter, setFilter] = useState('All');
  const [activePage, setActivePage] = useState('Leave');

  const handleAddNewTravelRequest = () => {
    alert('Open travel request form');
  };

  const handleDownload = () => {
    alert('Downloading report...');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f5f6fa',
          minHeight: '100vh',
        }}
      >
        {activePage === 'Leave' && (
          <>
            <Box sx={{ mb: 3 }}>
              <SummaryCards />
            </Box>
            <TabsHeaderWithControls filter={filter} setFilter={setFilter} />
            <LeaveTable filter={filter} data={leaveData} />
          </>
        )}

        {activePage === 'Announcements' && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <h2 style={{ fontWeight: 'bold', margin: 0 }}>Travel Requests</h2>

              {/* ✅ Download Report with MUI Icon */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  backgroundColor: '#fff',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  boxShadow: 1,
                  cursor: 'pointer',
                }}
                onClick={handleDownload}
              >
                <AssessmentOutlinedIcon sx={{ color: 'black', fontSize: 20 }} />
                <span style={{ fontWeight: 500, fontSize: 14, color: 'black' }}>Download Report</span>
              </Box>
            </Box>

            <TravelOverviewCards onAddNew={handleAddNewTravelRequest} />
            <SearchPagination filter={filter} setFilter={setFilter} />
            <TravelList data={travelData} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default App;
