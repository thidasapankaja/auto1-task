import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {StyledButton} from "../Base/styled";

type FavouriteProps = {
  onClick?: () => void;
  disabled: boolean;
  isFavourite: boolean;
};

const Favourite = ({onClick, disabled, isFavourite}: FavouriteProps) => {
  return (
    <Card sx={{minWidth: "300px", padding: "12px", marginLeft: "12px"}}>
      <CardContent>
        <Typography sx={{fontSize: "14px"}}>
          If you like this car, click the button and save it in your collection
          of favourite items
        </Typography>
      </CardContent>
      <Box sx={{display: "flex", justifyContent: "flex-end"}}>
        <StyledButton disabled={disabled} variant="contained" onClick={onClick}>
          {isFavourite ? 'Unsave' : 'Save'}
        </StyledButton>
      </Box>
    </Card>
  );
};

export default Favourite;
