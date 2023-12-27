import axios from 'axios';

// limitation: 50 API visits per minute
const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 5HCNkbjn-xTk156hMrr0Xikmfh0nbObHJMaxxX1mhZA',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;