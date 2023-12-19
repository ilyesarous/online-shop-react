import { Button, Fab, Stack } from "@mui/material";
import Navbar from "./Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { sideBarAction } from "../sidebar/SideBarSlice";
import Sidebar from "../sidebar/Sidebar";
import Body from "./Body";
import { Add } from "@mui/icons-material";

const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const items = useSelector((state) => state.sideBar.item);

  const dispatch = useDispatch();

  const openSideBar = () => {
    dispatch(sideBarAction.setIsOpen());
  };

  return (
    <Stack>
      <Navbar />
      <Stack paddingTop="5%" paddingLeft="10%" paddingRight="10%">
        {items.length !== 0 ? (
          <Carousel centerMode={true} responsive={responsive}>
            {items.map((item) => {
              return (
                <div key={item.name}>
                  {" "}
                  <Body item={item} />{" "}
                </div>
              );
            })}
          </Carousel>
        ) : (
          <Button onClick={openSideBar}>Add items</Button>
        )}
      </Stack>
      <Sidebar />
      <Stack position={"absolute"} bottom={16} right={16}>
        {items.length!==0 && (
            <Fab color="primary" aria-label="add" onClick={openSideBar}>
              <Add color="secondary" />
            </Fab>
          )}
      </Stack>
    </Stack>
  );
};

export default Home;
