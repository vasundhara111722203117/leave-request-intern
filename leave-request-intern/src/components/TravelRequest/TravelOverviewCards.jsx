import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LuggageIcon from '@mui/icons-material/Luggage';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const TravelOverviewCards = ({ onAddNew }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
      
      {/* Total Summary Card */}
      <Box
        sx={{
          flex: 1,
          p: 1.5,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          minWidth: 400,
          maxWidth: 550,
          height: 160, // added height
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LuggageIcon sx={{ mr: 1, fontSize: 20, color: '#2d6cdf' }} />
          <Typography fontWeight="bold" fontSize={16}>Total summary</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {['Requested', 'Approved', 'Rejected'].map((label, idx) => (
            <Box key={label} sx={{ mr: idx !== 5 ? 1 : 0 }}>
              <Typography variant="body2" fontSize={16}>{label}</Typography>
              <Typography fontWeight="bold" fontSize={16}>
                {label === 'Requested' ? '165' : '67'}
              </Typography>
              <Typography variant="caption" sx={{ color: 'green', fontSize: 11 }}>
                +{label === 'Requested' ? '12' : '23'} vs last month
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Billed Amount Card */}
      <Box
        sx={{
          flex: 1,
          p: 1.5,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          minWidth: 250,
          maxWidth: 450,
          height: 160, // added height
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <CurrencyRupeeIcon sx={{ mr: 1, fontSize: 20, color: '#f4b400' }} />
          <Typography fontWeight="bold" fontSize={16}>Billed amount</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {[{
            title: 'Claimed',
            amount: '₹23,00,000',
            growth: '+12% vs last month'
          }, {
            title: 'Request for Claim',
            amount: '₹34,780',
            growth: '+23% vs last month'
          }].map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Typography variant="body2" fontSize={16}>{item.title}</Typography>
              <Typography fontWeight="bold" fontSize={16}>{item.amount}</Typography>
              <Typography variant="caption" sx={{ color: 'green', fontSize: 11 }}>{item.growth}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Add New Travel Request Card with Right Image */}
      <Box
        sx={{
          flex: 1,
          p: 1.5,
          bgcolor: '#fff',
          borderRadius: 2,
          boxShadow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex start',
          minWidth: 350,
          maxWidth: 550,
          height: 160, // added height
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

        {/* Right Side: Car Image */}
        <Box
          component="img"
          src="car image.jpg" // replace with your image path
          alt="travel-car"
          sx={{
            width: 140,
            height: 100,
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  );
};

export default TravelOverviewCards;
