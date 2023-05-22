import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import twitterIcon from '../../../assets//twitter.png'
import GoogleIcon from '@mui/icons-material/Google';
import { TextField } from '@mui/material';

const months = [
    {
        value: 'January',
        label: 'January',
    },
    {
        value: 'February',
        label: 'February',
    },
    {
        value: 'March',
        label: 'March',
    },
    {
        value: 'April',
        label: 'April',
    },
    {
        value: 'May',
        label: 'May',
    },
    {
        value: 'June',
        label: 'June',
    },
    {
        value: 'July',
        label: 'July',
    },
    {
        value: 'August',
        label: 'August',
    },
    {
        value: 'September',
        label: 'September',
    },
    {
        value: 'October',
        label: 'October',
    },
    {
        value: 'November',
        label: 'November',
    },
    {
        value: 'December',
        label: 'December',
    },
];


const days = Array.from({ length: 31 }, (_, index) => {
    const day = index + 1;
    return {
        value: day.toString(),
        label: day.toString(),
    };
});

const years = [];
const currentYear = new Date().getFullYear();

for (let i = 1900; i <= 2023; i++) {
    years.push({
        value: i.toString(),
        label: i.toString(),
    });
}




const CreateYouAccount = () => {
    const [usePhone, setUsePhone] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);



    const [selectedMonth, setSelectedMonth] = useState("January");
    const [selectedDay, setSelectedDay] = useState(1);
    const [selectedYear, setSelectedYear] = useState(2000);
    console.log(selectedMonth, selectedDay, selectedYear, email, name, phone)
    return (
        <div className="w-full flex items-center justify-center  min-h-[100vh]  h-full signup">


            <div className="w-full max-w-[600px] border-2  p-2 pb-9 flex gap-8 items-center justify-between min-h-[600px] border-1 border-solid border-gray-300  flex-col Create=account">
                <div className="w-full  max-w-[450px] flex flex-col gap-2 item-start">
                    <p className='text-2xl font-bold'>Step 1 out of 5</p>
                    <p className='text-3xl font-bold '>Create Your Account</p>
                </div>

                <TextField value={name} onChange={(e) => setName(e.target.value)} className='w-full max-w-[450px] text-black' id="filled-basic" label="Name" variant="outlined" />
                {
                    usePhone && (
                        <div className="flex flex-col w-full  max-w-[450px] items-end">

                            <TextField type='number' value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full max-w-[450px] text-black' id="filled-basic" label="Phone" variant="outlined" />
                            <span className='text-blue-500 hover:underline cursor-pointer' onClick={() => setUsePhone(!usePhone)}>use email instead</span>
                        </div>
                    )
                }
                {
                    !usePhone && (
                        <div className="flex flex-col w-full  max-w-[450px] items-end">
                            <TextField value={email} onChange={(e) => setEmail(e.target.value)} className='w-full text-black' id="filled-basic" label="Email" variant="outlined" />
                            <span className='text-blue-500 pt-3 hover:underline cursor-pointer' onClick={() => setUsePhone(!usePhone)}>use email instead</span>
                        </div>
                    )


                }

                <div className="flex flex flex-col gap-2 w-full  max-w-[450px]">

                    <p className='font-bold'>
                        Date of birth
                    </p>
                    <span className='text-sm text-gray-600'>
                        This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="w-[200px] h-[2px] bg-gray-300 "></div>
                    or
                    <div className="w-[200px] h-[2px] bg-gray-300 "></div>

                </div>

                <div className="flex w-full max-w-[450px] gap-3">
                    <div className="flex w-full max-w-[450px] gap-3">
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            label="Month"
                            className="flex-grow"
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {months.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            className="flex-1"
                            label="Day"
                            defaultValue={days[0].value}
                            value={selectedDay}
                            onChange={(e) => setSelectedDay(e.target.value)}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {days.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                        <TextField
                            id="outlined-select-currency-native"
                            select
                            className="flex-1"
                            label="Year"
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(e.target.value)}
                            SelectProps={{
                                native: true,
                            }}
                        >
                            {years.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </div>
                </div>

                <Link to='/step/2' className='w-full max-w-[450px]'>
                    <Button value="Next" class="bg-black text-white " />

                </Link>

            </div>
        </div>
    );
};



const Button = ({ value, icon, class: additionalClass }: { value: string; class: string; icon: JSX.Element }) => {
    return (
        <div className={`w-full max-w-[450px] h-12 pt-5 pb-5 border-2 border-solid border-gray-300 cursor-pointer rounded-full ${additionalClass}`}>
            <button className="h-full flex gap-2 justify-center items-center w-full">
                <span className="text-blue-500">{icon ? icon : ""}</span>
                <span className="font-semibold">{value}</span>
            </button>
        </div>
    );
};






export default CreateYouAccount;