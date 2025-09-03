import React, { useState } from "react";
import {
    Box,
    Stack,
    Typography,
    TextField,
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    Button,
    Paper,
    Divider,
    FormControl,
    InputLabel,
} from "@mui/material";
import theme from "../../../theme"; // your existing theme
import DateRangePicker from "../../../components/DateRangePicker"; // import your custom component
import { useForm, Controller } from "react-hook-form"; import { login } from "../../../api/userApi";

export default function CompanySetupForm() {

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        domicile: "",
        phone: "",
        fax: "",
        email: "",
        bcc: "",
        companyNumber: "",
        gst: "",
        homeCurrency: "USD",
        deleteCompanyLogo: false,
        companyLogoOnReports: false,
        useBarcodesOnStocks: false,
        autoIncreaseDocRef: false,
        useLongDescriptions: false,
        companyLogoOnView: false,
        databaseSchemeVersion: "2.4.1",
        timeZone: false,
        dimension: false,

        fiscalYear: "2021",
        taxPeriods: "",
        taxLastPeriod: "",
        putAltTaxDoc: false,
        suppressTaxDoc: false,
        automaticRevaluationCurrency: false,
        baseForAutoPriceCalculation: "",
        addPriceFromStdCost: "",
        roundCalculatedPrices: "",
        manufacturing: false,
        fixedAssets: false,
        useDimensions: "1",
        uiShortName: false,
        uiPrintDialog: false,
        searchItems: false,
        searchCustomers: false,
        searchSuppliers: false,
        loginTimeout: "",
        maxDayRangeInDocuments: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = () => {
        const fiscalYearData = {
            fiscalYearStart: control._formValues.dateRangeFrom,
            fiscalYearEnd: control._formValues.dateRangeTo,
        };
        console.log("Submitted:", { ...formData, ...fiscalYearData });
    };

    const { control, register, handleSubmit: handleFormSubmit, formState: { errors } } = useForm({
        defaultValues: {
            dateRangeFrom: null,
            dateRangeTo: null,
        },
    });

    return (
        <Stack alignItems="center">
            <Paper
                sx={{
                    p: theme.spacing(3),
                    maxWidth: "90%",
                    width: "1200px",
                    boxShadow: 2,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Company Setup
                </Typography>

                <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
                    {/* Left Section - General Settings */}
                    <Stack flex={1} spacing={2}>
                        <Typography variant="subtitle1">General Settings</Typography>
                        <Divider />

                        <TextField
                            label="Name (to appear on reports)"
                            name="name"
                            size="small"
                            fullWidth
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Address"
                            name="address"
                            size="small"
                            fullWidth
                            multiline
                            rows={3}
                            value={formData.address}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Domicile"
                            name="domicile"
                            size="small"
                            fullWidth
                            value={formData.domicile}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Phone Number"
                            name="phone"
                            size="small"
                            fullWidth
                            value={formData.phone}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Fax Number"
                            name="fax"
                            size="small"
                            fullWidth
                            value={formData.fax}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Email Address"
                            name="email"
                            size="small"
                            fullWidth
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <TextField
                            label="BCC Address for all outgoing mails"
                            name="bcc"
                            size="small"
                            fullWidth
                            value={formData.bcc}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Official Company Number"
                            name="companyNumber"
                            size="small"
                            fullWidth
                            value={formData.companyNumber}
                            onChange={handleChange}
                        />

                        <TextField
                            label="GST Number"
                            name="gst"
                            size="small"
                            fullWidth
                            value={formData.gst}
                            onChange={handleChange}
                        />

                        <Select
                            name="homeCurrency"
                            value={formData.homeCurrency}
                            size="small"
                            onChange={(e) =>
                                setFormData({ ...formData, homeCurrency: e.target.value })
                            }
                        >
                            <MenuItem value="USD">US Dollars</MenuItem>
                            <MenuItem value="LKR">Sri Lankan Rupees</MenuItem>
                            <MenuItem value="EUR">Euros</MenuItem>
                        </Select>

                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1">Company Logo</Typography>
                            {/* {formData.companyLogo && (
                                <img
                                    src={formData.companyLogo}
                                    alt="Company Logo"
                                    style={{ width: "100px", marginTop: "5px" }}
                                />
                            )} */}
                        </Box>

                        {/* New Company Logo Upload */}
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="body1">New Company Logo (.jpg)</Typography>
                            <input type="file" name="newCompanyLogo" onChange={handleChange} />
                        </Box>

                        <FormControlLabel
                            label="Delete Company Logo"
                            control={
                                <Checkbox
                                    name="deleteCompanyLogo"
                                    checked={formData.deleteCompanyLogo}
                                    onChange={handleChange}
                                />
                            }
                        />

                        <FormControlLabel
                            label="Time Zone on Reports"
                            control={
                                <Checkbox
                                    name="timeZone"
                                    checked={formData.timeZone}
                                    onChange={handleChange}
                                />
                            }
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.companyLogoOnReports}
                                    onChange={handleChange}
                                    name="companyLogoOnReports"
                                />
                            }
                            label="Company Logo on Reports"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.useBarcodesOnStocks}
                                    onChange={handleChange}
                                    name="useBarcodesOnStocks"
                                />
                            }
                            label="Use Barcodes on Stocks"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.autoIncreaseDocRef}
                                    onChange={handleChange}
                                    name="autoIncreaseDocRef"
                                />
                            }
                            label="Auto Increase of Document References"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.dimension}
                                    onChange={handleChange}
                                    name="dimension"
                                />
                            }
                            label="Use Dimensions on Recurrent Invoices"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.useLongDescriptions}
                                    onChange={handleChange}
                                    name="useLongDescriptions"
                                />
                            }
                            label="Use Long Descriptions on Invoices"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.companyLogoOnView}
                                    onChange={handleChange}
                                    name="companyLogoOnView"
                                />
                            }
                            label="Company Logo on Views"
                        />

                        <TextField
                            label="Database Scheme Version"
                            name="databaseSchemeVersion"
                            size="small"
                            fullWidth
                            value={formData.databaseSchemeVersion}
                            InputProps={{ readOnly: true }}
                        />
                    </Stack>

                    {/* Right Section - Ledger & Options */}
                    <Stack flex={1} spacing={2}>
                        <Typography variant="subtitle1">General Ledger Settings</Typography>
                        <Divider />

                        <Typography variant="subtitle1">Fiscal Year</Typography>
                        <DateRangePicker
                            label="Fiscal Year"
                            control={control}
                            register={register}
                            errors={errors}
                        />

                        <TextField
                            label="Tax Periods (months)"
                            name="taxPeriods"
                            size="small"
                            fullWidth
                            value={formData.taxPeriods}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Last Tax Period (months back)"
                            name="taxLastPeriod"
                            size="small"
                            fullWidth
                            value={formData.taxLastPeriod}
                            onChange={handleChange}
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.putAltTaxDoc}
                                    onChange={handleChange}
                                    name="putAltTaxDoc"
                                />
                            }
                            label="Put Alternative Tax Include on Docs"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.suppressTaxDoc}
                                    onChange={handleChange}
                                    name="suppressTaxDoc"
                                />
                            }
                            label="Suppress Tax Rate on Docs"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.automaticRevaluationCurrency}
                                    onChange={handleChange}
                                    name="automaticRevaluationCurrency"
                                />
                            }
                            label="Automatic Revaluation Currency Accounts"
                        />

                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            Sales Pricing
                        </Typography>

                        <FormControl size="small" fullWidth>
                            <InputLabel>Base For Auto Price Calculation</InputLabel>
                            <Select
                                name="baseForAutoPriceCalculation"
                                size="small"
                                fullWidth
                                value={formData.baseForAutoPriceCalculation}
                                onChange={(e) =>
                                    setFormData({ ...formData, baseForAutoPriceCalculation: e.target.value })
                                }
                            >
                                <MenuItem value="standardCost">Standard Cost</MenuItem>
                                <MenuItem value="lastCost">Last Cost</MenuItem>
                                <MenuItem value="averageCost">Average Cost</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            label="Add Price from Std Cost"
                            name="addPriceFromStdCost"
                            size="small"
                            fullWidth
                            value={formData.addPriceFromStdCost}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Round Calculated Prices to Nearest"
                            name="roundCalculatedPrices"
                            size="small"
                            fullWidth
                            value={formData.roundCalculatedPrices}
                            onChange={handleChange}
                        />

                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            Optional Modules
                        </Typography>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.manufacturing}
                                    onChange={handleChange}
                                    name="manufacturing"
                                />
                            }
                            label="Manufacturing"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.fixedAssets}
                                    onChange={handleChange}
                                    name="fixedAssets"
                                />
                            }
                            label="Fixed Assets"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.useDimensions === "1"}
                                    onChange={handleChange}
                                    name="useDimensions"
                                />
                            }
                            label="Use Dimensions"
                        />

                        <Typography variant="subtitle1" sx={{ mt: 2 }}>
                            User Interface Options
                        </Typography>
                        <Divider />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.uiShortName}
                                    onChange={handleChange}
                                    name="uiShortName"
                                />
                            }
                            label="Short Name and Name in List"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.uiPrintDialog}
                                    onChange={handleChange}
                                    name="uiPrintDialog"
                                />
                            }
                            label="Open Print Dialog Direct on Reports"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.searchItems}
                                    onChange={handleChange}
                                    name="searchItems"
                                />
                            }
                            label="Search Item List"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.searchCustomers}
                                    onChange={handleChange}
                                    name="searchCustomers"
                                />
                            }
                            label="Search Customer List"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.searchSuppliers}
                                    onChange={handleChange}
                                    name="searchSuppliers"
                                />
                            }
                            label="Search Supplier List"
                        />

                        <TextField
                            label="Login Timeout (seconds)"
                            name="loginTimeout"
                            size="small"
                            fullWidth
                            value={formData.loginTimeout}
                            onChange={handleChange}
                        />

                        <TextField
                            label="Max Day Range in Documents (days)"
                            name="maxDayRangeInDocuments"
                            size="small"
                            fullWidth
                            value={formData.maxDayRangeInDocuments}
                            onChange={handleChange}
                        />
                    </Stack>
                </Stack>

                {/* Buttons */}
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    {/* Back Button */}
                    <Button
                        onClick={() => window.history.back()}
                    >
                        Back
                    </Button>

                    {/* Update/Submit Button */}
                    <Button
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
