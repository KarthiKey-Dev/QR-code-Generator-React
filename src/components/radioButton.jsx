import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
  } from "@mui/material";
  import { Controller } from "react-hook-form";
 
  export const InputRadio = ({
    name,
    control,
      label,
      options
  }) => {
    const generateRadioOptions = () => {
      return options.map((singleOption) => (
        <FormControlLabel
          value={singleOption.value}
          label={singleOption.label}
          control={<Radio />}
        />
      ));
    };
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <Controller
          name={name}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <RadioGroup value={value} onChange={onChange}>
              {generateRadioOptions()}
            </RadioGroup>
          )}
        />
      </FormControl>
    );
  };