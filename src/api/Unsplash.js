import axios from 'axios';

const key = process.env.REACT_APP_UNSPLASH_API_TOKEN;

// limitation: 50 API visits per minute
const searchImages = async (term) => {
  console.log("Key is "+key)
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: key,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;