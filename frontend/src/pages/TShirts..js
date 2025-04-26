import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config";

const TShirts = () => {
  const [tShirts, setTShirts] = useState();

  useEffect(() => {
    async function fetchTShirts() {
      try {
        const rawResponse = await fetch(`${API_BASE_URL}/getproducts?category=tshirt`);
        const response = await rawResponse.json();
        setTShirts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTShirts();
  }, []);
  
  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center mx-5">
            {Object.keys(tShirts ?? []).length === 0 && <p>Sorry All TShirts Are Currently Out of Stock. New Stock Coming Soon!</p>}
            {Object.keys(tShirts ?? []).map((item) => {

              return <div key={tShirts[item]._id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg flex flex-col items-center justify-center">
                <span className="block relative rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[30vh] md:h-[36vh] w-auto"
                    src={tShirts[item].img}
                    style={{ objectFit: "cover" }}
                  />
                </span>
                <Link to={`/product/${tShirts[item].slug}`}>
                  <div className="mt-4 text-center md:text-left">
                    <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 ml-1">
                      TShirt
                    </h2>
                    <h2 className="text-gray-900 title-font text-lg font-medium ml-1">
                      {tShirts[item].title}
                    </h2>
                    <p className="mt-1 pb-2 ml-1">PKR. {tShirts[item].price}</p>
                    <div className="mt2">
                      {tShirts[item].size.includes('S') && <span className="border border-gray-400 px-1 ml-1">S</span>}
                      {tShirts[item].size.includes('M') && <span className="border border-gray-400 px-1 mx-1">M</span>}
                      {tShirts[item].size.includes('L') && <span className="border border-gray-400 px-1 mx-1">L</span>}
                      {tShirts[item].size.includes('XL') && <span className="border border-gray-400 px-1 mx-1">XL</span>}
                      {tShirts[item].size.includes('XXL') && <span className="border border-gray-400 px-1 mx-1">XXL</span>}
                    </div>
                    <div className="mt2 mt-2">
                      {tShirts[item].color.includes('red') && <button className="border border-gray-300 bg-red-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                      {tShirts[item].color.includes('pink') && <button className="border border-gray-300 bg-orange-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                      {tShirts[item].color.includes('black') && <button className="border border-gray-300 bg-black rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                      {tShirts[item].color.includes('green') && <button className="border border-gray-300 bg-green-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                      {tShirts[item].color.includes('yellow') && <button className="border border-gray-300 bg-yellow-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                      {tShirts[item].color.includes('blue') && <button className="border border-gray-300 bg-blue-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                      {tShirts[item].color.includes('white') && <button className="border border-gray-300 bg-white-700 rounded-full w-6 h-6 focus:outline-none ml-1"></button>}
                    </div>

                  </div>
                </Link>
              </div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TShirts;
