import React from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip
} from '@mui/material';

const statusColors = {
  Pending: 'warning',
  Approved: 'success',
  Rejected: 'error',
};

const LeaveTable = ({ filter, data }) => {
  const filtered = filter === 'All' ? data : data.filter(d => d.status === filter);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Leave Type</TableCell>
            <TableCell>Leave Time</TableCell>
            <TableCell>Half Leave Type</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Status</TableCell>
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
                <Chip label={row.status} color={statusColors[row.status]} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveTable;
