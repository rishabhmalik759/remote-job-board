import { InputLabel, TextField } from '@mui/material';
import React from 'react';
import { useSmartcrop } from 'use-smartcrop';

interface EditableImageI {
  src?: string;
  handleFileUpload: any;
}

function EditableImage(props: EditableImageI) {
  const { src, handleFileUpload } = props;
  const [cropped, error] = useSmartcrop({ src }, { width: 200, height: 200, minScale: 1.0 });

  if (error) {
    console.error(error);
  }

  return (
    <div>
      <InputLabel htmlFor="selectFile">Select File</InputLabel>
      <TextField type="file" inputProps={{ accept: 'image/*' }} id="selectFile" onChange={handleFileUpload}></TextField>
      {cropped && <img style={{ borderRadius: '50%' }} src={cropped} />}
    </div>
  );
}

export default EditableImage;
