// TravelCards.jsx

import React from 'react';
import { Box, Typography, Card, Chip, Stack } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import EventIcon from '@mui/icons-material/Event';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const statusStyles = {
  Approved: {
    label: 'Approved',
    color: 'success',
    bg: '#dcfce7',
    icon: '✔️',
  },
  Rejected: {
    label: 'Rejected',
    color: 'error',
    bg: '#fee2e2',
    icon: '❌',
  },
  Requested: {
    label: 'Requested',
    color: 'warning',
    bg: '#fef9c3',
    icon: '⏳',
  },
};

const TravelCards = ({ item }) => {
  const statusInfo = statusStyles[item.status] || {};

  return (
    <Card
      sx={{
        borderRadius: '20px',
        p: 3,
        mb: 2,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      {/* Left Section */}
      <Box>
        <Typography variant="subtitle1" fontWeight="bold">
          {item.title} • <Chip label={item.id} size="small" sx={{ ml: 1 }} />
        </Typography>

        <Typography variant="body2" sx={{ my: 1 }}>
          {item.description}
        </Typography>

        <Typography variant="caption" color="text.secondary">
          Created on {item.createdAt}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 1, flexWrap: 'wrap' }}>
          <Box display="flex" alignItems="center" gap={0.5}>
            <LocalShippingIcon fontSize="small" />
            <Typography variant="caption">{item.transport}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <MonetizationOnIcon fontSize="small" />
            <Typography variant="caption">Billable</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <EventIcon fontSize="small" />
            <Typography variant="caption">{item.dates}</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={0.5}>
            <AccessTimeIcon fontSize="small" />
            <Typography variant="caption">{item.duration}</Typography>
          </Box>
        </Stack>
      </Box>

      {/* Right Section */}
      <Box textAlign="right" sx={{ mt: { xs: 2, md: 0 } }}>
        <Typography variant="caption" color="text.secondary">
          Travel expense:
        </Typography>
        <Typography variant="h6" fontWeight="bold">
          ₹ {item.expense.toLocaleString()}
        </Typography>

        {statusInfo.label && (
          <Chip
            label={
              <Box display="flex" alignItems="center" gap={1}>
                {statusInfo.icon} {statusInfo.label}
              </Box>
            }
            sx={{
              mt: 1,
              backgroundColor: statusInfo.bg,
              color: statusInfo.color,
              fontWeight: 'bold',
              borderRadius: '20px',
              px: 2,
              py: 0.5,
            }}
          />
        )}
      </Box>
    </Card>
  );
};

export default TravelCards;
