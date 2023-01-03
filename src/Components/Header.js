function Header() {
  return (
 
   
  <header translate="no" className="background-radial-gradient bg-white text-gray-600 body-font shadow-lg fixed w-full z-40">
    <div className="container mx-auto flex flex-wrap px-5 py-3">
      <div className="my-auto w-1/2">
        <img className="w-40 bg-indigo-900 rounded" src="https://tegorinternational.github.io/app/images/l-w.png" alt="logo" />
      </div>
      <div className="my-auto w-1/2 text-right">
        <button className="border-2 border-white bg-white text-blue-900 py-1 px-3 rounded font-medium mr-3" data-mdb-ripple="true" data-mdb-ripple-color="#1E90FF" data-mdb-ripple-duration="500ms">Contact</button>
        <button className="border-2 border-white bg-white text-blue-900 py-1 px-3 rounded font-medium" onclick="openNav()" data-mdb-ripple="true" data-mdb-ripple-color="#1E90FF" data-mdb-ripple-duration="500ms">&#9776;</button>
      </div>
    </div>
  </header>
  
 
  );
}

export default Header;
