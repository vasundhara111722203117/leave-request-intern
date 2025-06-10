import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box
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
        padding: '24px',
        margin: '16px 0'
      }}
    >
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table>
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
                    fontSize: '0.875rem'
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
                        gap: '10px',
                        backgroundColor: status.bgColor,
                        padding: '8px 12px',
                        borderRadius: '8px',
                        fontWeight: '500',
                      }}
                    >
                      {status.icon}
                      <span style={{ color: status.color }}>{row.status}</span>
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