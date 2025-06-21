import React, { useState } from 'react';
import {
  Box,
  InputAdornment,
  TextField,
  IconButton,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TabsFilter from './TabsFilter/TabsFilter';

const SearchPagination = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('All');
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
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', sm: 'center' },
        flexWrap: 'wrap',
        gap: 2,
        mb: 2,
      }}
    >
      {/* TabsFilter (top on mobile, left on desktop) */}
      <TabsFilter filter={filter} setFilter={setFilter} />

      {/* Right controls */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'nowrap',
          gap: { xs: 1, sm: 2 },
          width: { xs: '100%', sm: 'auto' },
          justifyContent: { xs: 'flex-start', sm: 'flex-end' },
          overflowX: 'auto',
        }}
      >
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
          sx={{
            minWidth: { xs: '100%', sm: 380 },
            maxWidth: 380,
          }}
        />

        {/* Page number and navigation arrows */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {/* Mobile: 01-30 */}
          <Typography
            variant="body2"
            sx={{
              display: { xs: 'block', sm: 'none' },
              minWidth: '50px',
              textAlign: 'center',
            }}
          >
            {String(page).padStart(2, '0')}-{totalPages}
          </Typography>

          {/* Desktop: 01 of 30 */}
          <Typography
            variant="body2"
            sx={{
              display: { xs: 'none', sm: 'block' },
              minWidth: '50px',
              textAlign: 'center',
            }}
          >
            {String(page).padStart(2, '0')} of {totalPages}
          </Typography>

          <IconButton
            onClick={handleBack}
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              width: 30,
              height: 30,
              p: 0,
              '&:hover': {
                backgroundColor: '#f0f0f0',
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
              width: 30,
              height: 30,
              p: 0,
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchPagination;
