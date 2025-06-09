import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  Chip,
  Stack,
} from '@mui/material';

const initialRequests = [
  {
    id: 1,
    empId: 'E001',
    name: 'John Doe',
    leaveType: 'Casual Leave',
    fromDate: '2025-06-10',
    toDate: '2025-06-12',
    reason: 'Family function',
    status: 'Requested',
  },
  {
    id: 2,
    empId: 'E002',
    name: 'Jane Smith',
    leaveType: 'Sick Leave',
    fromDate: '2025-06-15',
    toDate: '2025-06-16',
    reason: 'Fever',
    status: 'Approved',
  },
  {
    id: 3,
    empId: 'E003',
    name: 'Alex Johnson',
    leaveType: 'Earned Leave',
    fromDate: '2025-06-18',
    toDate: '2025-06-22',
    reason: 'Vacation',
    status: 'Rejected',
  },
];

const statusColors = {
  Requested: 'warning',
  Approved: 'success',
  Rejected: 'error',
};

const LeaveRequest = () => {
  const [requests, setRequests] = useState(initialRequests);

  const handleAction = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Emp ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Leave Type</TableCell>
            <TableCell>From Date</TableCell>
            <TableCell>To Date</TableCell>
            <TableCell>Reason</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map(
            ({
              id,
              empId,
              name,
              leaveType,
              fromDate,
              toDate,
              reason,
              status,
            }) => (
              <TableRow key={id} hover>
                <TableCell>{empId}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{leaveType}</TableCell>
                <TableCell>{fromDate}</TableCell>
                <TableCell>{toDate}</TableCell>
                <TableCell>{reason}</TableCell>
                <TableCell>
                  <Chip
                    label={status}
                    color={statusColors[status]}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">
                  {status === 'Requested' && (
                    <Stack direction="row" spacing={1} justifyContent="center">
                      <Button
                        variant="contained"
                        size="small"
                        color="success"
                        onClick={() => handleAction(id, 'Approved')}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="contained"
                        size="small"
                        color="error"
                        onClick={() => handleAction(id, 'Rejected')}
                      >
                        Reject
                      </Button>
                    </Stack>
                  )}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaveRequest;
