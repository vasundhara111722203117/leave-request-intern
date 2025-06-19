import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
  Typography
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

function AddNewTravelRequest() {
  const [formValues, setFormValues] = useState({
    employeeId: "Mathew Wade - LET057",
    department: "Madan Kumar - 003",
    placeOfVisit: "",
    purposeOfVisit: "",
    departureDate: "",
    arrivalDate: "",
    duration: "",
    customerName: "",
    isBillable: "Yes"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("New travel request data!", formValues);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    console.log("Edit cancelled.");
  };

  const handleBack = () => {
    navigate("/travel-requests");
  };

  return (
    <Box p={0} sx={{ background: "#f5f6fa", minHeight: "50vh" }}>
      {/* Top section with arrow back, title, cancel, save */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <IconButton color="inherit" onClick={handleBack}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6">New Task</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancel}
            sx={{ borderRadius: "10px", color: "black", background: "#fff" }}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSave} sx={{ borderRadius: "10px" }}>
            Save
          </Button>
        </Box>
      </Box>

      {/* Box with form details */}
      <Box
        sx={{
          borderRadius: "15px",
          padding: "15px",
          background: "#ffffff",
          boxShadow: "0px 0px 5px #00000020"
        }}
      >
        <Typography variant="h6" color="black" sx={{ mb: 1 }}>
          Add new travel request
        </Typography>
        <Typography variant="body1" color="black" sx={{ mb: 2 }}>
          Enter the below details manually to create a new travel request
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "0.3fr 0.3fr",
            gap: "12px",
            borderRadius: "20px",
            mb: 1
          }}
        >
          {/* Employee ID */}
<Box>
  <InputLabel>Employee ID</InputLabel>
  <TextField
    variant="outlined"
    name="employeeId"
    value={formValues.employeeId}
    disabled
    fullWidth
    InputProps={{
      sx: {
        "& input.Mui-disabled": {
          color: "#000000", // dark black
          fontWeight: "bold",
        }
      }
    }}
  />
</Box>

{/* Department */}
<Box>
  <InputLabel>Employee Department</InputLabel>
  <TextField
    variant="outlined"
    name="department"
    value={formValues.department}
    disabled
    fullWidth
    InputProps={{
      sx: {
        "& input.Mui-disabled": {
          color: "#000000", // dark black
          fontWeight: "bold",
        }
      }
    }}
  />
</Box>


          {/* Place of visit */}
          <Box>
            <InputLabel>Place of Visit</InputLabel>
            <TextField
              variant="outlined"
              name="placeOfVisit"
              value={formValues.placeOfVisit}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Purpose of visit */}
          <Box>
            <InputLabel>Purpose of Visit</InputLabel>
            <FormControl fullWidth variant="outlined">
              <Select
                name="purposeOfVisit"
                value={formValues.purposeOfVisit}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Training">Training</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Expected Departure */}
          <Box>
            <InputLabel>Expected Departure</InputLabel>
            <TextField
              variant="outlined"
              name="departureDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formValues.departureDate}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Expected Arrival */}
          <Box>
            <InputLabel>Expected Arrival</InputLabel>
            <TextField
              variant="outlined"
              name="arrivalDate"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formValues.arrivalDate}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Duration */}
          <Box>
            <InputLabel>Expected Duration (days)</InputLabel>
            <TextField
              variant="outlined"
              name="duration"
              value={formValues.duration}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Customer */}
          <Box>
            <InputLabel>Customer</InputLabel>
            <TextField
              variant="outlined"
              name="customerName"
              value={formValues.customerName}
              onChange={handleChange}
              fullWidth
            />
          </Box>

          {/* Is Billable */}
          <Box>
            <InputLabel>Is Billable</InputLabel>
            <FormControl fullWidth variant="outlined">
              <Select
                name="isBillable"
                value={formValues.isBillable}
                onChange={handleChange}
              >
                <MenuItem value="Yes">Yes</MenuItem>
                <MenuItem value="No">No</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AddNewTravelRequest;
