import { useEffect,useState } from "react";
import Link from './Link';
import JsonServer from '../api/JsonServer';

const noConnectionHint = 'No Server Connection!';
function Sidebar() {

  const [connection, setConnection] = useState(noConnectionHint);

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
      setConnection (noConnectionHint);  
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

  const connectionInfoClass = (connection === noConnectionHint)? 
                                     "text-red-600" : "text-green-600";

  return (
    <div className="sticky flex flex-col justify-between top-0 h-screen p-1 pb-6">
      <div className="flex flex-col items-start">
        {renderedLinks}
      </div>
      <div className={connectionInfoClass}>{connection}</div>
    </div>

  );
}

export default Sidebar;
