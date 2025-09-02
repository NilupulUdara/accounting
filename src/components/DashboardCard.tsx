import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface DashboardCardProps {
  text: string;
  icon: JSX.Element;
  change?: number; // optional
  onClick?: () => void;
}

export default function DashboardCard({ text, icon, change, onClick }: DashboardCardProps) {
  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 3 },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap", 
        backgroundColor: "#fff",
        borderRadius: 3,
        mb: 2,
        mx: { xs: 2, sm: 3, md: 6 }, 
        minHeight: { xs: "auto", sm: 150 }, 
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          cursor: "pointer",
        },
      }}
      onClick={onClick}
    >
      {/* Left Side: Title + Optional Change */}
      <Box sx={{ flex: 1, minWidth: { xs: "100%", sm: "auto" } }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="text.primary"
          sx={{ mb: change !== undefined ? 1 : 0 }}
        >
          {text}
        </Typography>
        {change !== undefined && (
          <Typography variant="body2" color="text.secondary">
            compared last…{" "}
            <span style={{ fontWeight: "bold", color: change >= 0 ? "green" : "red",  marginLeft: "0.6rem", }}>
              {change >= 0 ? `+${change}% ↑` : `${change}% ↓`}
            </span>
          </Typography>
        )}
      </Box>

      {/* Right Side: Icon + Arrow */}
      <Box
        display="flex"
        alignItems="center"
        gap={1}
        sx={{ mt: { xs: 2, sm: 0 }, minWidth: { xs: "100%", sm: "auto" }, justifyContent: { xs: "flex-start", sm: "flex-end" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            width: { xs: 40, sm: 50 }, 
            height: { xs: 40, sm: 50 },
          }}
        >
          {React.cloneElement(icon, { sx: { color: "#000", fontSize: { xs: 20, sm: 24 } } })}
        </Box>
        <ArrowForwardIosIcon fontSize="large" sx={{ color: "gray" }} />
      </Box>
    </Paper>
  );
}
