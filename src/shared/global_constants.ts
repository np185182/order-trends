import { GraphType } from "../containers/OrderTrend/models";

export const ECOM_ANALYTICS = 'e-Commerce Analytics';
export const ORDER_TREND = 'ORDER TREND';
export const COMPANY_TREND = 'COMPANY ORDER TREND';
export const INACTIVE_USER = 'INACTIVE COMPANIES';
export const NEW_USER = 'COMPANIES ENROLLED';

export const GRAPH_DUMMY_DATA: GraphType = {
    labels: [],
    datasets: []
}

export const ORDERTREND_DUMMY_DATA = {
    __typename: "",
    OrderDate: "",
    AttemptedOrders: Number.MIN_VALUE,
    CompletedOrders: Number.MIN_VALUE,
    TotalOrders: Number.MIN_VALUE
};

export const ATTEMPTED_ORDERS_LABEL = 'Attempted Orders';
export const COMPLETED_ORDERS_LABEL = 'Completed Orders';
export const TOTAL_ORDERS_LABEL = 'Total Orders';
export const ORANGE = '#FA8231';
export const BLUE = '#3C40C6';
export const GREEN = '#55B74E';

export const STATISTICS = "Statistics";
export const CUSTOMISE_COMPARE = "Customise & Compare";

export const CompaniesEnrolled_head=' Companies Enrolled';
export const alertMessage='Select the To date After The from Date ';
export const newUser_datepickers_Title = "Select Date Range";

export const SEARCHBAR_MESSAGE = "Search Companies";