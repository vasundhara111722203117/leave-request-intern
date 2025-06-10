import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip
} from '@mui/material';

const statusColors = {
  Pending: 'warning',
  Approved: 'success',
  Rejected: 'error',
};

const borderColors = {
  Pending: '#ed6c02',   // warning
  Approved: '#2e7d32',  // success
  Rejected: '#d32f2f',  // error
};

const LeaveTable = ({ filter, data }) => {
  const filtered = filter === 'All' ? data : data.filter(d => d.status === filter);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {['Leave Type', 'Leave Time', 'Half Leave Type', 'From', 'To', 'Status'].map((heading, index) => (
              <TableCell
                key={index}
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  backgroundColor: '#f5f5f5', // light gray background to highlight
                }}
              >
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell>{row.leaveType}</TableCell>
              <TableCell>{row.leaveTime}</TableCell>
              <TableCell>{row.halfLeaveType}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={statusColors[row.status]}
                  sx={{
                    border: `3px solid ${borderColors[row.status]}`,
                    borderRadius: '8px',
                    fontWeight: 'bold',
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveTable;
