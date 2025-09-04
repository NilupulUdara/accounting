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
import Breadcrumb from "../../../../components/BreadCrumb";
import PageTitle from "../../../../components/PageTitle";
import theme from "../../../../theme";
import SearchBar from "../../../../components/SearchBar";

// Mock API function
const getUserList = async () => [
  {
    id: 1,
    login: "john_doe",
    fullName: "John Doe",
    department: "Finance",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    login: "jane_smith",
    fullName: "Jane Smith",
    department: "HR",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
  {
    id: 3,
    login: "john_doe",
    fullName: "John Doe",
    department: "Finance",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 4,
    login: "jane_smith",
    fullName: "Jane Smith",
    department: "HR",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },{
    id: 5,
    login: "john_doe",
    fullName: "John Doe",
    department: "Finance",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 6,
    login: "jane_smith",
    fullName: "Jane Smith",
    department: "HR",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },{
    id: 7,
    login: "john_doe",
    fullName: "John Doe",
    department: "Finance",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 8,
    login: "jane_smith",
    fullName: "Jane Smith",
    department: "HR",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },{
    id: 9,
    login: "john_doe",
    fullName: "John Doe",
    department: "Finance",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 10,
    login: "jane_smith",
    fullName: "Jane Smith",
    department: "HR",
    email: "jane@example.com",
    role: "User",
    status: "Inactive",
  },
];

function UserManagementTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const { data: usersData = [] } = useQuery({
    queryKey: ["users"],
    queryFn: getUserList,
  });

  const filteredUsers = useMemo(() => {
    if (!usersData) return [];
    if (!searchQuery.trim()) return usersData;
    const lowerQuery = searchQuery.toLowerCase();
    return usersData.filter(
      (user) =>
        user.fullName.toLowerCase().includes(lowerQuery) ||
        user.department.toLowerCase().includes(lowerQuery) ||
        user.email.toLowerCase().includes(lowerQuery) ||
        user.role.toLowerCase().includes(lowerQuery) ||
        user.status.toLowerCase().includes(lowerQuery)
    );
  }, [usersData, searchQuery]);

  const paginatedUsersData = useMemo(() => {
    if (rowsPerPage === -1) return filteredUsers;
    return filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filteredUsers, page, rowsPerPage]);

  const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage);
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id: number) => {
    alert(`Delete user with id: ${id}`);
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

        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/setup/companysetup/add-user")}
          >
            Add User
          </Button>

          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Stack>
      </Box>

      {/* Search Bar */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 2, width: "100%" }}>
        <Box sx={{ width: isMobile ? "100%" : "300px" }}>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} placeholder="Search..." />
        </Box>
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
                <TableCell>No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedUsersData.length > 0 ? (
                paginatedUsersData.map((user, index) => (
                  <TableRow key={user.id} hover>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>{user.fullName}</TableCell>
                    <TableCell>{user.department}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.status}</TableCell>
                    <TableCell align="center">
                      <Stack direction="row" spacing={1} justifyContent="center">
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => navigate(`/setup/companysetup/update-user/${user.id}`)}
                        >
                          Edit
                        </Button>
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
                  count={filteredUsers.length}
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

export default UserManagementTable;
