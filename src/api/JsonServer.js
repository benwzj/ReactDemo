import axios from 'axios';

const JsonServer = async(data) => {

  switch (data.type){
    case 'post':
      {
        const response = await axios.post('http://localhost:3001/books', {
          name: data.name
        });
        return response.data;
      }

    case 'get':
      {
        const response = await axios.get('http://localhost:3001/books');
        return response.data;
      }
    case 'delete':
      await axios.delete(`http://localhost:3001/books/${data.id}`);
      break;

    case 'put':
      {
          const response = await axios.put(`http://localhost:3001/books/${data.id}`, {
          title: data.name,
        });
        return response.data;
      }

    default:
      return Error;
  }

};

export default JsonServer;