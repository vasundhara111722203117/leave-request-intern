import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';

const leaveTypes = [
  { type: 'Casual Leave', total: 10, used: 4, balance: 6 },
  { type: 'Sick Leave', total: 8, used: 3, balance: 5 },
  { type: 'Earned Leave', total: 15, used: 7, balance: 8 },
];

const LeaveTypeSummary = () => {
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Leave Type</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Used</TableCell>
            <TableCell align="right">Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leaveTypes.map(({ type, total, used, balance }) => (
            <TableRow key={type} hover>
              <TableCell>{type}</TableCell>
              <TableCell align="right">{total}</TableCell>
              <TableCell align="right">{used}</TableCell>
              <TableCell align="right">{balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveTypeSummary;
