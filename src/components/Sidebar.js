import { useEffect,useState } from "react";
import Link from './Link';
import JsonServer from '../api/JsonServer';

function Sidebar() {

  const [connection, setConnection] = useState('No Server Connection');

  useEffect (()=>{
    repeatServerConnectionTest();
  },[]); 

  const testConnection = async() => {
    
    const data = {type: 'connection'};
    const conn = await JsonServer (data);
    // console.log("testConnection");
    console.log(conn);
    if (conn) 
      setConnection (conn.connection);    
    else
      setConnection ('No Server Connection');  
  }
  const repeatServerConnectionTest = async() => {
    await testConnection();
    setTimeout ( () => {
      repeatServerConnectionTest();
    }, 5000);
  }


  const links = [
    { label: 'Todos', path: '/' },
    { label: 'UnsplashPictures', path: '/pics' },
    { label: 'BooksManage', path: '/bookmanage' },
    { label: 'UI Test', path: '/buttons' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        className="mb-3"
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
        {renderedLinks}
      </div>
      <div className="text-red-600 items-end">{connection}</div>
    </div>

  );
}

export default Sidebar;
