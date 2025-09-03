import React from "react";
import {
    Box,
    Stack,
    Typography,
    Button,
    Paper,
    Divider,
    TextField,
} from "@mui/material";
import theme from "../../../../theme";
import { useForm, Controller } from "react-hook-form";

export default function FiscalYear() {
    const {
        control,
        handleSubmit,
    } = useForm({
        defaultValues: {
            fiscalYearFrom: null,
            fiscalYearTo: null,
            isClosed: false,
        },
    });

    const onSubmit = (data: any) => {
        console.log("Submitted:", data);
    };

    return (
        <Stack alignItems="center" sx={{ mt: 4 }}>
            <Paper
                sx={{
                    p: theme.spacing(3),
                    maxWidth: "90%",
                    width: "600px",
                    boxShadow: 2,
                    borderRadius: 2,
                }}
            >
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Fiscal Year Setup
                </Typography>

                <Stack spacing={3}>
                    <Divider />

                    <Controller
                        name="fiscalYearFrom"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Fiscal Year Begin"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        )}
                    />

                    <Controller
                        name="fiscalYearTo"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                label="Fiscal Year End"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                        )}
                    />
                </Stack>

                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
                    <Button onClick={() => window.history.back()}>Back</Button>

                    <Button
                        variant="contained"
                        sx={{ backgroundColor: "var(--pallet-blue)" }}
                        onClick={handleSubmit(onSubmit)}
                    >
                        Add New
                    </Button>
                </Box>
            </Paper>
        </Stack>
    );
}
