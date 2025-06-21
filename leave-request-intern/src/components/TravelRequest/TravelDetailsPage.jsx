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
    <Box sx={{ p: { xs: 2, md: 0 }, backgroundColor: '#f7f9fc', minHeight: '100vh' }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2} flexWrap="wrap">
        <Stack direction="row" alignItems="center" spacing={1} mb={{ xs: 2, sm: 0 }}>
          <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)} />
          <Typography variant="h6" fontWeight="bold">Travel ID - 01</Typography>
        </Stack>
        <Chip
          icon={
            <Box
              sx={{
                backgroundColor: '#2ecc71',
                borderRadius: '50%',
                width: 20,
                height: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CheckCircleIcon sx={{ color: '#ffffff', fontSize: 16 }} />
            </Box>
          }
          label="Approved"
          sx={{
            backgroundColor: '#ffffff',
            color: '#000000',
            fontWeight: 'bold',
            borderRadius: '999px',
            height: 28,
            pl: 1,
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {/* Travel Info */}
        <Grid item xs={12} md={8} width={'1000px'}>
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

            <Box
              mt={3}
              p={1.5}
              borderRadius="12px"
              bgcolor="#eef4ff"
              color="#000000"
              display="flex"
              alignItems="center"
              fontWeight="bold"
            >
              <Box
                sx={{
                  width: '4px',
                  height: '24px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '2px',
                  mr: 1.5,
                }}
              />
              Yes, it’s billable to customer
            </Box>
          </Card>
        </Grid>

        {/* Employee Details */}
        <Grid item xs={12} md={4} width={'540px'}>
          <Card sx={{ p: 2, borderRadius: 4 }}>
            <Box>
              <Typography fontWeight="bold" variant="h6" mb={2} textAlign="left">
                Employee details
              </Typography>

              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  sx={{ width: 72, height: 72 }}
                />
                <Typography mt={1} fontWeight="bold">Abilash Zibrahim</Typography>
                <Typography color="text.secondary" variant="body2">UX/UI designer</Typography>
              </Box>

              <Box mt={1} display="flex" justifyContent="center" flexWrap="wrap" gap={3}>
                <InfoBox label="Travels" value="27" />
                <InfoBox label="Claimed amount" value="₹ 45,000" />
              </Box>
            </Box>

            <Divider sx={{ my: 4 }} />

            <Box>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Recent travel of you:
              </Typography>
              <Card sx={{ p: 2, backgroundColor: '#ffffff', borderRadius: 5 }}>
                <Chip label="Travel ID - 01" size="small" sx={{ mb: 2, color: '#0031dc' }} />
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
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} flexWrap="wrap">
            <Typography fontWeight="bold">Expenses details</Typography>
            <Typography fontWeight="bold">Total amount: ₹ 45,000</Typography>
          </Box>

          <Box sx={{ overflowX: { xs: 'auto', md: 'visible' }, width: '100%' }}>
            <Card sx={{ borderRadius: 4, minWidth: 650 }}>
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
                        <Box
                          sx={{
                            ...boxStyle,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            gap: 1,
                            minWidth: { xs: 103, sm: 100 },
                            flexWrap: 'nowrap',
                          }}
                        >
                          <CalendarTodayIcon fontSize="small" sx={{ color: 'black' }} />
                          <Typography variant="body2" >12-09-2024</Typography>
                        </Box>
                      </TableCell>
                      {[...Array(4)].map((_, idx) => (
                        <TableCell key={idx}>
                          <Box
                            sx={{
                              ...boxStyle,
                              display: 'flex',
                              justifyContent: 'center',
                              minWidth: { xs: 95, sm: 'auto' },
                            }}
                          >
                            ₹ 25,000
                          </Box>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const DetailRow = ({ icon, label, value }) => (
  <Box display="flex" alignItems="flex-start" gap={2}>
    {React.cloneElement(icon, { color: 'action', sx: { mt: '3px' } })}
    <Box>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body1" fontWeight="bold">{value}</Typography>
    </Box>
  </Box>
);

const InfoBox = ({ label, value }) => (
  <Box
    sx={{
      backgroundColor: '#f4f4f5',
      borderRadius: '12px',
      px: 1,
      py: 1,
      minWidth: 120,
      maxWidth: 'fit-content',
      textAlign: 'left',
    }}
  >
    <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
      {label}
    </Typography>
    <Typography variant="subtitle1" fontWeight="bold" sx={{ fontSize: '1rem', lineHeight: 1.3 }}>
      {value}
    </Typography>
  </Box>
);

const boxStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #e0e0e0',
  borderRadius: '6px',
  padding: '8px 12px',
};

export default TravelDetailsPage;
