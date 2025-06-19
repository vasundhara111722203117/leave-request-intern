import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Card,
  Avatar,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  Paper,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';

const TravelDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
          <Typography variant="h6" fontWeight="bold">Travel ID - 01</Typography>
        </Stack>
        <Chip
          icon={<CheckCircleIcon sx={{ color: '#2ecc71' }} />}
          label="Approved"
          sx={{
            backgroundColor: '#ffffff',
            color: '#2ecc71',
            fontWeight: 'bold',
            borderRadius: '999px',
          }}
        />
      </Box>

      <Grid container spacing={3} alignItems="flex-start">
        {/* Main: University Travel Details */}
        <Grid item xs ={12} width={'1000px'}>
          <Card sx={{ borderRadius: 4, p: 2 }}>
            <Chip label="Travel ID - 01" size="small" sx={{ backgroundColor: '#eef4ff', color: '#3b82f6', mb: 1 }} />
            <Typography variant="h6" fontWeight="bold">London Carolivia University</Typography>
            <Typography color="text.secondary" fontSize="0.9rem" mb={1}>
              Going to discuss about HRMS mobile app functionalities & gathering requirements from the people.
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" mb={3}>
              Requested on 23 Oct 2024 at 04:30 PM
            </Typography>

            <Typography variant="subtitle1" fontWeight="bold" mb={2}>
              Travel details
            </Typography>

            <Stack spacing={2}>
              <DetailRow icon={<BusinessIcon />} label="Customer name" value="Flyjac Logistics and Transporters" />
              <DetailRow icon={<EventIcon />} label="Expected date of departure" value="19 Nov, 2024" />
              <DetailRow icon={<EventIcon />} label="Expected date of arrival" value="23 Nov, 2024" />
              <DetailRow icon={<AccessTimeIcon />} label="Expected duration days in count" value="5 days" />
            </Stack>

            <Box mt={3} p={1.5} borderRadius="12px" bgcolor="#eef4ff" color="#1d4ed8" fontWeight="bold">
              ✅ Yes, It’s billable to customer
            </Box>
          </Card>
        </Grid>

        {/* Sidebar: Employee Details */}
             {/* Employee Details */}
        <Grid item xs={6} md={4} width={'510px'}>
  <Card sx={{ p: 2, borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'right' }}>
    <Box>
      <Typography variant="h6" mb={1}>Employee details</Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src="https://randomuser.me/api/portraits/men/32.jpg"
          sx={{ width: 72, height: 72 }}
        />
        <Typography mt={1} fontWeight="bold">Abilash Zibrahim</Typography>
        <Typography color="text.secondary" variant="body2">UX/UI designer</Typography>

        <Stack direction="row" spacing={3} mt={1}>
          <Box
            sx={{
              backgroundColor: '#f4f4f5',
              borderRadius: 6,
              px: 6,
              py: 1.5,
              minWidth: 120,
              textAlign: 'left',
            }}
          >
            <Typography variant="caption" color="text.secondary" textAlign={'left'}>Travels</Typography>
            <Typography variant="h6" fontWeight="bold" textAlign={'left'}>27</Typography>
            
          </Box>
          <Box
            sx={{
              backgroundColor: '#f4f4f5',
              borderRadius: 6,
              px: 6,
              py: 1,
              minWidth: 150,
              textAlign: 'left',
            }}
          >
            <Typography variant="caption" color="text.secondary" textAlign={'left'}>Claimed amount</Typography>
            <Typography variant="h6" fontWeight="bold" textAlign='left'>₹ 45,000</Typography>
            
          </Box>
        </Stack>
      </Box>
    </Box>

    <Divider sx={{ my: 3 }} />

    <Box>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Recent travel of you:
      </Typography>
      <Card sx={{ p: 2, backgroundColor: '#f9fafb', borderRadius: 5 }}>
        <Chip label="Travel ID - 01" size="small" sx={{ mb: 2, color: '#3b82f6' }} />
        <Typography fontWeight="bold">London Carolivia University</Typography>
        <Typography fontSize="0.85rem" color="text.secondary">
          Going to discuss about HRMS mobile app functionalities & gathering requirements from the people.
        </Typography>
      </Card>
    </Box>
  </Card>
</Grid>

        {/* Expenses Table */}
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
            <Typography fontWeight="bold">Expenses details</Typography>
            <Typography fontWeight="bold">Total amount: ₹ 45,000</Typography>
          </Box>

          <Card sx={{ borderRadius: 4, overflow: 'hidden' }}>
            <TableContainer component={Paper} elevation={0}>
              <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
                <TableHead sx={{ backgroundColor: '#eef4ff' }}>
                  <TableRow>
                    {['Description', 'Date', 'Ticket', 'Lodging', 'Boarding', 'Phone'].map((header, idx) => (
                      <TableCell key={idx} sx={{ fontWeight: 'bold' }}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell><Box sx={boxStyle}>Sample data</Box></TableCell>
                    <TableCell>
                      <Box sx={{ ...boxStyle, display: 'flex', alignItems: 'center', gap: 13 }}>
                        12-09-2024 <CalendarTodayIcon fontSize="small" sx={{ color: 'black' }} />
                      </Box>
                    </TableCell>
                    {[...Array(4)].map((_, idx) => (
                      <TableCell key={idx}><Box sx={boxStyle}>₹ 25,000</Box></TableCell>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

// Reusable Detail Row
const DetailRow = ({ icon, label, value }) => (
  <Box display="flex" alignItems="flex-start" gap={2}>
    {React.cloneElement(icon, { color: 'action', sx: { mt: '3px' } })}
    <Box>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body1" fontWeight="bold">{value}</Typography>
    </Box>
  </Box>
);

// Reusable InfoBox
const InfoBox = ({ label, value }) => (
  <Box
    sx={{
      backgroundColor: '#f4f4f5',
      borderRadius: 2,
      px: 2,
      py: 1.5,
      minWidth: 100,
      textAlign: 'center',
    }}
  >
    <Typography variant="caption" color="text.secondary">{label}</Typography>
    <Typography variant="h6" fontWeight="bold">{value}</Typography>
  </Box>
);

const boxStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '6px',
  padding: '8px 12px',
};

export default TravelDetailsPage;
