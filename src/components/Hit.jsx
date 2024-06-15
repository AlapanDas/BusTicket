import { Highlight } from "react-instantsearch";
import { useState } from "react";
import Cookie from 'js-cookie';

export const Hit = ({ hit }) => {
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  async function worker() {
    let number = hit['bus-number'];

    // const url = `http://localhost:3001/buses`;
    const url = `https://busticket-backend.onrender.com/busesnumber`;
    const data = {
      "number": number
    }

    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.status === 404)
        alert("BUS NOT FOUND")
      let enddata = await response.json();

      if (enddata.message === "Buses not found") {
        setResponseData({ message: "Buses not found" });
        Cookie.set('busData', JSON.stringify({ message: "Buses not found", data: enddata }))
        // console.log(Cookie.get('busData'));
      }

      else {
        setResponseData(enddata);
        Cookie.set('busData', JSON.stringify({ message: "Buses found", data: enddata }))
        // console.log(Cookie.get('busData'));
      }

    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
      setLoading(false);
      window.location.reload();
    }

  };

  return (
    <article onClick={worker} className=" w-full p-0 m-0 rounded">
      <div className="hit-bus-number  text-onprimary text-center font-bold">
        <Highlight attribute="bus-number" hit={hit} />
      </div>
      <div className="flex  justify-between">
        <div className="hit-from">
          <Highlight attribute="from" hit={hit} />
        </div>
        <div className="hit-to">
          <Highlight attribute="to" hit={hit} />
        </div>
      </div>
    </article>
  );
};