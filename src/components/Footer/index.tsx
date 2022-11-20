import {Typography} from "@mui/material";
import {StyledBox} from "./styes";
const date = new Date();

const Footer = () => (
  <StyledBox
    sx={{
      borderTop: 2,
      borderColor: "#EDEDED",
    }}
  >
    <Typography>© AUTO1 Group {date.getFullYear()}</Typography>
  </StyledBox>
);

export default Footer;
