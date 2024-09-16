import algoliasearch from 'algoliasearch';
import { NextResponse } from "next/server";


export async function POST(request: Request, response: NextResponse) {
     try {
          const client = algoliasearch(process.env.NEXT_PUBLIC_APPID as string, process.env.ADMIN_KEY as string);
          const index = client.initIndex('results');
          
          let data = await request.json();
          let newBus = data[0];

          try {
               // const { hits } = await index.search(newBus['bus-number']);
               // console.log(hits.length)
               // if (hits.length > 0) {
               //      return NextResponse.json({ message: `Bus with number "${newBus['bus-number']}" already exists.` },{status:409});
               // } else {
                    await index.saveObjects([newBus], { autoGenerateObjectIDIfNotExist: true });
                    return NextResponse.json({ message: "Bus added successfully" }, { status: 201 });
               // }
          } catch (error) {
               console.error('Error searching for bus:', error);
               return NextResponse.json({ status: 'Error searching for bus', error },{status:500});
          }
     } catch (err) {
          console.error('Error searching for bus:', err);
          return NextResponse.json({ message: 'Error handling POST request', error: err },{status:501});
     }
}




export async function GET(request: Request) {
     return NextResponse.json({ message: "Hello from NextJS" })
}