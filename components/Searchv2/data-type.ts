import { Hit } from "instantsearch.js";
type Bus = {
     objectID: string;
     "bus-number": string;
     from: string;
     to: string;
     stops: string[];
     __position?:number;
     __queryID?:string |undefined;
};

export interface HitItemProps {
     hit: Bus;
};