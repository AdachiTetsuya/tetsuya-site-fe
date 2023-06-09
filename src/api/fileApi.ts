import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL_DOMAIN;
const fileApiEnd = `${API_BASE_URL}/async-app/video-file/`;

export const getFileList = async () => {
  try {
    const response = await axios.get(fileApiEnd, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postFile = async (postFile: File) => {
  const formData = new FormData();
  formData.append('video', postFile);

  try {
    const response = await axios.post(fileApiEnd, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
