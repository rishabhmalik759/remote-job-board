import {
  FormControl,
  FormLabel,
  InputLabel,
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Layout } from 'components/Layout';
import Head from 'next/head';
import * as React from 'react';
import { ChangeEvent, ChangeEventHandler } from 'react';

const PostJob: React.FC = () => {
  const [postJobFormData, setPostJobFormData] = React.useState({
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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    setPostJobFormData({ ...postJobFormData, [e.target.name]: e.target.value });
    console.log(postJobFormData);
  };

  const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostJobFormData({ ...postJobFormData, [e.target.name]: e.target.checked });
    console.log(postJobFormData);
  };

  return (
    <Layout>
      <div>
        <div></div>
        <Head>
          <title>Nitro</title>
        </Head>
        <div>
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
                id="companyName"
                name="companyName"
                label="Company Name"
                value={postJobFormData.companyName}
                onChange={handleChange}
                helperText="Your company's brand/trade name: without Inc., Ltd., B.V., Pte., etc."
              />
            </FormControl>
            <FormControl sx={{ width: '100%', m: 1 }}>
              <TextField
                id="position"
                name="position"
                label="Position"
                helperText=' Please specify as single job position like "Marketing Manager" or "Node JS Developer", not a sentence like "Looking for PM / Biz Dev / Manager". We know your job is important but please DO NOT WRITE IN FULL CAPS. If posting multiple roles, please create multiple job posts. A job post is limited to a single job. We only allow real jobs, absolutely no MLM-type courses "learn how to work online" please.'
                value={postJobFormData.position}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 250 }}>
              <InputLabel htmlFor="positionType">Position Type</InputLabel>
              <Select
                labelId="positionType"
                id="positionType"
                label="Position Type"
                name="positionType"
                value={postJobFormData.positionType}
                onChange={handleChange}
              >
                <MenuItem value={''}>Select a Job Type</MenuItem>
                <MenuItem value={'Full Time'}>Full Time</MenuItem>
                <MenuItem value={'Part Time'}>Part Time</MenuItem>
                <MenuItem value={'Contract'}>Contract</MenuItem>
                <MenuItem value={'Temporary'}>Temporary</MenuItem>
                <MenuItem value={'Internship'}>Internship</MenuItem>
                <MenuItem value={'Volunteer'}>Volunteer</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: '100%' }}>
              <InputLabel htmlFor="primaryTag">Primary Tag</InputLabel>
              <Select
                labelId="primaryTag"
                id="primaryTag"
                label="Primary Tag"
                name="primaryTag"
                value={postJobFormData.primaryTag}
                onChange={handleChange}
              >
                <MenuItem value={''}>Select a Primary Tag</MenuItem>
                <MenuItem value={'Software Development'}>Software Development</MenuItem>
                <MenuItem value={'Customer Support'}>Customer Support</MenuItem>
                <MenuItem value={'Sales'}>Sales</MenuItem>
                <MenuItem value={'Marketing'}>Marketing</MenuItem>
                <MenuItem value={'Design'}>Design</MenuItem>
                <MenuItem value={'Frontend'}>Frontend</MenuItem>
                <MenuItem value={'Backend'}>Backend</MenuItem>
                <MenuItem value={'Legal'}>Legal</MenuItem>
                <MenuItem value={'Testing'}>Testing</MenuItem>
                <MenuItem value={'Quality Assurance'}>Quality Assurance</MenuItem>
                <MenuItem value={'Non Tech'}>Non Tech</MenuItem>
                <MenuItem value={'Other'}>Other</MenuItem>
              </Select>
              <FormHelperText>
                {' '}
                Short tags are preferred. Use tags like industry and tech stack, and separate multiple tags by comma.
                The first 3 or 4 tags are shown on the site, the other tags aren't but the job will be shown on each tag
                specific page (like /remote-react-jobs). We also generate tags automatically after you post/edit to
                supplement.
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ width: '100%', m: 1 }}>
              <TextField
                id="jobTags"
                name="jobTags"
                label="TAGS SEPARATED BY COMMA"
                helperText={` Short tags are preferred. Use tags like industry and tech stack, and separate multiple tags by comma. The first 3 or 4 tags are shown on the site, the other tags aren't but the job will be shown on each tag specific page (like /remote-react-jobs). We also generate tags automatically after you post/edit to supplement.`}
                value={postJobFormData.jobTags}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ width: '100%', m: 1 }}>
              <TextField
                id="jobLocation"
                name="jobLocation"
                label="JOB IS RESTRICTED TO LOCATION"
                helperText={` If you'd only like to hire people from a specific location or timezone this remote job is restricted to (e.g. Europe, United States or CET Timezone). If not restricted, please leave it as "Worldwide". The less restricted this is, the more applicants you will get. Keeping it "Worldwide" is highly recommended as you'll have access to a worldwide pool of talent. To promote fairness in remote work positions, worldwide jobs are ranked higher.`}
                value={postJobFormData.jobLocation}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} component="fieldset" variant="standard">
              <FormLabel component="legend">Design your job post</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={postJobFormData.showCompanyLogo}
                      onChange={handleCheckBoxChange}
                      name="showCompanyLogo"
                    />
                  }
                  label="Show my compnay logo besides my post ($49)"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={postJobFormData.emailToCandidates}
                      onChange={handleCheckBoxChange}
                      name="emailToCandidates"
                    />
                  }
                  label="Email blast my job post to 127000 candidates"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={postJobFormData.getMatches} onChange={handleCheckBoxChange} name="getMatches" />
                  }
                  label="Get suitable matches from our directroy of 15000 workers"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={postJobFormData.highlightPost}
                      onChange={handleCheckBoxChange}
                      name="highlightPost"
                    />
                  }
                  label="Highlight your post in yellow ($49)"
                />
              </FormGroup>
            </FormControl>
            <FormControl sx={{ m: 1 }}  component="fieldset">
              <FormLabel component="legend">Job Post Duration</FormLabel>
              <FormGroup>
                <RadioGroup
                  aria-label="jobPostDuration"
                  defaultValue="1"
                  name="jobPostDuration"
                  onChange={handleChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="Stick your post for 24 hours" />
                  <FormControlLabel value="7" control={<Radio />} label="Stick your post for 1 week" />
                  <FormControlLabel value="30" control={<Radio />} label="Stick your post for entire month" />
                </RadioGroup>
              </FormGroup>
            </FormControl>
          </Box>
        </div>
      </div>
    </Layout>
  );
};

export default PostJob;
