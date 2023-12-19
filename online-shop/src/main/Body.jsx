import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Body = (props) => {

  const items = props.item
 

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="194" image={items.image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h5" color="black" textAlign={"center"}>
        {items.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" textAlign={"center"}>
        {items.price}
        </Typography>
        <Typography variant="body2" color="black">
        {items.disc}
        </Typography>
      </CardContent>
      <Divider variant="middle" flexItem />
      <CardActions>
        <Stack flexDirection={"row"} width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <ShoppingCart/>
          <Button>add to cart</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Body;
