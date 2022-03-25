import React from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container sx={{ mt: 5 }} maxWidth="sm">
      <Paper elevation={6} sx={{ p: 2 }}>
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          variant="h4"
          gutterBottom
        >
          Login
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }} gap={1.5}>
          <TextField label="Email" type="email" variant="outlined" />
          <TextField label="Password" type="password" variant="outlined" />
          <Button variant="contained" color="success">
            Login
          </Button>
          <Typography sx={{ textAlign: "right" }}>
            New User?{" "}
            <Link to="/register">
              <Button>Register Here</Button>
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
