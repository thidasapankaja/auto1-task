import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {capitalizeFirstLetter} from "../../utils/helpers";

import {CarModel} from "../../continers/Cars/models";
import {StyledLink} from "../Base/styled";

interface CarInterface {
  loading?: boolean;
  car: CarModel;
  onCarView: (stockNumber: string) => void;
}

const Car = ({loading, car, onCarView}: CarInterface) => {
  return (
    <Card
      sx={{
        border: 2,
        borderColor: "#EDEDED",
        height: "130px",
        margin: "12px 0",
        boxShadow: "none",
      }}
    >
      <Box sx={{display: "flex"}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "120px",
            margin: "0 12px",
          }}
        >
          {loading ? (
            <Box
              sx={{width: "100px", height: "80px", background: "#ededed"}}
            ></Box>
          ) : (
            <CardMedia
              component="img"
              height="80"
              image={car.pictureUrl}
              alt={car.modelName}
              sx={{paddingTop: "10px"}}
            />
          )}
        </Box>
        <Box>
          <CardContent>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                margin: "8px",
              }}
            >
              {car.modelName}
            </Typography>
            <Typography
              style={{
                fontWeight: "regular",
                fontSize: "14px",
                margin: "8px",
              }}
            >
              Stock # {car.stockNumber} - {car?.mileage?.number}{" "}
              {car?.mileage?.unit?.toUpperCase()} -{" "}
              {capitalizeFirstLetter(car.fuelType)} -{" "}
              {capitalizeFirstLetter(car.color)}
            </Typography>
            <StyledLink onClick={() => onCarView(car.stockNumber)}>
              View details
            </StyledLink>
          </CardContent>
        </Box>
      </Box>
    </Card>
  );
};

export default Car;
