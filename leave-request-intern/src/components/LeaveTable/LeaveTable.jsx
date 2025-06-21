import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const statusConfig = {
  Pending: {
    color: '#000000',
    icon: <FiberManualRecordIcon fontSize="small" sx={{ color: '#FFD700', fontSize: '14px' }} />,
    bgColor: '#FFF3E0'
  },
  Approved: {
    color: '#000000',
    icon: <CheckCircleIcon fontSize="small" sx={{ color: '#4CAF50' }} />,
    bgColor: '#E8F5E9'
  },
  Rejected: {
    color: '#000000',
    icon: <CancelIcon fontSize="small" sx={{ color: '#F44336' }} />,
    bgColor: '#FFEBEE'
  }
};

const LeaveTable = ({ filter, data }) => {
  const filtered = filter === 'All' ? data : data.filter(d => d.status === filter);

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        padding: { xs: '16px', sm: '24px' },
        margin: '16px 0',
        overflowX: 'auto'
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 'none',
          width: '100%',
          overflowX: 'auto'
        }}
      >
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              {['Leave Type', 'From', 'To', 'Leave Time', 'Half Leave Type', 'Status'].map((heading) => (
                <TableCell
                  key={heading}
                  sx={{
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: '#f5f5f5',
                    borderBottom: '2px solid #e0e0e0',
                    py: 2,
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    whiteSpace: 'nowrap'
                  }}
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((row, idx) => {
              const status = statusConfig[row.status];
              return (
                <TableRow key={idx} sx={{ '&:hover': { backgroundColor: '#fafafa' } }}>
                  <TableCell>{row.leaveType}</TableCell>
                  <TableCell>{row.from}</TableCell>
                  <TableCell>{row.to}</TableCell>
                  <TableCell>{row.leaveTime}</TableCell>
                  <TableCell>{row.halfLeaveType}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        backgroundColor: status.bgColor,
                        padding: '6px 10px',
                        borderRadius: '8px',
                        fontWeight: '500',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {status.icon}
                      <Typography
                        variant="body2"
                        sx={{ color: status.color, fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                      >
                        {row.status}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LeaveTable;
