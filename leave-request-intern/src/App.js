import React, { useState } from 'react';
import { Box, IconButton, AppBar, Toolbar, Typography, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';

const drawerWidth = 70;

function AppContent() {
  const [filter, setFilter] = useState('All');
  const [activePage, setActivePage] = useState('leave');
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleAddNewTravelRequest = () => {
    navigate('/travel-requests/add');
  };

  const handleDownload = () => {
    alert('Downloading report...');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'black',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HubOutlinedIcon sx={{ fontSize: 22, color: '#4263eb' }} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  color: 'white',
                  fontSize: { xs: '16px', md: '18px' },
                  fontWeight: 600,
                }}
              >
                HR Nexus
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton color="inherit">
              <NotificationsIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Sidebar setActivePage={setActivePage} activePage={activePage} />
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              pt: '64px',
            },
          }}
          open
        >
          <Sidebar setActivePage={setActivePage} activePage={activePage} />
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#f5f6fa',
          minHeight: '100vh',
          overflowY: 'auto',
        }}
      >
        <Toolbar />

        <Routes>
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

          <Route
            path="/travel-requests"
            element={
              <>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    mb: 2,
                    gap: 1,
                  }}
                >
                  <h2 style={{ fontWeight: 'bold', margin: 0 }}>Travel Requests</h2>
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
            }
          />

          <Route path="/travel-requests/add" element={<AddNewTravelRequest />} />
          <Route path="/travel-requests/:id" element={<TravelDetailsPage />} />
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
