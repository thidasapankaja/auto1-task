import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect, {SelectChangeEvent} from "@mui/material/Select";
import Box from "@mui/system/Box";
import {StyledMenuItem} from "./styled";

type SelectProps = {
  onChange: (arg0: string) => void;
  label: string;
  options: Array<{label: string; value: string}>;
  value: string;
};

const Select = ({onChange, label, options, value}: SelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{marginTop: "16px"}}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <FormControl fullWidth>
        <NativeSelect
          inputProps={{
            id: `${label}-select`,
          }}
          value={value}
          onChange={handleChange}
        >
          {options?.map((item) => (
            <StyledMenuItem
              key={item.value}
              value={item.value}
              selected={value === item.value}
            >
              {item.label}
            </StyledMenuItem>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default Select;
