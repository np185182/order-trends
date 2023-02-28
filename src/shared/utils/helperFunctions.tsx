import { Dayjs } from "dayjs";
import { OrderTrendDto } from "../dto/orderTrendDto";

export const getDateFromDatePicker = (newValue : Dayjs|null)=>{
    const monthVal : number = newValue?.get('month')! + 1;
        const mVal : string = monthVal<10?'0'+monthVal:monthVal.toString();
        const dayVal : number = newValue?.get('date')!;
        const dVal : string = dayVal<10?'0'+dayVal:dayVal.toString();
        const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + dVal;
    return val;
}

export const getMaximumDateData = (maximum:string,orderMap: Map<String, OrderTrendDto>) => {
    return {
        __typename : "OrderData",
        OrderDate:orderMap.get(maximum)?.OrderDate!,
        AttemptedOrders:orderMap.get(maximum)?.AttemptedOrders!,
        CompletedOrders:orderMap.get(maximum)?.CompletedOrders!,
        TotalOrders:orderMap.get(maximum)?.TotalOrders!
    }
}


export const getOrderListMap = (orderList : OrderTrendDto[]) =>{
    const mapList = new Map<string,OrderTrendDto>();
    orderList.map((e : OrderTrendDto)=>{
        e = {...e,OrderDate : e.OrderDate.slice(0,10)}
        mapList.set(e.OrderDate.toString(),e);
    });   
    return mapList;
}