import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Mugs = () => {
  const [mugs, setMugs] = useState();

  useEffect(() => {
    async function fetchMugs() {
      try {
        const rawResponse = await fetch(`${API_BASE_URL}/getproducts?category=mugs`);
        const response = await rawResponse.json();
        setMugs(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMugs();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center mx-5">
            {Object.keys(mugs ?? []).length===0 &&  <p>Sorry All Mugs Are Currently Out of Stock. New Stock Coming Soon!</p> }
            
            {Object.keys(mugs ?? []).map((item)=>{

            return<div key={mugs[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg flex flex-col items-center justify-center">
              <span className="block relative rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="m-auto md:mx-0 h-[30vh] md:h-[36vh] w-auto"
                  src={mugs[item].img}
                  style={{ objectFit: "cover" }}
                />
              </span>
              <Link to={`/product/${mugs[item].slug}`}>
                <div className="mt-4 text-center md:text-left">
                  <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-1">
                    mugs
                  </h2>
                  <h2 className="text-gray-900 title-font text-lg font-medium ml-1"> 
                    {mugs[item].title}
                  </h2>
                  <p className="mt-1 pb-2 ml-1">PKR. {mugs[item].price}</p>
                  <div className="mt2">
                    {mugs[item].size.includes('S') && <span className="border border-gray-400 px-1 ml-1">S</span>}
                    {mugs[item].size.includes('M') && <span className="border border-gray-400 px-1 mx-1">M</span>}
                    {mugs[item].size.includes('L') && <span className="border border-gray-400 px-1 mx-1">L</span>}
                    {mugs[item].size.includes('XL') && <span className="border border-gray-400 px-1 mx-1">XL</span>}
                    {mugs[item].size.includes('XXL') && <span className="border border-gray-400 px-1 mx-1">XXL</span>}
                  </div>
                  <div className="mt2 mt-2">
                    {mugs[item].color.includes('red') && <button className="border border-gray-300 bg-red-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    {mugs[item].color.includes('pink') && <button className="border border-gray-300 bg-orange-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    {mugs[item].color.includes('black') && <button className="border border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    {mugs[item].color.includes('green') && <button className="border border-gray-300 bg-green-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    {mugs[item].color.includes('yellow') && <button className="border border-gray-300 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    {mugs[item].color.includes('blue') && <button className="border border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    {mugs[item].color.includes('white') && <button className="border border-gray-300 bg-white-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                  </div>

                </div>
              </Link>
            </div>})}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mugs;
