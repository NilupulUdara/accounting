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
    SelectChangeEvent,
    FormControl,
    InputLabel,
} from "@mui/material";
import theme from "../../../theme";

export default function UserSetupForm() {
    const [formData, setFormData] = useState({
        userLogin: "",
        password: "",
        fullName: "",
        telephone: "",
        email: "",
        accellLevel: "",
        language: "",
        pos: "",
        printingProfile: "",
        usePopupForReports: false,
    });

    // For text fields and checkbox
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // For MUI Select components
    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log("Submitted Data:", formData);
    };

    return (
        <Stack alignItems="center" sx={{ mt: 4 }}>
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
                    User Setup
                </Typography>

                <Stack spacing={2}>
                    <TextField
                        label="User Login"
                        name="userLogin"
                        size="small"
                        fullWidth
                        value={formData.userLogin}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        size="small"
                        fullWidth
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Full Name"
                        name="fullName"
                        size="small"
                        fullWidth
                        value={formData.fullName}
                        onChange={handleChange}
                    />

                    <TextField
                        label="Telephone No"
                        name="telephone"
                        size="small"
                        fullWidth
                        value={formData.telephone}
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

                    <FormControl size="small" fullWidth>
                        <InputLabel>Access Level</InputLabel>
                        <Select
                            name="accellLevel"
                            value={formData.accellLevel}
                            onChange={handleSelectChange}
                            label="Access Level"
                        >
                            <MenuItem value="admin">Admin</MenuItem>
                            <MenuItem value="manager">Manager</MenuItem>
                            <MenuItem value="user">User</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth>
                        <InputLabel>Language</InputLabel>
                        <Select
                            name="language"
                            value={formData.language}
                            onChange={handleSelectChange}
                            label="Language"
                        >
                            <MenuItem value="en">English</MenuItem>
                            <MenuItem value="si">Sinhala</MenuItem>
                            <MenuItem value="ta">Tamil</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth>
                        <InputLabel>POS</InputLabel>
                        <Select
                            name="pos"
                            value={formData.pos}
                            onChange={handleSelectChange}
                            label="POS"
                        >
                            <MenuItem value="pos1">POS 1</MenuItem>
                            <MenuItem value="pos2">POS 2</MenuItem>
                            <MenuItem value="pos3">POS 3</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl size="small" fullWidth>
                        <InputLabel>Printing Profile</InputLabel>
                        <Select
                            name="printingProfile"
                            value={formData.printingProfile}
                            onChange={handleSelectChange}
                            label="Printing Profile"
                        >
                            <MenuItem value="default">Default</MenuItem>
                            <MenuItem value="compact">Compact</MenuItem>
                            <MenuItem value="detailed">Detailed</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="usePopupForReports"
                                checked={formData.usePopupForReports}
                                onChange={handleChange}
                            />
                        }
                        label="Use Popup Window for Reports"
                    />
                </Stack>

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
                        Add New
                    </Button>
                </Box>
            </Paper>
        </Stack>
    );
}