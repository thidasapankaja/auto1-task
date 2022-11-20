import styled from "@mui/system/styled";
import MenuItem from "@mui/material/MenuItem";

type MenuItemProps = {
  selected: boolean;
};

const StyledMenuItem = styled(MenuItem)<MenuItemProps>(({selected}) => ({
  backgroundColor: selected && "#EA7F28 !important",
}));

export {StyledMenuItem};
