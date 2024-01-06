import axios from 'axios';

const JsonServer = async(data) => {

  switch (data.type){
    case 'post':
      {
        const response = await axios.post('http://localhost:3001/books', {
          title: data.payload.title
        });
        return response.data;
      }

    case 'get':
      {
        const response = await axios.get('http://localhost:3001/books');
        return response.data;
      }
    case 'delete':
      await axios.delete(`http://localhost:3001/books/${data.payload.id}`);
      break;

    case 'put':
      {
          const response = await axios.put(`http://localhost:3001/books/${data.payload.id}`, {
          title: data.payload.title,
        });
        return response.data;
      }

    default:
      return Error;
  }

};

export default JsonServer;