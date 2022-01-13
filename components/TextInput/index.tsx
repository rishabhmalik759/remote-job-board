import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { styled } from '@mui/material/styles'
import { InputLabel, TextField, OutlinedInput, InputAdornment } from '@mui/material';


const InputTextFieldContainer = styled('div')(({ theme }) => ({
  marginBottom: '15px',
  marginTop: '20px',
  color: '#000',
}))
const FormControl = styled('div')(({ theme }) => ({
  marginTop: '40px'
}))

interface TextInputProps {
  inputLabel: string;
  defaultValue?: string;
  variant: "filled" | "outlined" | "standard" ;
  required?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
  id: string;
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const {inputLabel, defaultValue, variant, required, value, id, setValue} = props;

  return (
    <InputTextFieldContainer>
      <InputLabel htmlFor={id}>
          {inputLabel}
        </InputLabel>
      <TextField
          required={required}
          id={id}
          defaultValue={defaultValue ? defaultValue: ""}
          variant={variant}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>setValue(e.currentTarget.value)}
          color={'secondary'}
          size="medium"
        />
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-amount" >Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value="00"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
    </InputTextFieldContainer>
  );
};
