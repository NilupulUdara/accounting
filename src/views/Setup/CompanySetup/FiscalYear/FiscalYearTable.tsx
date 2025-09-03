import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import theme from "../../../../theme";
import Breadcrumb from "../../../../components/BreadCrumb";
import PageTitle from "../../../../components/PageTitle";

// Mock API - replace with real API call
const getFiscalYears = async () => {
  return [
    { id: 1, fiscalYearBegin: "2025-01-01", fiscalYearEnd: "2025-12-31", isClosed: false },
    { id: 2, fiscalYearBegin: "2024-01-01", fiscalYearEnd: "2024-12-31", isClosed: true },
    { id: 3, fiscalYearBegin: "2023-01-01", fiscalYearEnd: "2023-12-31", isClosed: true },
  ];
};

function FiscalYearTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const { data: fiscalYears = [], isFetching } = useQuery({
    queryKey: ["fiscalYears"],
    queryFn: getFiscalYears,
  });

  const paginatedData = useMemo(() => {
    if (!fiscalYears) return [];
    if (rowsPerPage === -1) return fiscalYears;
    return fiscalYears.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [fiscalYears, page, rowsPerPage]);

  const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id: number) => {
    alert(`Delete fiscal year with id: ${id}`);
  };

  const breadcrumbItems = [
    { title: "Home", href: "/home" },
    { title: "Fiscal Years" },
  ];

  return (
    <Stack>
      <Box
        sx={{
          padding: theme.spacing(2),
          boxShadow: 2,
          marginY: 2,
          borderRadius: 1,
          overflowX: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <PageTitle title="Fiscal Years" />
          <Breadcrumb breadcrumbs={breadcrumbItems} />
        </Box>

        <Stack direction="row" spacing={1}>
          {/* Add User Button */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/setup/companysetup/add-fiscal-year")}
          >
            Add Fiscal Year
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate("/setup/companysetup")}
          >
            Back
          </Button>
        </Stack>
      </Box>

      <Stack sx={{ alignItems: "center" }}>
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{ overflowX: "auto", maxWidth: isMobile ? "88vw" : "100%" }}
        >
          <Table aria-label="fiscal years table">
            <TableHead sx={{ backgroundColor: "var(--pallet-lighter-blue)" }}>
              <TableRow>
                <TableCell>Fiscal Year Begin</TableCell>
                <TableCell>Fiscal Year End</TableCell>
                <TableCell>Is Closed</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((fy) => (
                  <TableRow key={fy.id} hover>
                    <TableCell>{new Date(fy.fiscalYearBegin).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(fy.fiscalYearEnd).toLocaleDateString()}</TableCell>
                    <TableCell>{fy.isClosed ? "Yes" : "No"}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => navigate(`/fiscal-year/edit/${fy.id}`)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          size="small"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDelete(fy.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    <Typography variant="body2">{isFetching ? "Loading..." : "No Records Found"}</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={4}
                  count={fiscalYears?.length || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  showFirstButton
                  showLastButton
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}

export default FiscalYearTable;
