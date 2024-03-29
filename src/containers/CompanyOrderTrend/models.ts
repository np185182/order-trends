export interface companyLevel {
    Company: string;
    Date: string;
    TotalOrders: number;
    CompletedOrders:number;
    AttemptedOrders:number;
  }
  
  export interface fres{
    getSpecificCompanyData : companyLevel[]
  }
  
  export type reqbody ={
    companyString:String,
    dateString:String
  }
  
  export interface company{
    CompanyName:string
  }
  
  export type companiesList = {    
    getCompanyList : company[]
  }
  
  export   type searchBarDTO = {
    key: string;
    value: string;
  };

  export type ReduxObjectDTO = {
    companyString: string[];
    dateString: string[];
    Data: companyLevel[];
    label:string;
    status: string;
    companies: company[];
  
  };