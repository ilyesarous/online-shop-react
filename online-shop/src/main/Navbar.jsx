import { Avatar, Badge, Divider, IconButton, Stack } from "@mui/material";
import logo from "../tools/images/logo.png";
import {
  SearchIconWrapper,
  StyledInputBase,
  StyledToolBar,
  SearchBar,
} from "../tools/styles/Styles";
import { MailOutline, Search, ShoppingBagOutlined } from "@mui/icons-material";

const Navbar = () => {
  return (
    <StyledToolBar>
      <img src={logo} alt="logo" height={40} />
      <SearchBar>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <Divider orientation="vertical" variant="middle" flexItem />
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
      </SearchBar>
      <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingBagOutlined/>
          </Badge>
        </IconButton>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailOutline/>
          </Badge>
        </IconButton>
        <IconButton edge="end">
          <Avatar sx={{ bgcolor: "#F29727" }}>N</Avatar>
        </IconButton>
      </Stack>
    </StyledToolBar>
  );
}

export default Navbar