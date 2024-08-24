const algoliasearch = require('algoliasearch');

async function addBus(number, start, stop, nodes) {
     const appId = "HPU73OA9ZB";
     const apiKey = "bfe1f570588199dc2d1b83a6fbe8d371";
     const client = algoliasearch(appId, apiKey);
     const index = client.initIndex('results')

     const newBus = [{
          "bus-number": number,
          "from": start,
          "to": stop,
          "stops": [nodes.split(",")]
     }];

     try {
          const { hits } = await index.search(newBus['bus-number'], {
               filters: `bus-number:${newBus['bus-number']}`
          });
          if (hits.length > 0) {
               console.log(`Bus with number "${newBus['bus-number']}" already exists.`);
          }
          else {
               index.saveObjects(newBus, { autoGenerateObjectIDIfNotExist: true })
               .then(({ objectIDs }) => {
                    console.log("Bus added successfully", objectIDs);
               })
               .catch(err => console.log(err));
          }
     } catch (error) {
          console.error('Error searching for bus:', error);
     }
}


module.exports = { addBus }