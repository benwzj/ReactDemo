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

    case 'get-books':
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
    case 'edit-picturesearch':
    { 
      const response = await axios.get(`http://localhost:3001/profile`);
      const newData = {...response.data, 'picture_search': data.picture_search};
      await axios.put('http://localhost:3001/profile', newData);
      break;
    }

    case 'get-picturesearch':
    {
      const response = await axios.get('http://localhost:3001/profile');
      return response.data;
    }

    case 'create-todo':
    {
      const response = await axios.post('http://localhost:3001/todos', {
        text:data.text, completed: data.completed
      });
      return response.data;
    }
    case 'get-todos':
    {
      const response = await axios.get('http://localhost:3001/todos');
      return response.data;
    }
    case 'edit-todo':
    {
      const response = await axios.put(`http://localhost:3001/todos/${data.id}`, {
        text: data.text, completed: data.completed
      });
      return response.data;
    }
    case 'delete-todo':
      await axios.delete(`http://localhost:3001/todos/${data.id}`);
      break; 

    case 'get-todos-showactive':
    {  
      const response = await axios.get(`http://localhost:3001/profile`);
      return response.data;
    }
    case 'edit-todos-showactive':
    {  
      const response = await axios.get(`http://localhost:3001/profile`);
      const newData = {...response.data, 'todos_showactive': data.showactive};
      await axios.put('http://localhost:3001/profile', newData);
      break;
    }
    default:
      return Error;
  }

};

export default JsonServer;