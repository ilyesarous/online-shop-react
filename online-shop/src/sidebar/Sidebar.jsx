import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Drawer,
  Input,
  InputBase,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { sideBarAction } from "./SideBarSlice";
import pic from "../tools/images/pic.png";
import { useRef } from "react";
import { useState } from "react";
// import { request } from "../tools/apis/axios_helper";

export default function Sidebar() {
  const isOpen = useSelector((state) => state.sideBar.isOpen);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  // const [image, setImage] = useState("");
  const [imageData, setImageData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const discriptionHandler = (e) => {
    setDiscription(e.target.value);
  };

  const rows = [
    { label: "Item's Name :", object: <Input onChange={nameHandler} /> },
    { label: "Item's Price :", object: <Input onChange={priceHandler} /> },
    {
      label: "Item's Discription :",
      object: <Input onChange={discriptionHandler} />,
    },
  ];

  const toggleDrawer = () => {
    dispatch(sideBarAction.setIsOpen());
  };

  const uploadImage = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    let file = e.target.files[0];
    const imgData = new FormData();
    imgData.append("imageData", file);
    setImageData(imgData);
    setImagePreview(URL.createObjectURL(file));
  };

  const createItemHandler = () => {
    const item = {
      image: imagePreview,
      name: name,
      price: price,
      description: discription,
    };
    // console.log("imageData: ", imageData);
    // imageData.append("name", name);
    // imageData.append("price", price);
    // imageData.append("product", item);
    // request("POST", "/items", imageData)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    dispatch(sideBarAction.setItem(item));

    dispatch(sideBarAction.setIsOpen());
  };

  return (
    <Drawer open={isOpen} onClose={toggleDrawer}>
      <Box>
        <List>
          <ListItem>
            <Stack width={"100%"} alignItems={"center"} spacing={2}>
              {imageData ? (
                <img
                  height={200}
                  width={200}
                  src={imagePreview}
                  alt="put your item"
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                <img height={200} width={200} src={pic} alt="put your item" />
              )}
              <InputBase
                type="file"
                // name="imageData"
                inputRef={inputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <Button onClick={uploadImage}>Add an item</Button>
            </Stack>
          </ListItem>
        </List>
        <Divider flexItem />
        <TableContainer>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.label}>
                <TableCell>{row.label}</TableCell>
                <TableCell>{row.object}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <Stack justifyContent={"right"} flexDirection={"row"} pt={5} pr={3}>
            <Button variant="outlined" onClick={createItemHandler}>
              Add
            </Button>
          </Stack>
        </TableContainer>
      </Box>
    </Drawer>
  );
}
