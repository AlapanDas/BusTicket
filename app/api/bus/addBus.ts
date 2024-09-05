import  algoliasearch  from 'algoliasearch';
import { NextResponse } from 'next/server';
import { Bus } from './data-type';


const client = algoliasearch(process.env.NEXT_PUBLIC_APPID as string, process.env.NEXT_PUBLIC_APIKEY as string);
const index = client.initIndex('results');

export async function addBus(request:any) {


}