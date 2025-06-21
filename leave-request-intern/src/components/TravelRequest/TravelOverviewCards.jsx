import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LuggageIcon from '@mui/icons-material/Luggage';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const TravelOverviewCards = ({ onAddNew }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        mb: 2,
        justifyContent: { xs: 'center', md: 'flex-start' },
      }}
    >
      {/* Total Summary Card */}
     <Box
  sx={{
    flex: '1 1 300px',
    p: 1,
    bgcolor: '#fff',
    borderRadius: 2,
    boxShadow: 1,
    height: 140,
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <LuggageIcon sx={{ mr: 1, fontSize: 20, color: '#2d6cdf' }} />
    <Typography fontWeight="bold" fontSize={16}>Total summary</Typography>
  </Box>

  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', gap: 2 }}>
    {['Requested', 'Approved', 'Rejected'].map((label, idx) => (
      <React.Fragment key={label}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.4 }}>
          <Typography variant="body2" fontSize={16}>{label}</Typography>
          <Typography fontWeight="bold" fontSize={16}>{label === 'Requested' ? '165' : '67'}</Typography>
          <Box display="flex" gap={0.5}>
            <Typography variant="caption" sx={{ color: 'green', fontSize: 11 }}>
              +{label === 'Requested' ? '12' : '23'}
            </Typography>
            <Typography variant="caption" sx={{ color: 'gray', fontSize: 11 }}>
              vs last month
            </Typography>
          </Box>
        </Box>

        {idx < 2 && (
          <Box
            sx={{
              width: '1px',
              backgroundColor: '#ccc',
              height: '44px',
              alignSelf: 'center',
            }}
          />
        )}
      </React.Fragment>
    ))}
  </Box>
</Box>




      {/* Billed Amount Card */}
  <Box
  sx={{
    flex: '1 1 300px',
    p: 1,
    bgcolor: '#fff',
    borderRadius: 2,
    boxShadow: 1,
    height: 140,
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
    <CurrencyRupeeIcon sx={{ mr: 1, fontSize: 20, color: '#f4b400' }} />
    <Typography fontWeight="bold" fontSize={16}>Billed amount</Typography>
  </Box>

  <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'nowrap', gap: 2 }}>
    {[
      { title: 'Claimed', amount: '₹23,00,000', growth: '+12' },
      { title: 'Request for Claim', amount: '₹34,780', growth: '+23' },
    ].map((item, index) => (
      <React.Fragment key={index}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.4 }}>
          <Typography variant="body2" fontSize={16}>{item.title}</Typography>
          <Typography fontWeight="bold" fontSize={16}>{item.amount}</Typography>
          <Box display="flex" gap={0.5}>
            <Typography variant="caption" sx={{ color: 'green', fontSize: 11 }}>
              {item.growth}
            </Typography>
            <Typography variant="caption" sx={{ color: 'gray', fontSize: 11 }}>
              vs last month
            </Typography>
          </Box>
        </Box>

        {index < 1 && (
          <Box
            sx={{
              width: '1px',
              backgroundColor: '#ccc',
              height: '44px',
              alignSelf: 'center',
            }}
          />
        )}
      </React.Fragment>
    ))}
  </Box>
</Box>


      {/* Add New Travel Request Card */}
      <Box
        sx={{
          flex: '1 1 300px',
          p: 1.5,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          height: 140,
        }}
      >
        {/* Left Side: Text and Button */}
        <Box>
          <Typography fontWeight="bold" fontSize={16} mb={1.5}>
            Add new travel request
          </Typography>
          <Typography variant="body2" fontSize={16} color="text.secondary" mb={1}>
            Create new travel request for your travel work
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ backgroundColor: '#0511f2', borderRadius: 2, fontSize: 12, py: 1 }}
            onClick={onAddNew}
          >
            Add new
          </Button>
        </Box>

        {/* Right Side: Image (Now Responsive) */}
        <Box
          component="img"
          src="car image.jpg"
          alt="travel-car"
          sx={{
            width: { xs: 80, sm: 120 },
            height: { xs: 60, sm: 100 },
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  );
};

export default TravelOverviewCards;
