import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import { useState } from "react";
import '../contents/style.css';
import { Hit } from "./Hit";
import Cookies from "js-cookie";

const searchClient = algoliasearch("HPU73OA9ZB", "07feac1c47982bf8632afcfc74db7449");

export const Search = () => {
    const [showHits, setShowHits] = useState(true);
    const [responseData, setResponseData] = useState(Cookies.get('busData')||null);
    // console.log(responseData);

    return (<>
        <InstantSearch
            className="mx-auto my-4 w-30"
            searchClient={searchClient}
            indexName="results"
        >
            <Configure hitsPerPage={10} />
            <div className="ais-InstantSearch h-min">
                {/* SearchBox */}
                <SearchBox />
                {/* Results */}
                {showHits && <Hits hitComponent={(props) => <Hit {...props}  setResponseData={setResponseData} />} />}
            </div>
        </InstantSearch>
    </>
    );
};
