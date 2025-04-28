import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";
import { useParams } from "react-router-dom";

const MyOrder = () => {
  const { id } = useParams();

  const [order, setOrder] = useState();
  const [products, setProducts] = useState();
  const [date, setDate] = useState()
  const [tracking, setTracking] = useState(false)

  useEffect(() => {
    const fetchOrder = async () => {
      const token = JSON.parse(localStorage.getItem('myuser'))?.token;

      let resolve = await fetch(`${API_BASE_URL}/myorder/${id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      let res = await resolve.json();
      setOrder(res.order)
      
      setProducts(res?.order.products)
      const d = new Date(res.order?.createdAt)
      setDate(d)
    }
    fetchOrder()

    // eslint-disable-next-line
  }, [])

  const showTracking = () => {
    setTracking(true)
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden min-h-screen">
      <div className="container px-5 py-24 mx-auto">
        <div className="mx-auto flex flex-wrap">
          <div className="w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              SmartCart
            </h2>
            <h1 className="text-gray-900 text-xl md:text-3xl title-font font-medium mb-4">
              Order Id: #{order?.orderId}
            </h1>
            <p className="leading-relaxed my-4">
              Your Order Has Been Successfully Placed
            </p>
            <p className="leading-relaxed my-4">Order Placed On: {date && date?.toLocaleString()}</p>
            <p>
              Your Payment Status is : <b>{order?.status}</b>
            </p>
            <br />
            <br />
            <div className="flex mb-4">
              <span className="flex-grow py-2 text-lg w-1/3">Item Description</span>
              <span className="flex-grow py-2 text-lg w-1/3">Quantity</span>
              <span className="flex-grow py-2 text-lg w-1/3">Item Total</span>
            </div>

            {Object.keys(products ?? []).map((key) => {
              return <div key={key} className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500 w-1/3">{products[key]?.name || products[key]?.title} ({products[key]?.size}/{products[key]?.variant || products[key]?.color})</span>
                <span className="m-auto text-gray-900 md:w-1/3">{(products[key]?.qty || products[key]?.availableQty)}</span>
                <span className="m-auto text-gray-900 md:w-1/3">{Number(products[key]?.price)} X {(products[key]?.qty || products[key]?.availableQty)} = {Number(products[key]?.price) * (products[key]?.qty || products[key]?.availableQty)}</span>
              </div>
            })}

            <div className="md:flex-row flex flex-col">
              <span className="title-font font-medium text-2xl text-gray-900 mt-6 md:my-14">
                SubTotal: PKR {order?.amount}
              </span>
              <button onClick={showTracking} className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded mt-6 my-3 md:my-14">
                Track Order
              </button>

            </div>
            <span className="flex">

              {tracking && <span className="ml-auto">Your Delivery Status:   <b>{order?.deliveryStatus}</b></span>}

            </span>
          </div>
        </div>
      </div>
    </section>
  );
};


export default MyOrder;
