// https://api.nasa.gov/planetary/apod

const urlApiGetPictureDay = (inputDate) => {
  return `https://api.nasa.gov/planetary/apod?date=${inputDate}&api_key=${process.env.REACT_APP_APIKEY}`;
};

export { urlApiGetPictureDay };
