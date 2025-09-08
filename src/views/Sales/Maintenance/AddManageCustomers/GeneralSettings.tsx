import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import theme from "../../../../theme";

export default function GeneralSettingsForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerShortName: "",
    address: "",
    gstNumber: "",
    currency: "USD",
    salesType: "Retail",
    phone: "",
    secondaryPhone: "",
    email: "",
    bankAccount: "",
    salesPerson: "",
    discountPercent: "",
    promptPaymentDiscount: "",
    creditLimit: "",
    paymentTerms: "Cash Only",
    creditStatus: "Good History",
    generalNotes: "",
    defaultInventoryLocation: "",
    defaultShippingCompany: "",
    salesArea: "",
    taxGroup: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("General settings saved!");
  };

  return (
    <Stack alignItems="center" sx={{ p: { xs: 2, md: 3 } }}>
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          p: theme.spacing(3),
          boxShadow: theme.shadows[2],
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography variant="h5" sx={{ mb: theme.spacing(3), textAlign: "center" }}>
          General Settings
        </Typography>

        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {/* Name and Address */}
              <Typography variant="subtitle1">Name and Address</Typography>
              <Divider />
              <TextField
                label="Customer Name"
                value={formData.customerName}
                onChange={(e) => handleChange("customerName", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Customer Short Name"
                value={formData.customerShortName}
                onChange={(e) => handleChange("customerShortName", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Address"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                fullWidth
                size="small"
                multiline
                rows={2}
              />
              <TextField
                label="GST Number"
                value={formData.gstNumber}
                onChange={(e) => handleChange("gstNumber", e.target.value)}
                fullWidth
                size="small"
              />
              <FormControl fullWidth size="small">
                <InputLabel>Currency</InputLabel>
                <Select
                  value={formData.currency}
                  onChange={(e) => handleChange("currency", e.target.value)}
                  label="Currency"
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="LKR">LKR</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Sales Type / Price List</InputLabel>
                <Select
                  value={formData.salesType}
                  onChange={(e) => handleChange("salesType", e.target.value)}
                  label="Sales Type / Price List"
                >
                  <MenuItem value="Retail">Retail</MenuItem>
                  <MenuItem value="Wholesale">Wholesale</MenuItem>
                </Select>
              </FormControl>

              {/* Branch */}
              <Typography variant="subtitle1">Branch</Typography>
              <Divider />
              <TextField
                label="Phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Secondary Phone"
                value={formData.secondaryPhone}
                onChange={(e) => handleChange("secondaryPhone", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Bank Account Number"
                value={formData.bankAccount}
                onChange={(e) => handleChange("bankAccount", e.target.value)}
                fullWidth
                size="small"
              />
              <FormControl fullWidth size="small">
                <InputLabel>Sales Person</InputLabel>
                <Select
                  value={formData.salesPerson}
                  onChange={(e) => handleChange("salesPerson", e.target.value)}
                  label="Sales Person"
                >
                  <MenuItem value="John Doe">John Doe</MenuItem>
                  <MenuItem value="Jane Smith">Jane Smith</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              {/* Sales */}
              <Typography variant="subtitle1">Sales</Typography>
              <Divider />
              <TextField
                label="Discount Percent"
                value={formData.discountPercent}
                onChange={(e) => handleChange("discountPercent", e.target.value)}
                fullWidth
                size="small"
              />
              <TextField
                label="Prompt Payment Discount Percent"
                value={formData.promptPaymentDiscount}
                onChange={(e) =>
                  handleChange("promptPaymentDiscount", e.target.value)
                }
                fullWidth
                size="small"
              />
              <TextField
                label="Credit Limit"
                value={formData.creditLimit}
                onChange={(e) => handleChange("creditLimit", e.target.value)}
                fullWidth
                size="small"
              />
              <FormControl fullWidth size="small">
                <InputLabel>Payment Terms</InputLabel>
                <Select
                  value={formData.paymentTerms}
                  onChange={(e) => handleChange("paymentTerms", e.target.value)}
                  label="Payment Terms"
                >
                  <MenuItem value="Cash Only">Cash Only</MenuItem>
                  <MenuItem value="Credit 30 Days">Credit 30 Days</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Credit Status</InputLabel>
                <Select
                  value={formData.creditStatus}
                  onChange={(e) => handleChange("creditStatus", e.target.value)}
                  label="Credit Status"
                >
                  <MenuItem value="Good History">Good History</MenuItem>
                  <MenuItem value="Under Review">Under Review</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="General Notes"
                value={formData.generalNotes}
                onChange={(e) => handleChange("generalNotes", e.target.value)}
                fullWidth
                size="small"
                multiline
                rows={3}
              />

              {/* Branch Settings */}
              <Typography variant="subtitle1">Branch</Typography>
              <Divider />
              <FormControl fullWidth size="small">
                <InputLabel>Default Inventory Location</InputLabel>
                <Select
                  value={formData.defaultInventoryLocation}
                  onChange={(e) =>
                    handleChange("defaultInventoryLocation", e.target.value)
                  }
                  label="Default Inventory Location"
                >
                  <MenuItem value="Warehouse 1">Warehouse 1</MenuItem>
                  <MenuItem value="Warehouse 2">Warehouse 2</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Default Shipping Company</InputLabel>
                <Select
                  value={formData.defaultShippingCompany}
                  onChange={(e) =>
                    handleChange("defaultShippingCompany", e.target.value)
                  }
                  label="Default Shipping Company"
                >
                  <MenuItem value="DHL">DHL</MenuItem>
                  <MenuItem value="FedEx">FedEx</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Sales Area</InputLabel>
                <Select
                  value={formData.salesArea}
                  onChange={(e) => handleChange("salesArea", e.target.value)}
                  label="Sales Area"
                >
                  <MenuItem value="North">North</MenuItem>
                  <MenuItem value="South">South</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth size="small">
                <InputLabel>Tax Group</InputLabel>
                <Select
                  value={formData.taxGroup}
                  onChange={(e) => handleChange("taxGroup", e.target.value)}
                  label="Tax Group"
                >
                  <MenuItem value="GST">GST</MenuItem>
                  <MenuItem value="VAT">VAT</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: theme.spacing(4),
            flexDirection: { xs: "column", sm: "row" },
            gap: theme.spacing(2),
          }}
        >
          <Button variant="outlined" fullWidth onClick={() => window.history.back()}>
            Back
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: theme.palette.primary.main }}
            fullWidth
            onClick={handleSubmit}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
