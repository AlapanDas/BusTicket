import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import { useState } from "react";
import '../contents/style.css';
import { Hit } from "./Hit";
import Cookies from "js-cookie";
const appId = process.env.REACT_APP_APIKEY||"HPU73OA9ZB"; 
const apiKey = process.env.REACT_APP_APIKEY||"07feac1c47982bf8632afcfc74db7449" ;
const searchClient = algoliasearch(appId, apiKey);


export const Search = () => {
    const [showHits, setShowHits] = useState(true);
    const [responseData, setResponseData] = useState(Cookies.get('busData') || null);
    


    function worker() {
        const ol = document.getElementById("results");
        ol.style.display = 'block';
    }
    return (<>
        <InstantSearch
            className="mx-auto my-4 w-30"
            searchClient={searchClient}
            indexName="results"
        >
            <Configure hitsPerPage={60} />
            <div className="ais-InstantSearch">
                {/* SearchBox */}
                <SearchBox
                    placeholder="Search for Buses"
                    onClick={worker}
                />
                {/* Results */}
                {showHits && (
                    <div id="results" className=" my-2  max-sm:h-52 max-md:h-60 lg:h-60 overflow-y-scroll shadow">
                        <Hits className=" bg-onsecondary" hitComponent={(props) => <Hit {...props} setResponseData={setResponseData} />} />
                    </div>
                )}
            </div>
        </InstantSearch>
    </>
    );
};
