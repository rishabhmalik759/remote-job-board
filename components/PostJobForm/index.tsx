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
    minAnnualSalary: 0,
    maxAnnualSalary: 0,
    jobDescription: '',
    howToApply: '',
    applyURL: '',
    applyEmail: '',
  });
  
  const [companyLogo, setCompanyLogo] = React.useState<string>('');

  const handleSetJobDetailsCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobDetailsState({ ...jobDetailsState, [e.target.name]: e.target.checked });
    console.log(jobDetailsState);
  };


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
      />
    </React.Fragment>
  );
};
