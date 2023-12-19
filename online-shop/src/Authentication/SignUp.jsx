import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthAction } from "../authStore/AuthSlice";
import { Container } from "../tools/styles/Styles";
import logo from "../tools/images/logo.png";
import { request } from "../tools/apis/axios_helper";

const SignUp = () => {
  const [isCreated, setIsCreated] = useState(false);
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifPassword, setVerifPassword] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const getfName = (e) => {
    setFName(e.target.value);
  };
  const getlName = (e) => {
    setLName(e.target.value);
  };
  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getVerifiPass = (e) => {
    setVerifPassword(e.target.value);
  };

  const handleClose = () => {
    setIsCreated(false);
    navigator("/");
  };

  const createUser = (e) => {
    e.preventDefault();
    if (verifPassword === password) {
      const user = {
        firstName: fName,
        lastName: lName,
        email: email,
        password: password,
      };

      request("POST", "/auth/register", {
        firstName: fName,
        lastName: lName,
        email: email,
        password: password,
      })
        .then((res) => {
          setIsCreated(true);
          console.log(res);
          dispatch(AuthAction.getUser(user));
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Stack alignItems={"center"} sx={{ mt: "5%" }}>
      <Container width={"35%"}>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          spacing={3}
          pb={3}
        >
          <img src={logo} height={50} alt="logo" />
          <Typography variant="h5">Join the future of the shopping</Typography>
        </Stack>

        <Stack width={"70%"}>
          <form onSubmit={createUser}>
            <TextField
              margin="normal"
              required
              type="text"
              label="First Name"
              onChange={getfName}
              autoFocus
              fullWidth
            />
            <TextField
              margin="normal"
              required
              type="text"
              label="Last Name"
              onChange={getlName}
              autoFocus
              fullWidth
            />
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
            <TextField
              margin="normal"
              required
              type="password"
              label="Reenter your password"
              onChange={getVerifiPass}
              autoFocus
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: "3%" }}
            >
              Sign up
            </Button>
            <Stack sx={{ mt: "3%" }}>
              <Link to={"/"}>Already have an account?</Link>
            </Stack>
          </form>
        </Stack>
      </Container>
      <Dialog
        open={isCreated}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Alert!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            User Created Successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};

export default SignUp;
