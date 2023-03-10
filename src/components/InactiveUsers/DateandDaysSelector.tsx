import { Box, Button,  MobileStepper, Paper, Select, SelectChangeEvent, styled, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Tooltip, tooltipClasses, TooltipProps, Typography, useTheme } from '@mui/material';
import { DatePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

// import { useAppDispatch,useAppSelector } from '../../shared/utils/redux/Selectors/hooks';
// import { addingInactiveUsersdata, settingDays } from '../../shared/utils/redux/reducers/InactiveUsersReducer';
// import '../../shared/css/inactive.css';
import '../../shared/css/inactive.css';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { settingDays } from '../../shared/utils/redux/reducers/InactiveUserReducer';
import { useAppDispatch, useAppSelector } from '../../shared/utils/redux/selectors/hooks';


const today1 = new Date();
const p = today1.toString();
const date = new Date(Date.parse(p));
const isoString = date.toISOString();
const formattedDate = isoString.slice(0, 10);





function Daysdifference(pastDate: string): number {
    const oneDayInMs = 24 * 60 * 60 * 1000;
    const today = new Date();
    const past = new Date(pastDate);
    const diffInDays = Math.round(Math.abs((today.getTime() - past.getTime()) / oneDayInMs));
    return diffInDays;
}

const steps = [
    {
        label: 'Select required date on the Date Picker',
        description: `Pick a Required date in the date picker and click the
                      submit button below it.`,
    },
    {
        label: 'View the Required number days on the Chart',
        description:
            'The Count of Inactive Users can be viewed on the Clickable Chart.',
    },
    {
        label: 'Click on the chart to view Companies List',
        description: `Click on the required bar or Line on the Chart to view the list
                       of Companies along with Latest Order dates, required companies
                       can be found using the Search bar`,
    },
];

const pastDate = "2023-02-01";
const daysDiff = Daysdifference(pastDate);

console.log(`The number of days between ${pastDate} and today is ${daysDiff} days.`);


function DateandDaysSelector() {
    const [IsDate, SetDate] = useState(true);
    const [Day, setDay] = React.useState(15);
    const [Val, SetVal] = useState("");
    const handleDayClick = () => SetDate(false);
    const handleDateClick = () => SetDate(true);
    const [value, setValue] = useState<Dayjs | null>(dayjs().subtract(30, 'day'));
    const [dateList, SetDateList] = useState<string[]>([]);
    const handleChange = (event: SelectChangeEvent) => {
        setDay(event.target.value as unknown as number);
    }
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const dispatch = useAppDispatch();
    const Ddata = useAppSelector((state) => state.InactiveUsers.inactiveUsers);

    return (
        <div>
            <div>
                {
                    <>  <div className='container'>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker onYearChange={undefined} className='Date_picker'
                                value={value}
                                label="From Date"
                                onChange={(newValue) => {
                                    setValue(newValue);
                                    const monthVal: number = newValue?.get('month')! + 1;
                                    const mVal: string = monthVal < 10 ? '0' + monthVal : monthVal.toString();
                                    var val: string = newValue?.get('year').toString()! + '-' + mVal + '-' + newValue?.get('date').toString()!;
                                    var days = Daysdifference(val);
                                    setDay(days);
                                    SetVal(val);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>


                        <Button
                            variant="contained"
                            className='submit_btn'
                            onClick={() => {
                                dispatch(settingDays(Day));
                                console.log("action dispatched");
                            }}
                        >
                            Submit
                        </Button>

                        <div>
                            <Box sx={{ width: 270, flexGrow: 1,marginTop: 8 }}>
                                <Paper
                                    square
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: 50,
                                        pl: 2,
                                        bgcolor: 'background.default',
                                    }}
                                >
                                    <Typography>{steps[activeStep].label}</Typography>
                                </Paper>
                                <Box sx={{ height: 255, maxWidth: 600, width: '100%', p: 2 }}>
                                    {steps[activeStep].description}
                                </Box>
                                <MobileStepper
                                    variant="text"
                                    steps={maxSteps}
                                    position="static"
                                    activeStep={activeStep}
                                    nextButton={
                                        <Button
                                            size="small"
                                            onClick={handleNext}
                                            disabled={activeStep === maxSteps - 1}
                                        >
                                            Next
                                            {theme.direction === 'rtl' ? (
                                                <KeyboardArrowLeft />
                                            ) : (
                                                <KeyboardArrowRight />
                                            )}
                                        </Button>
                                    }
                                    backButton={
                                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                            {theme.direction === 'rtl' ? (
                                                <KeyboardArrowRight />
                                            ) : (
                                                <KeyboardArrowLeft />
                                            )}
                                            Back
                                        </Button>
                                    }
                                />
                            </Box>
                        </div>


                    </div>



                    </>
                }

            </div>
        </div>
    )
}

export default DateandDaysSelector;