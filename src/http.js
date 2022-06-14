import axios from 'axios';

const URI =
  'https://vue-http-demo-e88ed-default-rtdb.europe-west1.firebasedatabase.app/surveys.json';

const getAllSurveys = async () => {
  const response = await axios.get(URI, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const getSurvery = async () => {
  const response = await axios.get(URI, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

const postSurvey = async (data) => {
  const response = await axios.post(URI, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export { getAllSurveys, getSurvery, postSurvey };
