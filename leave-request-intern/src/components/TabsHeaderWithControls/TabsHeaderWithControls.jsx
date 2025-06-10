import React, { useState } from 'react';
import {
  Box,
  InputAdornment,
  TextField,
  MenuItem,
  IconButton,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TabsFilter from '../TabsFilter/TabsFilter';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const TabsHeaderWithControls = ({ filter, setFilter }) => {
  const [selectedMonth, setSelectedMonth] = useState('June');
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const totalPages = 30;

  const handleBack = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        mb: 2,
      }}
    >
      {/* Tabs section */}
      <TabsFilter filter={filter} setFilter={setFilter} />

      {/* Right-side controls */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {/* Search input */}
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              borderRadius: '10px',
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-notchedOutline': {
                borderWidth: '1px',
              },
            },
          }}
        />

        {/* Month selector */}
        <TextField
        
          select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          size="small"
          variant="outlined"
          sx={{
            borderRadius: '10px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              '& fieldset': {
                borderWidth: '1px',
              },
            },
            minWidth: 100,
          }}
        >
          {months.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </TextField>

        {/* Page indicator */}
        <Typography variant="body2" sx={{ minWidth: '40px', textAlign: 'center' }}>
          {String(page).padStart(2, '0')} of {totalPages}
        </Typography>

        {/* Left and right scroll arrows with same white circular style */}
        <IconButton
          onClick={handleBack}
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            width: 36,
            height: 36,
            '&:hover': {
              backgroundColor: '#000000',
            },
          }}
        >
          <ArrowBackIosIcon fontSize="small" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            width: 36,
            height: 36,
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TabsHeaderWithControls;
