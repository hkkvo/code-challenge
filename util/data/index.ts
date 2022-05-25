import { ICountry } from "../../types/component";
import { HttpClient } from "./data";
import { API_ENDPOINTS } from "./routs";

class Client {
  countries = {
    all: (): any => HttpClient.get<any>(API_ENDPOINTS.All),
    getCountryByName: (name: string): any =>
      HttpClient.get<any>(API_ENDPOINTS.NAME + "/" + `${name}`),
    getCountriesByRegion: (region: string): any =>
      HttpClient.get<any>(API_ENDPOINTS.NAME + "/" + `${region}`),
  };
}

export default new Client();
