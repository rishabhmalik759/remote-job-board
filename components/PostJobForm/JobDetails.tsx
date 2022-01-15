import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  TextField,
} from '@mui/material';
import * as React from 'react';
import EditableImage from './EditableImage';

export interface JobDetailsI {
  handleCheckBoxChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  companyLogo: string;
  setCompanyLogo: React.Dispatch<React.SetStateAction<string>>;
  jobDetailsState: {
    highlightWithCompanyColor: boolean;
    minAnnualSalary: number;
    maxAnnualSalary: number;
    jobDescription: string;
    howToApply: string;
    applyURL: string;
    applyEmail: string;
  };
}

const JobDetails: React.FC<JobDetailsI> = (props) => {
  const { companyLogo, setCompanyLogo, jobDetailsState, handleCheckBoxChange } = props;

  const handleFileUpload = (e: any) => {
    const selectedFile = e.target.files[0];
    const selectedFileURL = URL.createObjectURL(selectedFile);
    setCompanyLogo(selectedFileURL);
  };
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
      <div>
        <div>COMPANY LOGO (.JPG OR .PNG, SQUARE OR ROUND)</div>
        <InputLabel htmlFor="selectFile">Select File</InputLabel>
        <TextField
          type="file"
          inputProps={{ accept: 'image/*' }}
          id="selectFile"
          onChange={handleFileUpload}
        ></TextField>
        <Box sx={{ m: 2 }}>{companyLogo && <EditableImage src={companyLogo} />}</Box>
      </div>

      <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={jobDetailsState.highlightWithCompanyColor}
                onChange={handleCheckBoxChange}
                name="highlightWithCompanyColor"
              />
            }
            label="Highlight with your company brand color ($749)"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default JobDetails;
