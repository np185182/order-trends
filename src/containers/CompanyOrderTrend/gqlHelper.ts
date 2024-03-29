import { useQuery } from "@apollo/client";
import { companiesList, company, companyLevel } from "./models";
import { COMPANIES_QUERY, GETSPECIFICCOMPANIESDATA_QUERY } from "./queries";


export const CompanyUtil = async () => {
    const { data } =useQuery<companiesList>(COMPANIES_QUERY);
    const tempResult: company[] = data?.getCompanyList!;
    const result: company[] = [];
    tempResult?.map((c: company) => result.push(c));
    return tempResult;
  };

  export async function GetSpecificCompanyData(
    companyString: String,
    dateString: String
  ) {
    const { data, loading, error } =  useQuery<companyLevel[]>(
      GETSPECIFICCOMPANIESDATA_QUERY,
      {
        variables: {
          i1: companyString,
          i2: dateString,
        },
      }
    ); 
        return { data, loading, error };
  }