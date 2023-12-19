import { IconButton, InputBase, Stack, Toolbar, alpha, styled } from "@mui/material";

export const Container = styled(Stack)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  spacing: 10,
  direction: "column",
  boxShadow: "1px 1px 20px grey",
  // border: "1px solid grey",
  padding: "5%",
  borderRadius: "14px",
});

export const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  padding:20,
  display: "flex",
  backgroundColor: theme.palette.secondary.main,
  justifyContent: "space-between",
}));

export const SearchBar = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  width:"50%",
  alignItems: "center",
  border: "solid 1px #F29727",
  borderRadius: "14px",
  backgroundColor: alpha(theme.palette.common.white, 0.6),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 1),
  },
}));

export const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  
  padding: theme.spacing(1,1),
  height:"100%"
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  padding: theme.spacing(1, 0, 1, 2),
}));

