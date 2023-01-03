import React from 'react';
import ReactDOM from 'react-dom/client';
function Body(){
  return(
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-14">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-tegor-500">Branding Portfolio</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">We help businesses like yours design logos/brands that take them to the next level.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 shadow" src="https://tegorinternational.github.io/app/imgs/echo.jpg"/>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4 shadow" src="https://tegorinternational.github.io/app/imgs/dev.jpg"/>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap w-full mx-auto mt-5">
      <a className="mx-auto text-center text-2xl font-semibold" href="#!"><u>EXPLORE MORE</u></a>
    </div>
  </div>
  </section>
    
    );
}
export default Body;
