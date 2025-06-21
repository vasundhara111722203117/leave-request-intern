import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import SummaryHeader from './SummaryHeader';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';

const SummaryCards = () => {
  return (
    <Box>
      <SummaryHeader />

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center', // center on mobile
        }}
      >
        {/* Total Summary */}
        <Box
          sx={{
            width: { xs: '100%', sm: 300, md: 420 },
            height: 170,
            p: 2,
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <CalendarMonthIcon color="primary" fontSize="small" />
            <Typography fontWeight="bold" fontSize="0.95rem">
              Total summary
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {['Requested', 'Approved', 'Reject'].map((label, i) => (
              <Box key={i} sx={{ textAlign: 'center', flex: 1 }}>
                <Typography fontSize="0.8rem" color="text.secondary">{label}</Typography>
                <Typography fontWeight="bold" fontSize="1.1rem">165</Typography>
                <Typography sx={{ color: 'green', fontSize: '0.7rem' }}>
                  +12 vs last month
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Leave Type Summary */}
        <Box
          sx={{
            width: { xs: '100%', sm: 360, md: 600 },
            height: 'auto',
            p: 1,
            borderRadius: 3,
            backgroundColor: '#fff',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <BadgeIcon sx={{ color: '#a64cf3' }} fontSize="small" />
            <Typography fontWeight="bold" fontSize="0.95rem">
              Leave type summary
            </Typography>
          </Box>
          <Grid container spacing={8}>
            {['Sick leave', 'Casual leave', 'Compensation', 'Permissions'].map((label, i) => (
              <Grid item xs={6} key={i}>
                <Box sx={{ textAlign: 'left' }}>
                  <Typography fontSize="0.8rem" color="text.secondary">{label}</Typography>
                  <Typography fontWeight="bold" fontSize="1.1rem">67</Typography>
                  <Typography sx={{ color: 'green', fontSize: '0.7rem' }}>
                    +23 vs last month
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Leave Request */}
        <Box
          sx={{
            width: { xs: '100%', sm: 340, md: 510 },
            height: 170,
            p: 2,
            borderRadius: 3,
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
          }}
        >
          <Box>
            <Typography fontWeight="bold">Leave request</Typography>
            <Typography variant="body2" color="text.secondary">
              Request new leave for an approval
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 1.5,
                borderRadius: '10px',
                textTransform: 'none',
                backgroundColor: '#0511f2',
                '&:hover': {
                  backgroundColor: '#0000ec',
                },
              }}
            >
              + Add new
            </Button>
          </Box>

          {/* Image */}
          <Box
            component="img"
            src="leave image.jpg"
            alt="leave-icon"
            sx={{
              position: 'absolute',
              right: 20,
              bottom: 20,
              width: { xs: 120, sm: 180, md: 220 },
              height: 'auto',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SummaryCards;
