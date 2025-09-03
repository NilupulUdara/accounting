import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Stack,
  TableFooter,
  TablePagination,
  Typography,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useMemo, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../../components/BreadCrumb";
import PageTitle from "../../../components/PageTitle";
import theme from "../../../theme";

// Mock API function (replace with your actual API)
const getUserList = async () => [
  {
    id: 1,
    login: "john_doe",
    fullName: "John Doe",
    phone: "+94 123456789",
    email: "john@example.com",
    lastVisit: "2025-09-01T10:00:00Z",
    accessLevel: "Admin",
  },
  {
    id: 2,
    login: "jane_smith",
    fullName: "Jane Smith",
    phone: "+94 987654321",
    email: "jane@example.com",
    lastVisit: "2025-08-28T15:30:00Z",
    accessLevel: "User",
  },
];

function UserManagementTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const { data: usersData, isFetching } = useQuery({
    queryKey: ["users"],
    queryFn: getUserList,
  });

  const paginatedUsersData = useMemo(() => {
    if (!usersData) return [];
    if (rowsPerPage === -1) return usersData;
    return usersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [page, rowsPerPage, usersData]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => setPage(newPage);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Mock delete handler
  const handleDelete = (id: number) => {
    alert(`Delete user with id: ${id}`); // Replace with API call
  };

  const breadcrumbItems = [
    { title: "Home", href: "/home" },
    { title: "Users" },
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
          <PageTitle title="Users" />
          <Breadcrumb breadcrumbs={breadcrumbItems} />
        </Box>

        {/* Back Button */}
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)} // back to previous page
        >
          Back
        </Button>
      </Box>

      <Stack sx={{ alignItems: "center" }}>
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{ overflowX: "auto", maxWidth: isMobile ? "88vw" : "100%" }}
        >
          <Table aria-label="users table">
            <TableHead sx={{ backgroundColor: "var(--pallet-lighter-blue)" }}>
              <TableRow>
                <TableCell align="left">User Login</TableCell>
                <TableCell align="left">Full Name</TableCell>
                <TableCell align="left">Phone</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Last Visit</TableCell>
                <TableCell align="left">Access Level</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedUsersData?.length > 0 ? (
                paginatedUsersData.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{user.login}</TableCell>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {new Date(user.lastVisit).toLocaleString()}
                    </TableCell>
                    <TableCell>{user.accessLevel}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1} justifyContent="center">
                        {/* Edit Button */}
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => navigate("/setup/companysetup/user-account-setup")} 
                        >
                          Edit
                        </Button>

                        {/* Delete Button */}
                        <Button
                          variant="outlined"
                          size="small"
                          color="error"
                          startIcon={<DeleteIcon />}
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <Typography variant="body2">No Records Found</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
                  count={usersData?.length || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  showFirstButton
                  showLastButton
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
}

export default UserManagementTable;
