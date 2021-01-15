import axios from "axios";
import {ServerResponse} from '../types';

const headers = {
    'Content-Type': 'application/json'
};

export async function fetchData(
  url : string, 
  payload : JSON
) : Promise<ServerResponse> {
  let results ;
  try {
    results = await axios.post(url , payload);
    return {
      status : 200,
      results : results
    }
  }catch(err){
    return {
      status : 402,
      statusText : err.message
    }
  }
}
