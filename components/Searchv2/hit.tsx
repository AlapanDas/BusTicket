import { Highlight } from "react-instantsearch";
import {Hit as AlgoliaHit} from 'instantsearch.js'
import Cookie from 'js-cookie';
import { HitItemProps } from "./data-type";
import './style.css'

type HitProps = {
  hit: AlgoliaHit<{
    objectID: string;
    "bus-number": string;
    from: string;
    to: string;
    stops: string[];
    __position?:number;
    __queryID?:string |undefined;
  }>;
};

export const HitItem: React.FC<HitProps> = ({ hit }: HitProps) => {
  async function worker() {
    const { "bus-number": number, stops, to, from, objectID: id } = hit;
    // let number = hit["bus-number"];
    // let stops = hit.stops;
    // let to = hit.to;
    // let from = hit.from;
    // let id = hit.objectID;

    const enddata = [
      {
        _id: id,
        "bus-number": number,
        from: from,
        to: to,
        stops: stops,
        __position: undefined,
        __queryID: ""
      },
    ];

    try {
      if (enddata[0]._id !== null) {
        Cookie.set("busData", JSON.stringify({ message: "Buses found", data: enddata }));
      } else {
        Cookie.set("busData", JSON.stringify({ message: "Buses not found", data: enddata }));
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.error("Error fetching data:", error);
      }
    } finally {
      window.location.reload();
    }
  }

  return (
    <article onClick={worker} className="w-full p-0 m-0 rounded-full">
      <div className="hit-bus-number text-onprimary text-center font-bold">
        <Highlight attribute="bus-number" hit={hit} />
      </div>
      <div className="flex justify-between">
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
