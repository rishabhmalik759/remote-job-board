import * as React from 'react';
import { Box, Button, SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';
import GeneralInfo, { IGeneralInfo } from './GeneralInfo';
import JobDetails, { IJobDetails } from './JobDetails';
import {
  initialGeneralInfoState,
  initialInvoiceDetailsState,
  initialJobDetailsState,
  salaryOptions,
} from './InitialStates';
import InvoiceDetails, { IInvoiceDetails } from './InvoiceDetails';

export const PostJobForm: React.FC = () => {
  const [generalInfoState, setgeneralInfoState] =
    React.useState<IGeneralInfo['generalInfoState']>(initialGeneralInfoState);

  const [jobDetailsState, setJobDetailsState] = React.useState<IJobDetails['jobDetailsState']>(initialJobDetailsState);

  const [invoiceDetailsState, setInvoiceDetailsState] =
    React.useState<IInvoiceDetails['invoiceDetailsState']>(initialInvoiceDetailsState);

  const handleInvoiceDetailsStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => {
    setInvoiceDetailsState({ ...invoiceDetailsState, [e.target.name]: e.target.value });
  };

  const handleInvoiceDetailsCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setInvoiceDetailsState({ ...invoiceDetailsState, [e.target.name]: e.target.checked });
  };

  const handleSetJobDetailsCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobDetailsState({ ...jobDetailsState, [e.target.name]: e.target.checked });
    console.log(jobDetailsState);
  };

  const handleJobDetailsStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => {
    setJobDetailsState({ ...jobDetailsState, [e.target.name]: e.target.value });
    console.log(jobDetailsState);
  };

  const handleFileUpload = (e: any) => {
    const selectedFile = e.target.files[0];
    const selectedFileURL = URL.createObjectURL(selectedFile);
    setJobDetailsState({ ...jobDetailsState, ['companyLogo']: selectedFileURL });
    console.log(jobDetailsState);
  };

  function handleMDEditorJobDescriptionChange(input: any) {
    setJobDetailsState({ ...jobDetailsState, jobDescription: input });
    console.log('handleEditorChange', input);
  }

  function handleMDEditorHowToApplyChange(input: any) {
    setJobDetailsState({ ...jobDetailsState, howToApply: input });
    console.log(jobDetailsState);
  }

  const handlegeneralInfoStateChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => {
    setgeneralInfoState({ ...generalInfoState, [e.target.name]: e.target.value });
  };

  const handlegeneralInfoStateCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setgeneralInfoState({ ...generalInfoState, [e.target.name]: e.target.checked });
    console.log(generalInfoState);
  };

  const postJob = () => {
    const post = {
      generalInfoState,
      invoiceDetailsState,
      jobDetailsState,
    };
    console.log(JSON.stringify(post));
  };

  return (
    <React.Fragment>
      <GeneralInfo
        handleChange={handlegeneralInfoStateChange}
        handleCheckBoxChange={handlegeneralInfoStateCheckBoxChange}
        generalInfoState={generalInfoState}
      />
      <JobDetails
        handleCheckBoxChange={handleSetJobDetailsCheckboxChange}
        jobDetailsState={jobDetailsState}
        handleJobDetailsStateChange={handleJobDetailsStateChange}
        salaryOptions={salaryOptions}
        handleFileUpload={handleFileUpload}
        handleMDEditorJobDescriptionChange={handleMDEditorJobDescriptionChange}
        handleMDEditorHowToApplyChange={handleMDEditorHowToApplyChange}
      />
      <InvoiceDetails
        handleChange={handleInvoiceDetailsStateChange}
        handleCheckboxChange={handleInvoiceDetailsCheckboxChange}
        invoiceDetailsState={invoiceDetailsState}
      />
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
        <Button variant="contained" onClick={postJob}>
          Post Job
        </Button>
      </Box>
    </React.Fragment>
  );
};
