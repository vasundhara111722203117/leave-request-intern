import React, { useState } from 'react';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SummaryCards from './components/SummaryCards/SummaryCards';
import TabsHeaderWithControls from './components/TabsHeaderWithControls/TabsHeaderWithControls';
import LeaveTable from './components/LeaveTable/LeaveTable';
import leaveData from './data/leavedata';
import TravelOverviewCards from './components/TravelRequest/TravelOverviewCards';
import SearchPagination from './components/TravelRequest/SearchPagination';
import TravelList from './components/TravelRequest/TravelList';
import travelData from './data/travelData';
import TravelDetailsPage from './components/TravelRequest/TravelDetailsPage';
import Sidebar from './components/Sidebar/Sidebar';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AddNewTravelRequest from './components/TravelRequest/AddNewTravelRequest';

function AppContent() {
  // state to track filter and active page
  const [filter, setFilter] = useState('All');
  const [activePage, setActivePage] = useState('leave'); // or 'travel'

  // for routing
  const navigate = useNavigate();

  // handlers
  const handleAddNewTravelRequest = () => {
    navigate('/travel-requests/add'); // <- Redirect to form instead of alert
  };

  const handleDownload = () => {
    alert('Downloading report...');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Your Sidebar */}
      <Sidebar setActivePage={setActivePage} activePage={activePage} />

      {/* Main content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f6fa', minHeight: '100vh' }}>
        <Routes>
          {/* Route for leave page */}
          <Route
            path="/leave"
            element={
              <>
                <Box sx={{ mb: 3 }}>
                    <SummaryCards />
                </Box>
                <TabsHeaderWithControls filter={filter} setFilter={setFilter} />
                <LeaveTable filter={filter} data={leaveData} />
              </>
            }
          />

          {/* Route for travel requests */}
          <Route
            path="/travel-requests"
            element={
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <h2 style={{ fontWeight: 'bold', margin: 0 }}>Travel Requests</h2>

                    {/* Download Report button */}
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#fff', px: 2, py: 1, borderRadius: '8px', boxShadow: 1, cursor: 'pointer' }}
                      onClick={handleDownload}>
                      <AssessmentOutlinedIcon sx={{ color: 'black', fontSize: 20 }} />
                      <span style={{ fontWeight: 500, fontSize: 14, color: 'black' }}>Download Report</span>
                    </Box>
                </Box>

                {/* Add new button within TravelOverviewCards*/}
                <TravelOverviewCards onAddNew={handleAddNewTravelRequest} />

                <SearchPagination filter={filter} setFilter={setFilter} />

                <TravelList data={travelData} />
              </>
            }
          />

          {/* Route for adding new travel request */}
          <Route path="/travel-requests/add" element={<AddNewTravelRequest />} />

          {/* Route for travel details */}
          <Route path="/travel-requests/:id" element={<TravelDetailsPage />} />

          {/* Redirect or fallback route to leave by default */}
          <Route path="/" element={<Navigate to="/leave" />} />

        </Routes>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
