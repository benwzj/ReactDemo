import axios from 'axios';

const JsonServer = async(data) => {

  switch (data.type){
    case 'create-book':
      {
        const response = await axios.post('http://localhost:3001/books', {
          name: data.name, like: 0
        });
        return response.data;
      }

    case 'get-book':
      {
        const response = await axios.get('http://localhost:3001/books');
        return response.data;
      }
    case 'delete-book':
      await axios.delete(`http://localhost:3001/books/${data.id}`);
      break;

    case 'edit-book':
      {
        const response = await axios.put(`http://localhost:3001/books/${data.id}`, {
          name: data.name, like: data.like
        });
        return response.data;
      }
    case 'update-picturesearch':
      await axios.put('http://localhost:3001/picture-search', {
        term: data.term
      });
      break;

    case 'get-picturesearch':
      {
        const response = await axios.get('http://localhost:3001/picture-search');
        return response.data;
      }
    default:
      return Error;
  }

};

export default JsonServer;