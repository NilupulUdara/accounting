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
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  Grid,
} from "@mui/material";
import theme from "../../../../theme";

export default function SupplierGeneralSettingsForm() {
  const [formData, setFormData] = useState({
    supplierName: "",
    supplierShortName: "",
    gstNumber: "",
    website: "",
    supplierCurrency: "",
    taxGroup: "",
    ourCustomerNo: "",
    bankAccount: "",
    bankName: "",
    creditLimit: "",
    paymentTerms: "",
    pricesIncludeTax: false,
    accountsPayable: "",
    purchaseAccount: "",
    purchaseDiscountAccount: "",
    contactPerson: "",
    phone: "",
    secondaryPhone: "",
    fax: "",
    email: "",
    documentLanguage: "",
    mailingAddress: "",
    physicalAddress: "",
    generalNotes: "",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Supplier settings saved!");
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
        <Typography
          variant="h5"
          sx={{ mb: theme.spacing(3), textAlign: "center" }}
        >
          Supplier Setup
        </Typography>

        <Grid container spacing={4}>
          {/* Basic Data */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Basic Data</Typography>
              <Divider />
              <TextField
                label="Supplier Name"
                value={formData.supplierName}
                onChange={(e) =>
                  handleChange("supplierName", e.target.value)
                }
                size="small"
                fullWidth
              />
              <TextField
                label="Supplier Short Name"
                value={formData.supplierShortName}
                onChange={(e) =>
                  handleChange("supplierShortName", e.target.value)
                }
                size="small"
                fullWidth
              />
              <TextField
                label="GST Number"
                value={formData.gstNumber}
                onChange={(e) => handleChange("gstNumber", e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                size="small"
                fullWidth
              />
              <FormControl size="small" fullWidth>
                <InputLabel>Supplier Currency</InputLabel>
                <Select
                  value={formData.supplierCurrency}
                  onChange={(e) =>
                    handleChange("supplierCurrency", e.target.value)
                  }
                >
                  <MenuItem value="USD">USD</MenuItem>
                  <MenuItem value="LKR">LKR</MenuItem>
                  <MenuItem value="EUR">EUR</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Tax Group</InputLabel>
                <Select
                  value={formData.taxGroup}
                  onChange={(e) => handleChange("taxGroup", e.target.value)}
                >
                  <MenuItem value="GST">TAX</MenuItem>
                  <MenuItem value="VAT">VAT</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Our Customer No."
                value={formData.ourCustomerNo}
                onChange={(e) => handleChange("ourCustomerNo", e.target.value)}
                size="small"
                fullWidth
              />
            </Stack>
          </Grid>

          {/* Purchasing */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Purchasing</Typography>
              <Divider />
              <TextField
                label="Bank Name"
                value={formData.bankName}
                onChange={(e) => handleChange("bankName", e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Bank Account"
                value={formData.bankAccount}
                onChange={(e) => handleChange("bankAccount", e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Credit Limit"
                value={formData.creditLimit}
                onChange={(e) => handleChange("creditLimit", e.target.value)}
                size="small"
                fullWidth
              />
              <FormControl size="small" fullWidth>
                <InputLabel>Payment Terms</InputLabel>
                <Select
                  value={formData.paymentTerms}
                  onChange={(e) =>
                    handleChange("paymentTerms", e.target.value)
                  }
                >
                  <MenuItem value="Cash Only">Cash Only</MenuItem>
                  <MenuItem value="30 Days">30 Days</MenuItem>
                  <MenuItem value="60 Days">60 Days</MenuItem>
                </Select>
              </FormControl>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.pricesIncludeTax}
                    onChange={(e) =>
                      handleChange("pricesIncludeTax", e.target.checked)
                    }
                  />
                }
                label="Prices Contain Tax Include"
              />
            </Stack>
          </Grid>

          {/* Accounts */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Accounts</Typography>
              <Divider />
              <FormControl size="small" fullWidth>
                <InputLabel>Accounts Payable Account</InputLabel>
                <Select
                  value={formData.accountsPayable}
                  onChange={(e) =>
                    handleChange("accountsPayable", e.target.value)
                  }
                >
                  <MenuItem value="AP-001">AP-001</MenuItem>
                  <MenuItem value="AP-002">AP-002</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Purchase Account</InputLabel>
                <Select
                  value={formData.purchaseAccount}
                  onChange={(e) =>
                    handleChange("purchaseAccount", e.target.value)
                  }
                >
                  <MenuItem value="PUR-001">PUR-001</MenuItem>
                  <MenuItem value="PUR-002">PUR-002</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Purchase Discount Account</InputLabel>
                <Select
                  value={formData.purchaseDiscountAccount}
                  onChange={(e) =>
                    handleChange("purchaseDiscountAccount", e.target.value)
                  }
                >
                  <MenuItem value="DISC-001">5060 Discount Received</MenuItem>
                  <MenuItem value="DISC-002">5070 Discount Received</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          {/* Contact Data */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Contact Data</Typography>
              <Divider />
              <TextField
                label="Contact Person"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Phone Number"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Secondary Phone Number"
                value={formData.secondaryPhone}
                onChange={(e) =>
                  handleChange("secondaryPhone", e.target.value)
                }
                size="small"
                fullWidth
              />
              <TextField
                label="Fax Number"
                value={formData.fax}
                onChange={(e) => handleChange("fax", e.target.value)}
                size="small"
                fullWidth
              />
              <TextField
                label="Email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                size="small"
                fullWidth
              />
              <FormControl size="small" fullWidth>
                <InputLabel>Document Language</InputLabel>
                <Select
                  value={formData.documentLanguage}
                  onChange={(e) =>
                    handleChange("documentLanguage", e.target.value)
                  }
                >
                  <MenuItem value="English">System Default</MenuItem>
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Sinhala">Sinhala</MenuItem>
                  <MenuItem value="Tamil">Tamil</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>

          {/* Addresses */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Addresses</Typography>
              <Divider />
              <TextField
                label="Mailing Address"
                value={formData.mailingAddress}
                onChange={(e) =>
                  handleChange("mailingAddress", e.target.value)
                }
                size="small"
                fullWidth
                multiline
                rows={2}
              />
              <TextField
                label="Physical Address"
                value={formData.physicalAddress}
                onChange={(e) =>
                  handleChange("physicalAddress", e.target.value)
                }
                size="small"
                fullWidth
                multiline
                rows={2}
              />
            </Stack>
          </Grid>

          {/* General */}
          <Grid item xs={12} md={6}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">General</Typography>
              <Divider />
              <TextField
                label="General Notes"
                value={formData.generalNotes}
                onChange={(e) => handleChange("generalNotes", e.target.value)}
                size="small"
                fullWidth
                multiline
                rows={3}
              />
            </Stack>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: theme.spacing(4),
            flexDirection: { xs: "column", sm: "row" },
            gap: theme.spacing(2),
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={() => window.history.back()}
          >
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
