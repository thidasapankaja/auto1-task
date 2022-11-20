import {Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/system";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../../app/store";
import CarRow from "../../components/CarRow";
import LeftSidebar from "../../components/LeftSidebar";
import Pagination from "../../components/Pagination";
import {getCars, getColors, getManufacturers, resetSelectedCar, selectCars} from "./carsSlice";

const Cars = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {pagination, list, status, colors, manufacturers} =
    useSelector(selectCars);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetSelectedCar(null));
  }, [dispatch]);

  const [selected, setSelected] = useState({
    color: "all-col",
    manufacturer: "all-man",
    sort: "none",
  });

  const onSelectOption = (type: string, value: string) => {
    setSelected({...selected, [type]: value});
  };

  const fetchCars = (page: number, query: string) => getCars({page, query});

  const onFilterClick = (page?: number) => {
    let query = ``;
    if (selected.color !== "all-col") query += `&color=${selected.color}`;
    if (selected.manufacturer !== "all-man")
      query += `&manufacturer=${selected.manufacturer}`;
    if (selected.sort !== "none") query += `&sort=${selected.sort}`;
    dispatch(fetchCars(page || pagination.currentPage, query));
  };

  useEffect(() => {
    dispatch(fetchCars(1, ""));
    dispatch(getManufacturers());
    dispatch(getColors());
  }, [dispatch]);

  const onCarView = (stockNumber: string) => navigate(`/cars/${stockNumber}`);

  const numberOfCarsDisplaying = () => {
    if (pagination.currentPage < pagination.totalPageCount) return 10;
    else if (pagination.currentPage === pagination.totalPageCount)
      return pagination.totalCarsCount - (pagination.currentPage - 1) * 10;
    return (
      pagination.totalCarsCount % (pagination.currentPage * 10) ||
      pagination.currentPage * 10
    );
  };

  return (
    <Grid container sx={{display: "flex", paddingTop: "24px"}}>
      <Grid item xs={4}>
        <Box>
          <LeftSidebar
            colorOptions={colors}
            manufacturerOptions={manufacturers}
            onClickFilter={() => onFilterClick()}
            onSelectOption={onSelectOption}
            selected={selected}
          />
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Box>
          <Box sx={{paddingBottom: "16px"}}>
            <Typography sx={{fontSize: "24px", fontWeight: "bold"}}>
              Available cars
            </Typography>

            <Typography sx={{fontSize: "24px"}}>
              Showing {numberOfCarsDisplaying()} of {pagination.totalCarsCount}{" "}
              results
            </Typography>
          </Box>
          {list.map((item) => (
            <CarRow
              loading={status === "loading"}
              car={item}
              key={item?.stockNumber}
              onCarView={onCarView}
            />
          ))}
          <Pagination
            onClick={(page: number) => onFilterClick(page)}
            paginationMeta={pagination}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cars;
