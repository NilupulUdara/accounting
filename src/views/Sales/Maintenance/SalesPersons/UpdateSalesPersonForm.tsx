import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import theme from "../../../../theme";

interface SalesPersonFormData {
  name: string;
  telephone: string;
  fax: string;
  email: string;
  provision: string;
  turnoverBreakPoint: string;
  provision2: string;
}

export default function UpdateSalesPerson() {
  const [formData, setFormData] = useState<SalesPersonFormData>({
    name: "",
    telephone: "",
    fax: "",
    email: "",
    provision: "",
    turnoverBreakPoint: "",
    provision2: "",
  });

  const [errors, setErrors] = useState<Partial<SalesPersonFormData>>({});

  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    const newErrors: Partial<SalesPersonFormData> = {};

    if (!formData.name) newErrors.name = "Sales Person Name is required";
    if (!formData.telephone) newErrors.telephone = "Telephone is required";
    if (!formData.fax) newErrors.fax = "Fax number is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.provision) newErrors.provision = "Provision is required";
    if (!formData.turnoverBreakPoint)
      newErrors.turnoverBreakPoint = "Turnover Break Pt Level is required";
    if (!formData.provision2) newErrors.provision2 = "Provision 2 is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Submitted Sales Person Data:", formData);
      alert("Sales person added successfully!");
    }
  };

  return (
    <Stack alignItems="center" sx={{ mt: 4,px: isMobile ? 2 : 0 }}>
      <Paper
        sx={{
          p: theme.spacing(3),
          maxWidth: "600px",
          width: "100%",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Update Sales Person
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Sales Person Name"
            name="name"
            size="small"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
          />

          <TextField
            label="Telephone Number"
            name="telephone"
            size="small"
            fullWidth
            value={formData.telephone}
            onChange={handleInputChange}
            error={!!errors.telephone}
            helperText={errors.telephone}
          />

          <TextField
            label="Fax Number"
            name="fax"
            size="small"
            fullWidth
            value={formData.fax}
            onChange={handleInputChange}
            error={!!errors.fax}
            helperText={errors.fax}
          />

          <TextField
            label="Email"
            name="email"
            size="small"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Provision (%)"
            name="provision"
            size="small"
            fullWidth
            value={formData.provision}
            onChange={handleInputChange}
            error={!!errors.provision}
            helperText={errors.provision}
          />

          <TextField
            label="Turnover Break Pt Level"
            name="turnoverBreakPoint"
            size="small"
            fullWidth
            value={formData.turnoverBreakPoint}
            onChange={handleInputChange}
            error={!!errors.turnoverBreakPoint}
            helperText={errors.turnoverBreakPoint}
          />

          <TextField
            label="Provision 2 (%)"
            name="provision2"
            size="small"
            fullWidth
            value={formData.provision2}
            onChange={handleInputChange}
            error={!!errors.provision2}
            helperText={errors.provision2}
          />
        </Stack>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3, flexDirection: isMobile ? "column" : "row", gap: isMobile ? 2 : 0, }}>
          <Button onClick={() => window.history.back()}>Back</Button>

          <Button
            variant="contained"
            fullWidth={isMobile}
            sx={{ backgroundColor: "var(--pallet-blue)" }}
            onClick={handleSubmit}
          >
            Update
          </Button>
        </Box>
      </Paper>
    </Stack>
  );
}
