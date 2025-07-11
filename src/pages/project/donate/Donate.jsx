import * as React from "react";
import Input from "@mui/joy/Input";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function Donate() {
  const handleDonate = () => {
    window.location.href = process.env.REACT_APP_ROZAR_PAY;
  };
  return (
    <Box sx={{ padding: "1rem" }} className="mycontainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 320 }}
          image="https://res.cloudinary.com/dzmrolrxy/image/upload/v1721245632/arunnoida.jpg"
          title="Arun singh"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={"center"}
          >
            We welcome you
          </Typography>
          <Typography variant="body2" color="text.warning" textAlign={"center"}>
            Now you can donate just click Donate now button.
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: "center", width: "100%" }}>
          <Button
            size="small"
            variant="contained"
            sx={{ display: "block", margin: "auto" }}
            onClick={handleDonate}
          >
            Donate now
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
