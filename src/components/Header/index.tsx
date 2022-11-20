import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "../Logo";
import {capitalizeFirstLetter} from "../../utils/helpers";

const navItems = ["Purchase", "My Orders", "Sell"];

const HeaderBar = () => {
  return (
    <Box
      sx={{
        borderBottom: 2,
        borderColor: "#EDEDED",
        minHeight: "80px",
        display: "flex",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyItems: "space-between",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Logo />
        </Box>
        <Box sx={{display: {xs: "none", sm: "block"}}}>
          {navItems.map((item) => (
            <Button key={item} sx={{color: "#4A4A4A"}}>
              {capitalizeFirstLetter(item)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </Box>
  );
};

export default HeaderBar;
