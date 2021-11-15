import {
  GrantServiceList,
  GrantServiceDetailList,
  GrantSupportConditionsList,
} from '../interface/Grant.Interface';
import axios, { AxiosResponse } from 'axios';

interface GrantApiModel {
  model: GrantServiceList | GrantServiceDetailList | GrantSupportConditionsList;
}

const useGrant: (url: string, params: any) => Promise<{ response: any; error: unknown }> = async (
  url: string,
  params: any,
) => {
  //const baseUrl = 'http://34.83.199.174:8080';
  const baseUrl = 'http://localhost:8080';
  let response: GrantApiModel | null = null;
  let error: Error | unknown = null;

  try {
    const result: AxiosResponse<any> = await axios(`${baseUrl}${url}`, {
      params: params,
    });
    response = result.data.data;
  } catch (e: unknown) {
    error = e;
  }

  return { response, error };
};

export default useGrant;
