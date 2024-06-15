import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import { useState } from "react";
import '../contents/style.css';
import { Hit } from "./Hit";
import Cookies from "js-cookie";


const searchClient = algoliasearch(process.env.APPID, process.env.APIKEY);

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
            <Configure hitsPerPage={20} />
            <div className="ais-InstantSearch">
                {/* SearchBox */}
                <SearchBox
                    placeholder="Search for Buses"
                    onClick={worker}
                />
                {/* Results */}
                {showHits && (
                    <div id="results">
                        <Hits hitComponent={(props) => <Hit {...props} setResponseData={setResponseData} />} />
                    </div>
                )}
            </div>
        </InstantSearch>
    </>
    );
};
