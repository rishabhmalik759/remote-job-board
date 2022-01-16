import { Box, Checkbox, FormControl, FormControlLabel, SelectChangeEvent, TextField } from '@mui/material';
import * as React from 'react';

export interface IInvoiceDetails {
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => void;
  handleCheckboxChange: ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void) | undefined;
  invoiceDetailsState: {
    companyInvoiceEmail: string;
    emailListToSendInvoice: string;
    invoiceAddress: string;
    invoiceNotesPurchaseOrder: string;
    payLater: boolean;
  };
}

const InvoiceDetails: React.FC<IInvoiceDetails> = (props) => {
  const {handleChange, invoiceDetailsState, handleCheckboxChange} = props;
  return (
    <Box
      sx={{
        width: 600,
        backgroundColor: 'background.paper',
        borderColor: 'primary.main',
        borderRadius: 5,
        marginTop: 8,
        marginBottom: 20,
        p: 2,
        boxShadow: ' rgba(0, 0, 0, 0.1) 0px 10px 50px',
        marginLeft: 10,
      }}
    >
      <FormControl sx={{ width: '100%', m: 1 }}>
        <TextField
          id="companyInvoiceEmail"
          name="companyInvoiceEmail"
          label="Company Invoice Email"
            value={invoiceDetailsState.companyInvoiceEmail}
            onChange={handleChange}
          helperText="Make sure this email is accessible by you! We use this to send the invoice and edit link. We can not and do not manually resend it! If you use your company domain (same as company name), we will show a [ Verified ] tag on your job post."
        />
      </FormControl>
      <FormControl sx={{ width: '100%', m: 1 }}>
        <TextField
          id="emailListToSendInvoice"
          name="emailListToSendInvoice"
          label="Email List To Send Invoice"
            value={invoiceDetailsState.emailListToSendInvoice}
            onChange={handleChange}
          helperText="We send a copy of the invoice and edit link to here too. You can write your finance department or accountant expenses email here so they get a copy of the invoice for your bookkeeping."
        />
      </FormControl>
      <FormControl sx={{ width: '100%', m: 1 }}>
        <TextField
          id="invoiceAddress"
          name="invoiceAddress"
          label="Invoice Address"
            value={invoiceDetailsState.invoiceAddress}
            onChange={handleChange}
          helperText="Specify your company address here and we'll put it on your invoice for your bookkeeping."
        />
      </FormControl>
      <FormControl sx={{ width: '100%', m: 1 }}>
        <TextField
          id="invoiceNotesPurchaseOrder"
          name="invoiceNotesPurchaseOrder"
          label="Invoice Notes / Purchase Order"
            value={invoiceDetailsState.invoiceNotesPurchaseOrder}
            onChange={handleChange}
          helperText="Not required. Add notes here that you'd like to see on the invoice/receipt such as a Purchase Order number or any other internal notes you need for reference. You can add or edit this later."
        />
      </FormControl>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={invoiceDetailsState.payLater}
              onChange={handleCheckboxChange}
              name="payLater"
            />
          }
          label="Pay Later"
        />
      </FormControl>
    </Box>
  );
};

export default InvoiceDetails;
