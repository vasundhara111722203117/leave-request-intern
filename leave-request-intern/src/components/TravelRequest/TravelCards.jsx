import React from 'react';
import {
  Box,
  Typography,
  Card,
  Chip,
  Stack,
  Tooltip,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const statusStyles = {
  Approved: {
    label: 'Approved',
    color: '#2ecc71',
    bg: '#dcfce7',
    icon: <CheckCircleIcon sx={{ color: '#2ecc71', fontSize: 16 }} />, // Green tick icon
  },
  Rejected: {
    label: 'Rejected',
    color: '#e74c3c',
    bg: '#fee2e2',
    icon: '❌',
  },
  Requested: {
    label: 'Requested',
    color: '#f39c12',
    bg: '#fef9c3',
    icon: '⏳',
  },
};

const TravelCards = ({ item, onCardClick }) => {
  const statusInfo = statusStyles[item.status] || {};

  return (
    <Tooltip title="View travel details" arrow>
      <Card
        onClick={() => onCardClick(item.id)}
        sx={{
          borderRadius: '20px',
          p: 3,
          mb: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: { xs: 2, md: 0 },
          boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
          cursor: 'pointer',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'scale(1.01)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          },
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

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ mt: 1, flexWrap: 'wrap', gap: 1.5 }}
          >
            <Box display="flex" alignItems="center" gap={0.5}>
              <LocalShippingIcon fontSize="small" sx={{ mb: '1px' }} />
              <Typography variant="caption">{item.transport}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <MonetizationOnIcon fontSize="small" sx={{ mb: '1px' }} />
              <Typography variant="caption">Billable</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <EventIcon fontSize="small" sx={{ mb: '1px' }} />
              <Typography variant="caption">{item.dates}</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <AccessTimeIcon fontSize="small" sx={{ mb: '1px' }} />
              <Typography variant="caption">{item.duration}</Typography>
            </Box>
          </Stack>
        </Box>

        {/* Right Section */}
        <Box textAlign={{ xs: 'left', md: 'right' }}>
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
    </Tooltip>
  );
};

export default TravelCards;
