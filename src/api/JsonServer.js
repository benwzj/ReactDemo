import axios from 'axios';

const jsonServerUrl = process.env.REACT_APP_JSONSERVER_URL;
const JsonServer = async(data) => {

  switch (data.type){
    case 'connection':
    {
      try {
        const response = await fetch(jsonServerUrl+'/profile');
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        return json;
      } catch (error) {
        //console.error(error.message);
        return null;
      }
      
    }
    case 'create-book':
    {
      const response = await axios.post(jsonServerUrl+'/books', {
        name: data.name, like: 0
      });
      return response.data;
    }

    case 'get-books':
    {
      const response = await axios.get(jsonServerUrl+'/books');
      return response.data;
    }
    case 'delete-book':
      await axios.delete(`${jsonServerUrl}/books/${data.id}`);
      break;

    case 'edit-book':
    {
      const response = await axios.put(`${jsonServerUrl}/books/${data.id}`, {
        name: data.name, like: data.like
      });
      return response.data;
    }
    case 'edit-picturesearch':
    { 
      const response = await axios.get(`${jsonServerUrl}/profile`);
      const newData = {...response.data, 'picture_search': data.picture_search};
      await axios.put(`${jsonServerUrl}/profile`, newData);
      break;
    }

    case 'get-picturesearch':
    {
      const response = await axios.get(`${jsonServerUrl}/profile`);
      return response.data;
    }

    case 'create-todo':
    {
      const response = await axios.post(jsonServerUrl+'/todos', {
        text:data.text, completed: data.completed
      });
      return response.data;
    }
    case 'get-todos':
    {
      const response = await axios.get(jsonServerUrl+'/todos');
      return response.data;
    }
    case 'edit-todo':
    {
      const response = await axios.put(`${jsonServerUrl}/todos/${data.id}`, {
        text: data.text, completed: data.completed
      });
      return response.data;
    }
    case 'delete-todo':
      await axios.delete(`${jsonServerUrl}/todos/${data.id}`);
      break; 

    case 'get-todos-showactive':
    {  
      const response = await axios.get(`${jsonServerUrl}/profile`);
      return response.data;
    }
    case 'edit-todos-showactive':
    {  
      const response = await axios.get(`${jsonServerUrl}/profile`);
      const newData = {...response.data, 'todos_showactive': data.showactive};
      await axios.put(jsonServerUrl+'/profile', newData);
      break;
    }
    default:
      return Error;
  }

};

export default JsonServer;