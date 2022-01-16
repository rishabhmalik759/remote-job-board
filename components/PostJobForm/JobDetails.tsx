import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';
import * as React from 'react';
import EditableImage from './EditableImage';
import 'react-markdown-editor-lite/lib/index.css';
import MDEditor from './MDEditor';

export interface JobDetailsI {
  handleCheckBoxChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  companyLogo: string;
  setCompanyLogo: React.Dispatch<React.SetStateAction<string>>;
  handleJobDetailsStateChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => void;
  handleMDEditorJobDescriptionChange: any;
  handleMDEditorHowToApplyChange: any;
  handleFileUpload: any;
  salaryOptions: string[];
  jobDetailsState: {
    highlightWithCompanyColor: boolean;
    minAnnualSalary: string;
    maxAnnualSalary: string;
    jobDescription: {
      html: string;
      text: string;
    };
    howToApply: {
      html: string;
      text: string;
    };
    applyURL: string;
    applyEmail: string;
  };
}

const JobDetails: React.FC<JobDetailsI> = (props) => {
  const {
    companyLogo,
    jobDetailsState,
    handleCheckBoxChange,
    handleJobDetailsStateChange,
    salaryOptions,
    handleFileUpload,
    handleMDEditorJobDescriptionChange,
    handleMDEditorHowToApplyChange,
  } = props;

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
        <FormLabel component="legend">COMPANY LOGO (.JPG OR .PNG, SQUARE OR ROUND)</FormLabel>
        <Box sx={{ m: 2 }}>
          <EditableImage handleFileUpload={handleFileUpload} src={companyLogo} />
        </Box>
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
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel htmlFor="minAnnualSalary">Minimum Annual Salary</InputLabel>
        <Select
          labelId="minAnnualSalary"
          id="minAnnualSalary"
          label="Select a minimum Annual Salary"
          name="minAnnualSalary"
          value={jobDetailsState.minAnnualSalary ? jobDetailsState.minAnnualSalary : '0'}
          onChange={handleJobDetailsStateChange}
        >
          <MenuItem value={'default'}>Select a minimum Annual Salary</MenuItem>
          {salaryOptions &&
            salaryOptions.map((salaryOption) => (
              <MenuItem key={salaryOption} value={salaryOption}>
                {'USD ' + salaryOption + ' per year'}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>
          It's illegal to not share salary range on job posts since 2021. Posts without salary will automatically show
          an estimate of salary based on similar jobs. Remote job postings are legally required to show a salary
          compensation range in many U.S. states and countries. Google does NOT index jobs without salary data. If it's
          a short-term gig, use the annual equivalent. For example, if it's a 2-week project for $2,000, the annual
          equivalent would be $2,000 / 2 weeks * 52 weeks = $52,000. Please use USD equivalent. We don't have currency
          built-in yet and we'd like to use this salary data to show salary trends in remote work. Remote OK is a
          supporter of #OpenSalaries.
        </FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, width: '100%' }}>
        <InputLabel htmlFor="maxAnnualSalary">Maximum Annual Salary</InputLabel>
        <Select
          labelId="maxAnnualSalary"
          id="maxAnnualSalary"
          label="Maximum Annual Salary"
          name="maxAnnualSalary"
          value={jobDetailsState.maxAnnualSalary ? jobDetailsState.maxAnnualSalary : '0'}
          onChange={handleJobDetailsStateChange}
        >
          <MenuItem value={'default'}>Select a Maximum Annual Salary</MenuItem>
          {salaryOptions &&
            salaryOptions.map((salaryOption) => (
              <MenuItem key={salaryOption} value={salaryOption}>
                {'USD ' + salaryOption + ' per year'}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <Box sx={{ m: 2 }}>
      <FormLabel>Job Description</FormLabel>
        <MDEditor handleEditorChange={handleMDEditorJobDescriptionChange} state={jobDetailsState.jobDescription} />
      </Box>
      <Box sx={{ m: 2 }}>
        <FormLabel>How to apply?</FormLabel>
        <MDEditor handleEditorChange={handleMDEditorHowToApplyChange} state={jobDetailsState.howToApply} />
      </Box>
      <FormControl sx={{ width: '100%', m: 1 }}>
        <TextField
          id="applyURL"
          name="applyURL"
          label="Apply URL"
          helperText='Apply URLs with a form an applicant can fill out generally receive a lot more applicants than having people apply by email (below). A good platform to have applicants apply on is Lever (not affiliated).'
          value={jobDetailsState.applyURL}
          onChange={handleJobDetailsStateChange}
        />
      </FormControl>
      <FormControl sx={{ width: '100%', m: 1 }}>
        <TextField
          id="applyEmail"
          name="applyEmail"
          label="Apply Email"
          helperText='This email is public, the Apply button links to it if you do not supply an Apply URL above.'
          value={jobDetailsState.applyEmail}
          onChange={handleJobDetailsStateChange}
        />
      </FormControl>
    </Box>
  );
};

export default JobDetails;
