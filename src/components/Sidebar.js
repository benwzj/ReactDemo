import { useEffect, useState } from "react";
import Link from './Link';
import ReactDemoLogo from './RD-logo';
import JsonServer from '../api/JsonServer';
import classNames from 'classnames';
import { LuListTodo } from "react-icons/lu";
import { AiOutlinePicture } from "react-icons/ai";
import { GiSecretBook } from "react-icons/gi";
import { GrTest } from "react-icons/gr";

const noConnectionHint = 'No Server Connection!';

function Sidebar() {

  const [connection, setConnection] = useState(noConnectionHint);

  useEffect (()=>{
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
      }, 10000);
    }

    repeatServerConnectionTest();
  }, []); 

  const links = [
    { label: 'Todos', path: '/', icon: LuListTodo},
    { label: 'Picture Search', path: '/pics' ,icon: AiOutlinePicture},
    { label: 'Manage Books', path: '/bookmanage', icon: GiSecretBook},
    { label: 'UI Test', path: '/buttons', icon: GrTest},
  ];

  const renderedLinks = links.map((link) => {
    const LinkIcon = link.icon;
    return (
      <Link
        key={link.label}
        to={link.path}
        className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
        activeClassName="bg-sky-100 text-blue-600"
      >
        <LinkIcon />
        <p className="hidden md:block">{link.label}</p>
      </Link>
    );
  });

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
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {renderedLinks}
      </div>
      <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block md:mt-2"></div>
      <div className={classNames(
          "flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "text-red-600": connection === noConnectionHint,
          },
          {
            "text-green-600": connection !== noConnectionHint,
          }
        )}>
        {connection}
      </div>
    </div>
  );
}

export default Sidebar;
