import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Box} from "@mui/system";
import {AppDispatch} from "../../app/store";
import {getCar, selectCars} from "../Cars/carsSlice";
import {Typography} from "@mui/material";
import Favourite from "../../components/Favourite";
import {capitalizeFirstLetter} from "../../utils/helpers";

type URLParams = {
  stockNumber: string;
};

const Car = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {selectedCar} = useSelector(selectCars);

  const [isFavourite, setIsFavourite] = useState(false);

  const {stockNumber} = useParams<URLParams>();

  useEffect(() => {
    dispatch(getCar(Number(stockNumber)));
  }, [dispatch, stockNumber]);

  useEffect(() => {
    const handleStorage = () => {
      if (selectedCar?.stockNumber) {
        const favouriteCars =
          JSON.parse(localStorage.getItem("favourites") || "{}") || {};
          setIsFavourite(!!favouriteCars[selectedCar?.stockNumber])
        return favouriteCars[selectedCar?.stockNumber];
      }
    };
    window.addEventListener("storage", handleStorage());
    return () => window.removeEventListener("storage", handleStorage());
  }, [selectedCar?.stockNumber]);

  const setFavourite = async () => {
    if (selectedCar?.stockNumber) {
      const favouriteCars =
        JSON.parse(localStorage.getItem("favourites") || "{}") || {};

      if (isFavourite) {
        setIsFavourite(false)
        delete favouriteCars[selectedCar.stockNumber];
      } else {
        setIsFavourite(true)
        favouriteCars[selectedCar.stockNumber] = selectedCar;
      }
      localStorage.setItem("favourites", JSON.stringify(favouriteCars));
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <Box>
      <Box sx={{minHeight: "300px", background: "#ededed"}}></Box>
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <Box
          sx={{
            width: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{marginRight: "12px"}}>
            <Typography
              sx={{fontSize: "32px", fontWeight: "bold", padding: "24px 0"}}
            >
              {selectedCar?.modelName}
            </Typography>
            <Typography
              style={{
                fontWeight: "regular",
                fontSize: "24px",
                padding: "8px 0",
              }}
            >
              Stock # {selectedCar?.stockNumber} -{" "}
              {selectedCar?.mileage?.number}{" "}
              {selectedCar?.mileage?.unit?.toUpperCase()} -{" "}
              {selectedCar?.fuelType} -{" "}
              {capitalizeFirstLetter(selectedCar?.color || "")}
            </Typography>
            <Typography
              sx={{fontWeight: "400", fontSize: "14px", padding: "14px 0"}}
            >
              This car is currently available and can be delivered as soon as
              tomorrow morning. Please be aware that delivery times shown in
              this page are not definite and may change due to bad weather
              conditions.
            </Typography>
          </Box>
          <Favourite
            isFavourite={isFavourite}
            disabled={!selectedCar?.stockNumber}
            onClick={setFavourite}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Car;
