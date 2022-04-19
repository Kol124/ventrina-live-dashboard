import React from "react";
// @mui
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material/styles";

interface SelectProps {
  sx?: SxProps;
  options: {
    value: string;
    label: string;
  }[];
}

export default function SelectField(props: SelectProps) {
  const [shop, setShop] = React.useState(props.options[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShop(event.target.value);
  };

  return (
    <TextField
      variant="outlined"
      name="shop"
      value={shop}
      select
      fullWidth
      onChange={handleChange}
      sx={{
        "& .MuiInputBase-input": {
          fontSize: 14,
        },
        "& .MuiOutlinedInput-root": {
          height: 50,
          width: 215,
          // '& label.Mui-focused': {
          //   color: 'black',
          // },
        },
        "& input + fieldset": {
          border: "none",
        },
        ...props.sx,
      }}
    >
      {props.options?.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
