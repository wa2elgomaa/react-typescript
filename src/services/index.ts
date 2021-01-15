import axios , {AxiosRequestConfig , AxiosResponse} from "axios";
import {ServerResponse} from '../types';

let options : AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  }
};

export async function fetchData(
  url : string, 
  payload : JSON
) : Promise<ServerResponse> {
  try {
    let response : AxiosResponse<ServerResponse> = await axios.post(url , payload , options);
    if(response.status == 200){
      // we could send all the object as the entity in BE same as FE, but we should filter the data we need to send back
      if(response.data){
        return {
          status : response.data.status,
          statusText : response.data.statusText,
          results : response.data.results
        }
      }
    }
    // return any response status if it's not 200 
    return {
      status : response.status,
      statusText : response.statusText
    }
  }catch(err){
    return {
      status : 402,
      statusText : err.message
    }
  }
}
