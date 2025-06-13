import React, { useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
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
import { Link } from 'react-router-dom';

const icons = [
  { icon: <HomeIcon />, label: 'Home', path: '/' },
  { icon: <CalendarMonthIcon />, label: 'Calendar', path: '/' },
  { icon: <MenuBookIcon />, label: 'Book', path: '/' },
  { icon: <PersonIcon />, label: 'Profile', path: '/' },
  { icon: <DescriptionIcon />, label: 'Documents', path: '/' },
  { icon: <HikingIcon />, label: 'Leave', path: '/leave' },
  { icon: <CampaignIcon />, label: 'Announcements', path: '/travel-requests' },
  { icon: <LocalHospitalIcon />, label: 'Health', path: '/' },
  { icon: <AccountBalanceWalletIcon />, label: 'Wallet', path: '/' },
  { icon: <WarningAmberIcon />, label: 'Warnings', path: '/' },
  { icon: <HelpOutlineIcon />, label: 'Help', path: '/' },
]

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(5); // leave is active by default

  return (
    <Box
      sx={{ width: 70, backgroundColor: '#ffffff', height: '100vh', borderRight: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'center', py: 0 }}>
      {icons.map((item, index) => (
        <Tooltip title={item.label} placement="right" key={index}>
          <Link to={item.path} style={{ textDecoration: 'none' }}>
            <IconButton
              onClick={() => setActiveIndex(index)}
              sx={{ m: '0px auto', backgroundColor: index === activeIndex ? '#e0e7ff' : 'transparent',
                color: index === activeIndex ? '#4338ca' : '#9ca3af',
                '&:hover': { backgroundColor: '#e0e7ff' },
                borderRadius: '20px',
                width: 48,
                height: 48,
                transition: 'all 0.2s ease' }}>
              {item.icon}
            </IconButton>
          </Link>
        </Tooltip>
      ))}
    </Box>
  )
}

export default Sidebar;
