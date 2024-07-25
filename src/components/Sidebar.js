import { useEffect,useState } from "react";
import Link from './Link';
import ReactDemoLogo from './rd-logo';
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
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        activeClassName="bg-sky-100 text-blue-600"
      >
        <p className="hidden md:block">{link.label}</p>
      </Link>
    );
  });

  const connectionInfoClass = (connection === noConnectionHint)? 
                              "text-red-600" : 
                              "text-green-600";

  return (
    // <div className="sticky flex flex-col justify-between top-0 h-screen p-1 pb-6">
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <div
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
      >
        <div className="w-32 text-white md:w-40">
          <ReactDemoLogo />
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {renderedLinks}
      </div>
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      <div className={connectionInfoClass}>{connection}</div>
    </div>

  );
}

export default Sidebar;
