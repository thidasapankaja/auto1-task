import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Box} from "@mui/system";
import {AppDispatch} from "../../app/store";
import {getCar, selectCar} from "./carSlice";
import {Typography} from "@mui/material";
import Favourite from "../../components/Favourite";
import {capitalizeFirstLetter} from "../../utils/helpers";

type URLParams = {
  stockNumber: string;
};

const Car = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {car, status} = useSelector(selectCar);

  const [isFavourite, setIsFavourite] = useState(false);

  const {stockNumber} = useParams<URLParams>();

  useEffect(() => {
    dispatch(getCar(Number(stockNumber)));
  }, [dispatch, stockNumber]);

  useEffect(() => {
    const handleStorage = () => {
      if (car?.stockNumber) {
        const favouriteCars =
          JSON.parse(localStorage.getItem("favourites") || "{}") || {};
        setIsFavourite(!!favouriteCars[car?.stockNumber]);
        return favouriteCars[car?.stockNumber];
      }
    };
    window.addEventListener("storage", handleStorage());
    return () => window.removeEventListener("storage", handleStorage());
  }, [car?.stockNumber]);

  const setFavourite = async () => {
    if (car?.stockNumber) {
      const favouriteCars =
        JSON.parse(localStorage.getItem("favourites") || "{}") || {};

      if (isFavourite) {
        setIsFavourite(false);
        delete favouriteCars[car.stockNumber];
      } else {
        setIsFavourite(true);
        favouriteCars[car.stockNumber] = car;
      }
      localStorage.setItem("favourites", JSON.stringify(favouriteCars));
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <Box>
      <Box sx={{minHeight: "300px", background: "#ededed"}}></Box>\
      {status !== 'loading' && (
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
                {car?.modelName}
              </Typography>
              <Typography
                style={{
                  fontWeight: "regular",
                  fontSize: "24px",
                  padding: "8px 0",
                }}
              >
                Stock # {car?.stockNumber} - {car?.mileage?.number}{" "}
                {car?.mileage?.unit?.toUpperCase()} - {car?.fuelType} -{" "}
                {capitalizeFirstLetter(car?.color || "")}
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
              disabled={!car?.stockNumber}
              onClick={setFavourite}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Car;
