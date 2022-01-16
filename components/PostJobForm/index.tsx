import { SelectChangeEvent } from '@mui/material';
import * as React from 'react';
import { ChangeEvent } from 'react';
import GeneralInfo from './GeneralInfo';
import JobDetails, { JobDetailsI } from './JobDetails';

export const PostJobForm: React.FC = () => {
  const [generalInfoData, setGeneralInfoData] = React.useState({
    companyName: '',
    position: '',
    positionType: '',
    primaryTag: '',
    jobTags: '',
    jobLocation: '',
    showCompanyLogo: false,
    emailToCandidates: false,
    getMatches: false,
    highlightPost: false,
    stickForDuration: '',
  });

  const [jobDetailsState, setJobDetailsState] = React.useState<JobDetailsI['jobDetailsState']>({
    highlightWithCompanyColor: false,
    minAnnualSalary: '0',
    maxAnnualSalary: '0',
    jobDescription: {
      html: '',
      text: '',
    },
    howToApply: {
      html: '',
      text: '',
    },
    applyURL: '',
    applyEmail: '',
  });

  const salaryOptions = [
    '0',
    '10000',
    '20000',
    '30000',
    '40000',
    '50000',
    '60000',
    '70000',
    '80000',
    '90000',
    '100000',
    '110000',
    '120000',
    '130000',
    '140000',
    '150000',
    '160000',
    '170000',
    '180000',
    '190000',
    '200000',
    '210000',
    '220000',
    '230000',
    '240000',
    '250000',
    '260000',
    '270000',
    '280000',
    '290000',
    '300000',
    '310000',
    '320000',
    '330000',
    '340000',
    '350000',
    '360000',
    '370000',
    '380000',
    '390000',
    '400000',
  ];

  const [companyLogo, setCompanyLogo] = React.useState<string>('');

  const handleSetJobDetailsCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobDetailsState({ ...jobDetailsState, [e.target.name]: e.target.checked });
    console.log(jobDetailsState);
  };

  const handleJobDetailsStateChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => {
    setJobDetailsState({ ...jobDetailsState, [e.target.name]: e.target.value });
    console.log(jobDetailsState)
  };

  const handleFileUpload = (e: any) => {
    const selectedFile = e.target.files[0];
    const selectedFileURL = URL.createObjectURL(selectedFile);
    setCompanyLogo(selectedFileURL);
  };

  function handleMDEditorJobDescriptionChange(input: any) {
    setJobDetailsState({ ...jobDetailsState, jobDescription: input});
    console.log('handleEditorChange', input);
  }

  function handleMDEditorHowToApplyChange(input: any) {
    setJobDetailsState({ ...jobDetailsState, howToApply: input});
    console.log(jobDetailsState);
  }

  const handleGeneralInfoDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>,
  ) => {
    setGeneralInfoData({ ...generalInfoData, [e.target.name]: e.target.value });
    console.log(generalInfoData, companyLogo);
  };

  const handleGeneralInfoDataCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGeneralInfoData({ ...generalInfoData, [e.target.name]: e.target.checked });
    console.log(generalInfoData);
  };

  return (
    <React.Fragment>
      <GeneralInfo
        handleChange={handleGeneralInfoDataChange}
        handleCheckBoxChange={handleGeneralInfoDataCheckBoxChange}
        generalInfoData={generalInfoData}
      />
      <JobDetails
        handleCheckBoxChange={handleSetJobDetailsCheckboxChange}
        jobDetailsState={jobDetailsState}
        companyLogo={companyLogo}
        setCompanyLogo={setCompanyLogo}
        handleJobDetailsStateChange={handleJobDetailsStateChange}
        salaryOptions={salaryOptions}
        handleFileUpload={handleFileUpload}
        handleMDEditorJobDescriptionChange={handleMDEditorJobDescriptionChange}
        handleMDEditorHowToApplyChange={handleMDEditorHowToApplyChange}
      />
    </React.Fragment>
  );
};
