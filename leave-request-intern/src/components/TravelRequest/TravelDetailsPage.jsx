import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Avatar,
  Grid,
  TextField,
} from "@mui/material";

import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useParams } from "react-router-dom";

import travelData from "../../data/travelData";

const TravelDetailsPage = () => {
  // Get the id from the route
  const { id } = useParams();

  // Find the matching travel by id
  const travel = travelData.find((item) => item.id === id);

  if (!travel) {
    return <Typography>Travel not found</Typography>;
  }

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6" fontWeight="bold">
          {travel.id}
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <CheckCircleIcon
            sx={{ color: travel.status === "Approved" ? "#2ecc71" : "#e74c3c" }}
          />
          <Typography
            sx={{ backgroundColor: travel.status === "Approved" ? "#eafaf1" : "#fcecec", p: 1.5, borderRadius: 5 }}>
            {travel.status}
          </Typography>
        </Box>
      </Box>

      {/* Main Section */}
      <Grid container spacing={3}>
        {/* Left Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography variant="body2" color="primary" fontWeight="bold">
              {travel.id}
            </Typography>
            <Typography variant="h6" fontWeight="bold" mt={1}>
              {travel.title}
            </Typography>
            <Typography sx={{ mt: 1 }}>
              {travel.description}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Requested on {travel.createdAt}
            </Typography>

            <Divider sx={{ my: 2 }} />

            {/* Travel Details */}
            <Box>
              <Typography fontWeight="bold">Travel details</Typography>
              <Typography sx={{ mt: 1 }}>
                <strong>Customer name: </strong> {travel.transport}
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Expected dates
              </Typography>
              <Typography>{travel.dates}</Typography>

              <Typography color="text.secondary" sx={{ mt: 1 }}>
                Duration
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <LightModeSharpIcon sx={{ fontSize: 18 }} />
                <Typography>{travel.duration}</Typography>
              </Box>

              <Box
                sx={{ backgroundColor: "#e6edff", p: 1.5, mt: 2, borderRadius: 2 }}>
                <Typography>
                    <strong>Yes</strong> It’s billable to customer
                </Typography>
              </Box>
            </Box>

            {/* Expenses Details */}
            <Box mt={4}>
              <Typography fontWeight="bold" mb={1}>
                Expenses details
              </Typography>
              <Paper variant="outlined" sx={{ overflowX: "auto" }}>
                <Grid container spacing={2} p={2}>
                    <Grid item xs={12} md={2}>
                      <Typography fontSize={14} fontWeight="bold">
                        Description
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={travel.description}
                        disabled
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Typography fontSize={14} fontWeight="bold">
                        Date
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value={travel.createdAt}
                        disabled
                        InputProps={{ startAdornment: <CalendarTodayIcon fontSize="small" sx={{ mr: 1 }} /> }}
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Typography fontSize={14} fontWeight="bold">
                        Ticket
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value="₹ 25,000"
                        disabled
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Typography fontSize={14} fontWeight="bold">
                        Lodging
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value="₹ 10,000"
                        disabled
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Typography fontSize={14} fontWeight="bold">
                        Boarding
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value="₹ 5,000"
                        disabled
                      />
                    </Grid>

                    <Grid item xs={12} md={2}>
                      <Typography fontSize={14} fontWeight="bold">
                        Phone
                      </Typography>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        value="₹ 5,000"
                        disabled
                      />
                    </Grid>
                </Grid>
              </Paper>
              <Typography textAlign="right" mt={2} fontWeight="bold">
                Total amount : ₹ {travel.expense}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Right Content - Employee details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, borderRadius: 3 }}>
            <Typography fontWeight="bold" mb={2}>
              Employee details
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              mb={2}
            >
              <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" sx={{ width: 64, height: 64 }} />
              <Typography fontWeight="bold">Abilash Zibrahim</Typography>
              <Typography variant="body2" color="text.secondary">
                UX/UI Designer
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={2}>
              <Box>
                <Typography variant="body2" color="text.secondary">
                    Travels
                </Typography>
                <Typography fontWeight="bold">
                    27
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                    Claimed amount
                </Typography>
                <Typography fontWeight="bold">
                    ₹ 45,000
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Typography mt={2} variant="body2" color="text.secondary">
              Recent travel of you :-
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, mt: 1, borderRadius: 2 }}>
              <Typography variant="caption" color="primary" fontWeight="bold">
                {travel.id}
              </Typography>
              <Typography fontWeight="bold">
                {travel.title}
              </Typography>
              <Typography variant="body2">
                {travel.description}
              </Typography>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TravelDetailsPage;
