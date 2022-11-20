import Card from "@mui/material/Card";
import Box from "@mui/system/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Select from "../Base/Select";
import {StyledButton} from "../Base/styled";

type option = {
  label: string;
  value: string;
};

const sortOptions: option[] = [
  {label: "None", value: "none"},
  {label: "Ascending", value: "asc"},
  {label: "Descending", value: "desc"},
];

type LeftSidebarProps = {
  colorOptions: Array<option>;
  manufacturerOptions: Array<option>;
  onClickFilter: (arg0: any) => void;
  onSelectOption: (type: string, value: string) => void;
  selected: {
    color: string;
    manufacturer: string;
    sort: string;
  };
};

const LeftSidebar = ({
  colorOptions,
  manufacturerOptions,
  onClickFilter,
  onSelectOption,
  selected,
}: LeftSidebarProps) => {
  return (
    <Box sx={{display: "flex", justifyContent: "center", padding: "24px"}}>
      <Card sx={{width: "100%"}}>
        <CardContent sx={{display: "flex", flexDirection: "column"}}>
          <Select
            value={selected.color}
            onChange={(value) => onSelectOption("color", value)}
            options={colorOptions}
            label="Color"
          />
          <Select
            value={selected.manufacturer}
            onChange={(value) => onSelectOption("manufacturer", value)}
            options={manufacturerOptions}
            label="Manufacturer"
          />
          <Select
            value={selected.sort}
            onChange={(value) => onSelectOption("sort", value)}
            options={sortOptions}
            label="Sort"
          />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            margin: "0 8px 8px 0",
          }}
        >
          <StyledButton onClick={onClickFilter}>Filter</StyledButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default LeftSidebar;
