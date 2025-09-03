import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import theme from "../../../../theme";

export default function TaxTypes() {
  const [formData, setFormData] = useState({
    description: "",
    defaultRate: "",
    salesGlAccount: "",
    purchasingGlAccount: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Submitted Tax Group:", formData);
    // Add your API call here
  };

  return (
    <Stack alignItems="center" sx={{ mt: 4 }}>
      <Paper
        sx={{
          p: theme.spacing(3),
          maxWidth: "500px",
          width: "100%",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Tax Types
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Description"
            name="description"
            size="small"
            fullWidth
            value={formData.description}
            onChange={handleChange}
          />

          <TextField
            label="Default Rate (%)"
            name="defaultRate"
            size="small"
            type="number"
            fullWidth
            value={formData.defaultRate}
            onChange={handleChange}
          />

          <FormControl size="small" fullWidth>
            <InputLabel>Sales GL Account</InputLabel>
            <Select
              name="salesGlAccount"
              value={formData.salesGlAccount}
              onChange={handleSelectChange}
              label="Sales GL Account"
            >
              <MenuItem value="4000">4000 - Sales Revenue</MenuItem>
              <MenuItem value="4010">4010 - Services Revenue</MenuItem>
              <MenuItem value="4020">4020 - Other Income</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" fullWidth>
            <InputLabel>Purchasing GL Account</InputLabel>
            <Select
              name="purchasingGlAccount"
              value={formData.purchasingGlAccount}
              onChange={handleSelectChange}
              label="Purchasing GL Account"
            >
              <MenuItem value="5000">5000 - Purchase Expenses</MenuItem>
              <MenuItem value="5010">5010 - Freight Expenses</MenuItem>
              <MenuItem value="5020">5020 - Other Costs</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Button onClick={() => window.history.back()}>Back</Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "var(--pallet-blue)" }}
            onClick={handleSubmit}
          >
            Add New
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
}
