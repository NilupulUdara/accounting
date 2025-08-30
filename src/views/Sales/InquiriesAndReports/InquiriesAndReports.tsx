import React from "react";

import {
  Stack,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router";

function InquiriesAndReports() {
  const navigate = useNavigate();

const allItems = [
  { text: "SALES QUOTATION INQUIRY", change: +10, icon: <RequestQuoteIcon sx={{ fontSize: 40, color: "#1976d2" }} />, path: "/sales/inquiriesandreports/sales-quotation-inquiry" },
  { text: "SALES ORDER INQUIRY", change: -5, icon: <ShoppingCartIcon sx={{ fontSize: 40, color: "#1976d2" }} />, path: "/sales/inquiriesandreports/sales-order-inquiry" },
  { text: "CUSTOMER TRANSACTION INQUIRY", change: +8, icon: <ReceiptLongIcon sx={{ fontSize: 40, color: "#1976d2" }} />, path: "/sales/inquiriesandreports/customer-transaction-inquiry" },
  { text: "CUSTOMER ALLOCATION INQUIRY", change: 0, icon: <AssignmentIcon sx={{ fontSize: 40, color: "#1976d2" }} />, path: "/sales/inquiriesandreports/customer-allocation-inquiry" },
  { text: "CUSTOMER AND SALES REPORTS", change: +12, icon: <AssessmentIcon sx={{ fontSize: 40, color: "#1976d2" }} />, path: "/sales/inquiriesandreports/customer-and-sales-reports" },
];

  const handleItemClick = (path, text) => {
    if (path) {
      navigate(path);
    } else {
      console.log(`Clicked: ${text} (No route defined)`);
    }
  };

  const renderCard = (item, index) => (
      <Paper
        key={index}
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderRadius: 3,
          mb: 4,
          mx: 6,
          height: 120,
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            cursor: "pointer",
          },
        }}
        onClick={() => handleItemClick(item.path, item.text)}
      >
        <Box display="flex" alignItems="center" gap={2}>
  
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
              {item.text}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              compared last…{" "}
              <span style={{ fontWeight: "bold", color: item.change >= 0 ? "green" : "red" }}>
                {item.change >= 0 ? `+${item.change}% ↑` : `${item.change}% ↓`}
              </span>
            </Typography>
          </Box>
        </Box>
  
        <Box display="flex" alignItems="center" gap={1}>
          {item.icon}
          <ArrowForwardIosIcon fontSize="large" sx={{ color: "gray" }} />
        </Box>
      </Paper>
    );
  
    return (
      <Stack
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f9f9f9",
          p: 3,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 3,
            color: "#333",
          }}
        >
          Inquiry and Report
        </Typography>
  
        <Grid container spacing={2}>
          {allItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {renderCard(item, index)}
            </Grid>
          ))}
        </Grid>
      </Stack>
    );
}

export default InquiriesAndReports;