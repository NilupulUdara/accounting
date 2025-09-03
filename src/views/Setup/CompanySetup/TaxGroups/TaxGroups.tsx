import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import theme from "../../../../theme";

export default function TaxGroupForm() {
  const [formData, setFormData] = useState({
    description: "",
    tax: false,
    shippingTax: "", // now a text field / number input
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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
          Tax Group Setup
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

          <FormControlLabel
            control={
              <Checkbox
                name="tax"
                checked={formData.tax}
                onChange={handleChange}
              />
            }
            label="Tax (5%)"
          />

          <TextField
            label="Shipping Tax"
            name="shippingTax"
            size="small"
            fullWidth
            value={formData.shippingTax}
            onChange={handleChange}
          />
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
