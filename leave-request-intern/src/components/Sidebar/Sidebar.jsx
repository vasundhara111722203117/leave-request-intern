import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import HikingIcon from '@mui/icons-material/Hiking';
import CampaignIcon from '@mui/icons-material/Campaign';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const icons = [
  { icon: <HomeIcon />, label: 'Home' },
  { icon: <CalendarMonthIcon />, label: 'Calendar' },
  { icon: <MenuBookIcon />, label: 'Book' },
  { icon: <PersonIcon />, label: 'Profile' },
  { icon: <DescriptionIcon />, label: 'Documents' },
  { icon: <HikingIcon />, label: 'Leave' }, // highlighted one
  { icon: <CampaignIcon />, label: 'Announcements' },
  { icon: <LocalHospitalIcon />, label: 'Health' },
  { icon: <AccountBalanceWalletIcon />, label: 'Wallet' },
  { icon: <WarningAmberIcon />, label: 'Warnings' },
  { icon: <HelpOutlineIcon />, label: 'Help' },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(5); // 6th icon is active

  return (
    <Box
      sx={{
        width: 70,
        backgroundColor: '#ffffff',
        height: '100vh',
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'top',
        py: 0,
      }}
    >
      {icons.map((item, index) => (
        <IconButton
          key={index}
          onClick={() => setActiveIndex(index)}
          sx={{
            my: 0,
            backgroundColor: index === activeIndex ? '#e0e7ff' : 'transparent',
            color: '#444',
            '&:hover': {
              backgroundColor: '#e0e7ff',
            },
            borderRadius: '15px',
            width: 48,
            height: 48,
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  );
};

export default Sidebar;
