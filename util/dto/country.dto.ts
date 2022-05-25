import { ICountry } from "../../types/component";

export class CountryUtil {
  static getTransformedCountryArrayt(countries: any): ICountry[] {
    const countryList: ICountry[] = [];
    countries.forEach((country: any) => {
      const individualCountry: ICountry = {};
      individualCountry.name = country?.name?.official ?? "";
      individualCountry.nativeName = country?.name?.common ?? "";
      individualCountry.borderCountries = country?.borders ?? "";
      individualCountry.flags = country?.flags ?? "";
      individualCountry.currencies = country?.currencies ?? "";
      individualCountry.languages = country?.languages ?? "";
      individualCountry.capital = country?.capital ?? "";
      individualCountry.population = country?.population ?? "";
      individualCountry.region = country?.region ?? "";
      individualCountry.subRegion = country?.subregion ?? "";
      individualCountry.topLevelDomain = country?.capital ?? "";
      countryList.push(individualCountry);
    });

    return countryList;
  }
}
