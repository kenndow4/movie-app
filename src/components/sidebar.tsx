import React, { useRef, useEffect } from 'react';

const Sidebar: React.FC<{ menu: boolean, setMenu: React.Dispatch<React.SetStateAction<boolean>> }> = ({ menu, setMenu }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setMenu]);

  return (
    <div ref={sidebarRef} className={`bg-gray-900 h-screen w-64 fixed top-0 left-0 z-50 overflow-y-auto transition-all duration-300 ${menu ? "" : "transform -translate-x-full"}`}>
      <div className="flex justify-between items-center px-4 py-6">
        <div className="text-white text-xl font-bold">Explora</div>
        <button className="text-white focus:outline-none" onClick={()=>setMenu(false)}>
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M6.293 7.293a1 1 0 0 1 1.414 1.414L5.414 12H14a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4z" />
          </svg>
        </button>
      </div>
      <nav className="mt-6">
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Películas
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Series de TV
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Documentales
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Originales
        </a>
        <span className="text-white text-lg font-bold block px-4 py-4 mt-8">Categorías</span>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Acción y aventura
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Comedia
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Drama
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded transition duration-300"
        >
          Ciencia ficción y fantasía
        </a>
      </nav>
      {/* <button className="w-full bg-red-500 text-white font-bold py-3 mt-10 hover:bg-red-600 focus:outline-none rounded transition duration-300">Iniciar sesión</button> */}
    </div>
  );
};

export default Sidebar;





