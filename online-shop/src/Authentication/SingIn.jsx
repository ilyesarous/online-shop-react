import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../tools/images/logo.png";
import { Container } from "../tools/styles/Styles";
import { request } from "../tools/apis/axios_helper";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();

  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();

    request("POST", "/auth/login", { email: email, password: password })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigator("/home");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Stack alignItems={"center"} sx={{ mt: "5%" }}>
      <Container>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
          pb={3}
        >
          <img src={logo} height={50} alt="logo" />
          <Typography variant="h5">Welcome To Shoping online</Typography>
        </Stack>
        <Stack width={"70%"}>
          <form onSubmit={login}>
            <TextField
              margin="normal"
              required
              type="email"
              label="Email Address"
              onChange={getEmail}
              autoFocus
              fullWidth
            />
            <TextField
              margin="normal"
              required
              type="password"
              label="Password"
              onChange={getPassword}
              autoFocus
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: "3%" }}
            >
              Sign in
            </Button>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ mt: "3%" }}
            >
              <Link to={"#"}>Forgot password?</Link>
              <Link to={"/sign-up"}>Create new account</Link>
            </Stack>
          </form>
        </Stack>
      </Container>
    </Stack>
  );
};

export default SignIn;
