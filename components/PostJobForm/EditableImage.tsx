import React from 'react';
import { useSmartcrop } from 'use-smartcrop';

interface EditableImageI {
  src?: string;
}

function EditableImage(props: EditableImageI) {
  const { src } = props;
  const [cropped, error] = useSmartcrop({ src }, { width: 200, height: 200, minScale: 1.0 });
  
  if (error) {
    console.error(error);
  }

  return <div>{cropped && <img style={{borderRadius:'50%'}} src={cropped} />}</div>;
}


export default EditableImage;