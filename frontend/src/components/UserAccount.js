import React, { useContext, useState } from "react";
import UserContext from "../auth/UserContext";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Alert from "../common/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Button } from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Hearth
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function UserAccount() {
  const { currentUser } = useContext(UserContext);

  const [formErrors, setFormErrors] = useState([]);
  const [editUser, setEditUser] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let dataToSend = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    let result = await HomesApi.editUser(dataToSend);
    if (result.success) {
      setFormErrors(result.success);
    } else {
      console.log("Error logging in");
      setFormErrors(result.errors);
    }
  };

  function handleEditInfo(evt) {
    evt.preventDefault();
    setEditUser(!editUser);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            My Account
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  disabled={!editUser}
                  value={currentUser.user[0].firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  name="lastName"
                  autoComplete="lname"
                  value={currentUser.user[0].lastName}
                  disabled={!editUser}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={currentUser.user[0].email}
                  disabled={!editUser}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  disabled={!editUser}
                />
              </Grid>
            </Grid>
            {editUser ? (
              <>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit My Info
                </Button>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleEditInfo}
                  color="error"
                >
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleEditInfo}
              >
                Edit My Info
              </Button>
            )}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        {formErrors.length ? (
          <Alert type="danger" messages={formErrors} />
        ) : null}
      </Container>
    </ThemeProvider>
  );
}

export default UserAccount;
