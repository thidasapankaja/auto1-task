import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="img"
      sx={{
        maxHeight: 50,
        maxWidth: 250,
        ":hover": {
          cursor: "pointer",
        },
      }}
      alt="auto1 logo"
      src={logo}
      onClick={() => navigate("/")}
    />
  );
};

export default Logo;
