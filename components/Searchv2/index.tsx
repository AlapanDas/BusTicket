'use client'
import  liteClient  from 'algoliasearch/lite';
import React, { useEffect, useState } from 'react';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Configure
} from 'react-instantsearch';
import { HitItem } from './hit';
import './style.css'

export default function HomePage() {

  let appId = (process.env.NEXT_PUBLIC_APPID) || "";
  let apiKey = (process.env.NEXT_PUBLIC_APIKEY) || "";

  const client = liteClient(appId, apiKey);

  const [isHitsVisible, setHitsVisible] = useState<boolean>(false);

  useEffect(() => {
    const hitsDiv = document.querySelector<HTMLDivElement>('.ais-Hits');
    if (hitsDiv) {
      hitsDiv.style.display = isHitsVisible ? 'block' : 'none';
    }
  }, [isHitsVisible]); // Dependency array to run effect when `isHitsVisible` changes


  return (
    <InstantSearch
      searchClient={client}
      indexName="results"
    >
      <div className="Container">
        <Configure hitsPerPage={30} />
        <div>
          <SearchBox placeholder="Search for Buses" onClick={() => {
            setHitsVisible(prevState => !prevState); // Toggle the visibility state
          }} />
          <Hits
            className="bg-onsecondary"
            hitComponent={HitItem}
          // hitComponent={(props) => <HitItem {...props} />}
          />
        </div>
      </div>
    </InstantSearch>
  );
}


