import Link from './Link';

function Sidebar() {
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
      {renderedLinks}
    </div>
  );
}

export default Sidebar;
