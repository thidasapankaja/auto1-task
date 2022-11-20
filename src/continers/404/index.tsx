import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import {StyledLink} from "../../components/Base/styled";
import Logo from "../../components/Logo";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Logo />
      <Typography sx={{fontSize: "32px", fontWeight: "bold", margin: "12px"}}>
        404 - Not found
      </Typography>
      <Typography sx={{fontSize: "18px", margin: "12px"}}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Typography sx={{fontSize: "18px", margin: "12px"}}>
        You can always go back to the{" "}
        <StyledLink onClick={() => navigate("/")}>homepage</StyledLink>
      </Typography>
    </Box>
  );
};

export default NotFound;
