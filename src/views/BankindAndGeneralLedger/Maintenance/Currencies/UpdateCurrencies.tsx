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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import theme from "../../../../theme";

interface CurrenciesFormData {
  currencyAbbreviation: string;
  currencySymbol: string;
  currencyName: string;
  hundredthsName: string;
  country: string;
  autoExchangeRateUpdate: boolean;
}

export default function UpdateCurrencies() {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const [formData, setFormData] = useState<CurrenciesFormData>({
    currencyAbbreviation: "",
    currencySymbol: "",
    currencyName: "",
    hundredthsName: "",
    country: "",
    autoExchangeRateUpdate: false,
  });

  const [errors, setErrors] = useState<Partial<CurrenciesFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = (): boolean => {
    const newErrors: Partial<CurrenciesFormData> = {};

    if (!formData.currencyAbbreviation)
      newErrors.currencyAbbreviation = "Currency Abbreviation is required";

    if (!formData.currencySymbol)
      newErrors.currencySymbol = "Currency Symbol is required";

    if (!formData.currencyName)
      newErrors.currencyName = "Currency Name is required";

    if (!formData.hundredthsName)
      newErrors.hundredthsName = "Hundredths Name is required";

    if (!formData.country) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <Stack alignItems="center" sx={{ mt: 4, px: 2 }}>
      <Paper
        sx={{
          p: theme.spacing(3),
          width: "100%",
          maxWidth: isMobile ? "100%" : "600px",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 3, textAlign: isMobile ? "center" : "left" }}
        >
          Currencies
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Currency Abbreviation"
            name="currencyAbbreviation"
            size="small"
            fullWidth
            value={formData.currencyAbbreviation}
            onChange={handleChange}
            error={!!errors.currencyAbbreviation}
            helperText={errors.currencyAbbreviation}
          />

          <TextField
            label="Currency Symbol"
            name="currencySymbol"
            size="small"
            fullWidth
            value={formData.currencySymbol}
            onChange={handleChange}
            error={!!errors.currencySymbol}
            helperText={errors.currencySymbol}
          />

          <TextField
            label="Currency Name"
            name="currencyName"
            size="small"
            fullWidth
            value={formData.currencyName}
            onChange={handleChange}
            error={!!errors.currencyName}
            helperText={errors.currencyName}
          />

          <TextField
            label="Hundredths Name"
            name="hundredthsName"
            size="small"
            fullWidth
            value={formData.hundredthsName}
            onChange={handleChange}
            error={!!errors.hundredthsName}
            helperText={errors.hundredthsName}
          />

          <TextField
            label="Country"
            name="country"
            size="small"
            fullWidth
            value={formData.country}
            onChange={handleChange}
            error={!!errors.country}
            helperText={errors.country}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="autoExchangeRateUpdate"
                checked={formData.autoExchangeRateUpdate}
                onChange={handleChange}
              />
            }
            label="Automatic Exchange Rate Update"
          />
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            gap: 2,
            mt: 3,
          }}
        >
          <Button
            fullWidth={isMobile}
            onClick={() => window.history.back()}
            variant="outlined"
          >
            Back
          </Button>

          <Button
            fullWidth={isMobile}
            variant="contained"
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
