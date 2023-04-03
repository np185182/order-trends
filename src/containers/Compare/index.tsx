import { CompareGraph, ComparePicker, DateListBox } from '../../shared/styledComponents/orderTrendComponents';
import dayjs, { Dayjs } from 'dayjs';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import { ORDERTREND_BAR_GRAPH_OPTIONS } from '../../shared/config';
import { DUPLICATE_DATA, DATA_NOT_FOUND } from '../../shared/global_constants';
import { addOrderDateList } from '../../shared/utils/redux/reducers/orderTrendReducer';
import { useAppSelector, useAppDispatch } from '../../shared/utils/redux/selectors/hooks';
import { getDateFromDatePicker, getOrderListMap } from '../../shared/utils/helperFunctions';
import { selectOrderTrendData } from '../../shared/utils/redux/selectors/orderTrendSelector';
import { CompareTab } from '../../shared/styledComponents/orderTrendComponents';
import { Bar, Line } from 'react-chartjs-2';
import { OrderTrendDto, gType } from '../orderTrend/orderTrendDto';
import React, { useEffect, useState } from 'react';
import { GRAPH_DUMMY_DATA, ATTEMPTED_ORDERS_LABEL, ORANGE, COMPLETED_ORDERS_LABEL, BLUE, TOTAL_ORDERS_LABEL, GREEN } from '../../shared/global_constants';
import { Snackbar, TextField, Chip } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';




const Compare = () => {

    const dispatch = useAppDispatch();

    const orderMap = getOrderListMap(useAppSelector(selectOrderTrendData));

    const minimumDate = Array.from(orderMap)[0][0];
    const maximumDate = Array.from(orderMap)[orderMap.size - 1][0];

    const [value, setValue] = useState<Dayjs | null>(dayjs(maximumDate));
    const [dateList, SetDateList] = useState<(OrderTrendDto)[]>([orderMap.get(maximumDate)!]);

    const [consoleMessage, SetConsoleMessage] = useState("");
    const [consoleOpen, SetConsoleOpen] = useState(false);

    const [graphData, SetGraphData] = useState<gType>(GRAPH_DUMMY_DATA);

    const handleDelete = (e: OrderTrendDto) => {SetDateList(dateList.filter(item => item != e)) }

    useEffect(() => {
        dispatch(addOrderDateList({ orderDateList: dateList }));
    }, [dateList]);

    const HandleOnAccept = (newValue: Dayjs | null) => {
        setValue(newValue);
        const val = getDateFromDatePicker(newValue);
        if (orderMap.has(val)) {
            if (!dateList.includes(orderMap.get(val)!)) {
                SetDateList([...dateList, orderMap.get(val)!]);
            }
            else {
                SetConsoleMessage(DUPLICATE_DATA);
                SetConsoleOpen(true);
            }
        }
        else {
            SetConsoleMessage(DATA_NOT_FOUND);
            SetConsoleOpen(true);
        }
    }





    // const dateList = useAppSelector(getOrderListData);


    useEffect(() => {
        var temp_graphData = {
            labels: dateList.map((item) => item.OrderDate.slice(0, 10)),
            datasets: [
                {
                    label: ATTEMPTED_ORDERS_LABEL,
                    data: dateList.map((item) => item.AttemptedOrders),
                    borderColor: ORANGE,
                    backgroundColor: ORANGE,
                },
                {
                    label: COMPLETED_ORDERS_LABEL,
                    data: dateList.map((item) => item.CompletedOrders),
                    borderColor: BLUE,
                    backgroundColor: BLUE,
                },
                {
                    label: TOTAL_ORDERS_LABEL,
                    data: dateList.map((item) => item.TotalOrders),
                    borderColor: GREEN,
                    backgroundColor: GREEN,
                },
            ],
        }
        SetGraphData(temp_graphData);
    }, [dateList]);

    return (
        <CompareTab>
            <ComparePicker>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={consoleOpen}
                    onClose={() => SetConsoleOpen(false)}
                    message={consoleMessage}
                    autoHideDuration={3000}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker onYearChange={undefined}
                        label="Select date(s)"
                        value={value}
                        maxDate={dayjs(maximumDate)}
                        views={['year', 'month', 'day']}
                        minDate={dayjs(minimumDate)}
                        onChange={() => true}
                        onAccept={HandleOnAccept}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <DateListBox>
                    {
                        dateList.map((e: OrderTrendDto) => {
                            return (
                                <Chip style={{ position: "relative" }} className="chipObject" label={e.OrderDate}
                                    icon={
                                        <HighlightOffTwoToneIcon
                                            style={{ position: "absolute", right: "10px" }}
                                            onClick={() => handleDelete(e)}
                                        />
                                    } variant='outlined' />
                            )
                        })
                    }
                </DateListBox>
            </ComparePicker>
            <CompareGraph>
                <Bar options={ORDERTREND_BAR_GRAPH_OPTIONS} data={graphData} />
            </CompareGraph>
        </CompareTab>
    )
}

export default Compare;