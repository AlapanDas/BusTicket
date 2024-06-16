import { Highlight } from "react-instantsearch";
import { useState } from "react";
import Cookie from 'js-cookie';

export const Hit = ({ hit }) => {

  async function worker() {
    let number = hit['bus-number'];
    let stops = hit['stops'];
    let to = hit['to'];
    let from = hit['from'];
    let id = hit['_id']['$oid'];
    const enddata = [
      {
        "_id": id,
        "bus-number": number,
        "from": from,
        "to": to,
        "stops": stops
      }
    ]
    console.log(enddata)

    try {

      if (enddata[0]._id !== null) {
        Cookie.set('busData', JSON.stringify({ message: "Buses not found", data: enddata }))
      }
      else {
        Cookie.set('busData', JSON.stringify({ message: "Buses found", data: enddata }))
      }

    } catch (error) {
      console.error('Error fetching data:', error.message);
    } finally {
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