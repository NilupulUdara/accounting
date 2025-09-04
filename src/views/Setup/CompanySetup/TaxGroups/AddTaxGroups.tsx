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
  FormHelperText,
} from "@mui/material";
import theme from "../../../../theme";

interface TaxGroupFormData {
  description: string;
  tax: boolean;
  shippingTax: string;
}

export default function AddTaxGroupsForm() {
  const [formData, setFormData] = useState<TaxGroupFormData>({
    description: "",
    tax: false,
    shippingTax: "",
  });

  const [errors, setErrors] = useState<Partial<TaxGroupFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<TaxGroupFormData> = {};

    if (!formData.description) newErrors.description = "Description is required";

    if (formData.tax) {
      if (!formData.shippingTax) {
        newErrors.shippingTax = "Shipping Tax is required when Tax is checked";
      } else if (isNaN(Number(formData.shippingTax)) || Number(formData.shippingTax) < 0) {
        newErrors.shippingTax = "Shipping Tax must be a positive number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Submitted Tax Group:", formData);
      alert("Form submitted successfully!");
    }
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
            error={!!errors.description}
            helperText={errors.description}
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
            error={!!errors.shippingTax}
            helperText={errors.shippingTax}
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
