import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import PaymentsIcon from '@mui/icons-material/Payments';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const cardData = [
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 36, color: '#0d47a1' }} />,
    title: 'Requested',
    value: '165',
    subtext: '+12% vs last month',
    color: '#22c55e',
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 36, color: '#0d47a1' }} />,
    title: 'Approved',
    value: '67',
    subtext: '+23% vs last month',
    color: '#22c55e',
  },
  {
    icon: <ReceiptLongIcon sx={{ fontSize: 36, color: '#0d47a1' }} />,
    title: 'Rejected',
    value: '67',
    subtext: '+23% vs last month',
    color: '#ef4444',
  },
  {
    icon: <PaymentsIcon sx={{ fontSize: 36, color: '#0d47a1' }} />,
    title: 'Claimed',
    value: '₹23,00,000',
    subtext: '+12% vs last month',
    color: '#22c55e',
  },
  {
    icon: <CurrencyRupeeIcon sx={{ fontSize: 36, color: '#0d47a1' }} />,
    title: 'Request for Claim',
    value: '₹34,780',
    subtext: '+23% vs last month',
    color: '#22c55e',
  },
];

const TravelSummaryCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: { xs: 'center', md: 'flex-start' },
        mb: 3,
      }}
    >
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{
            flex: '1 1 240px',
            p: 2,
            display: 'flex',
            alignItems: 'center',
            minWidth: '220px',
            maxWidth: '280px',
            height: '110px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
            borderRadius: '12px',
          }}
        >
          <Box sx={{ mr: 2 }}>{card.icon}</Box>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Typography variant="subtitle2" fontWeight="bold" sx={{ fontSize: 14 }}>
                {card.title}
              </Typography>
              {card.title === 'Approved' && (
                <Box
                  component="span"
                  sx={{
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </Box>
              )}
            </Box>
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: 18 }}>
              {card.value}
            </Typography>
            <Typography variant="caption" sx={{ color: card.color, fontSize: 12 }}>
              {card.subtext}
            </Typography>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default TravelSummaryCards;
