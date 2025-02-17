import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router";
import apifetch from "../../utils/axios";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
}));

export default function Login() {
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");

  const validateInputs = () => {
    const username = document.getElementById("username") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    let isValid = true;

    if (!username.value || username.value.length < 3) {
      setUsernameError(true);
      setUsernameErrorMessage("Please enter a valid username.");
      isValid = false;
    } else {
      setUsernameError(false);
      setUsernameErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    } 

    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateInputs()) return;

    const data = new FormData(event.currentTarget);
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    try {
      const response = await apifetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { username, password },
      });

      if (response.status >= 400) {
        throw new Error(response.data.message);
      }

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        alert(err.message);
      } else {
        alert("Ada masalah pada server.");
      }
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <CssBaseline />
      <Card variant="outlined">
        <Typography
          component="h1"
          variant="h4"
          sx={{ width: "100%", textAlign: "center", marginBottom: 2 }}
        >
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            error={usernameError}
            helperText={usernameErrorMessage}
            id="username"
            type="text"
            name="username"
            placeholder="yourusername"
            autoComplete="username"
            required
            fullWidth
            variant="outlined"
            label="Username"
          />
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            id="password"
            type="password"
            name="password"
            placeholder="••••••"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            label="Password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained">
            Login
          </Button>
        </Box>
        <Divider sx={{ marginY: 2 }}>or</Divider>
        <Typography sx={{ textAlign: "center" }}>
          Don&apos;t have an account?{" "}
          <Button
            component="a"
            href="/register"
            variant="text"
            sx={{ textTransform: "none" }}
          >
            Sign up
          </Button>
        </Typography>
      </Card>
    </Box>
  );
}