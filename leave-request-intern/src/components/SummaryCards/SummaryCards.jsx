import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import SummaryHeader from './SummaryHeader';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';

const SummaryCards = () => {
  return (
    <Box>
      <SummaryHeader />
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>

        {/* Total Summary */}
        <Box
          sx={{
            width: 420,
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
            width: 600,
            height: 170,
            p: 2,
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {['Sick leave', 'Casual leave', 'Compensation', 'Permissions'].map((label, i) => (
              <Box key={i} sx={{ textAlign: 'left' }}>
                <Typography fontSize="0.8rem" color="text.secondary">{label}</Typography>
                <Typography fontWeight="bold" fontSize="1.1rem">67</Typography>
                <Typography sx={{ color: 'green', fontSize: '0.7rem' }}>
                  +23 vs last month
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Leave Request */}
        <Box
          sx={{
            width: 510,
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
    backgroundColor: '#0511f2', // dark blue
    '&:hover': {
      backgroundColor: '#0000ec', // slightly darker on hover
    },
  }}
>
  + Add new
</Button>

          </Box>
          {/* Image placed outside the card */}
          <Box
            component="img"
            src="leave image.jpg"
            alt="leave-icon"
            sx={{
              position: 'absolute',
              right: 20,
              bottom: 20,
              width: 220,
              height: 120,
            }}
          />
        </Box>

      </Box>
    </Box>
  );
};

export default SummaryCards;
