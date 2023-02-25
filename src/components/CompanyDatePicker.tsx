import { Delete } from '@mui/icons-material';
import { Button, Chip, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { randomInt } from 'crypto';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react'
import { OrderTrendDto } from '../shared/dto/orderTrendDto';

const CompanyDatePicker = () => {

    const [value,setValue] = useState<Dayjs|null>(dayjs());
    const [dateList,SetDateList] = useState<string[]>([]);

  return (
    <div className='datepickerComponent'>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker onYearChange={undefined} className="sha"
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
                const monthVal : number = newValue?.get('month')! + 1;
                const mVal : string = monthVal<10?'0'+monthVal:monthVal.toString();
                const val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                    SetDateList([...dateList,val]);
                setValue(null);
            }}
            renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    <div className="dateListbox">
        {
            dateList.map((e,index) => {
                return (
                    <>
                    <Chip
                    label={e}
                    icon={<Delete/>}
                    variant="outlined"
                    onClick={() => SetDateList(dateList.filter(item => item != e))}
                  />
                  </>
                )
            })
        }
    </div>

</div>
  )
}

export default CompanyDatePicker
