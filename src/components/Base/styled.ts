import {styled} from "@mui/system";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#EA7F28",
  "&:hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
});

const StyledButton = styled(Button)({
  color: "#ededed",
  backgroundColor: "#EA7F28",
  "&:visited": {
    backgroundColor: "#D37324",
  },
  "&:hover": {
    backgroundColor: "#EDEDED",
    color: "#EA7F28",
  },
  width: "128px",
  height: "32px",
  boxShadow: "none",
});

export {StyledLink, StyledButton};
