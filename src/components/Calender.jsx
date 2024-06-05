import { useEffect, useState } from "react";
import Day from "./Day";

export default function Calender()
{
    const [calenderDays, setCalenderDays] = useState([]);
    const [month, setMonth] = useState("jan");

    const daysPerMonth = {
        jan: 31,
        feb: 28,
        mar: 31,
        apr: 30,
        may: 31,
        jun: 30,
        jul: 31,
        aug: 31,
        sep: 30,
        oct: 31,
        nov: 30,
        dec: 31,
    }

    useEffect(() =>
    {
        populateInitialCalender(month);
    }, [])


    function populateInitialCalender(month)
    {
        let clone = [];

        let weekdays = {
            sun: "S",
            mon: "M",
            tues: "T",
            wend: "W",
            thur: "T",
            fri: "F",
            sat: "S",
        }

        let objvalues = Object.values(weekdays);


        for (let i = 0; i < daysPerMonth[month] + 8; i++)
        {
            if (i < 7)
            {
                clone.push(objvalues[i]);
            } else if (i > 7)
            {
                clone.push(i - 7);
            }
        }
        setCalenderDays(clone);
    }


    return (
        <>
            <div id="calender">
                <div id="calender_box">
                    <h3>{month}</h3>
                    <div id="days_box">
                        {
                            calenderDays.map((x, y) =>
                            {
                                return <Day key={y} day={x} />
                            })
                        }
                    </div>
                </div>
            </div >
        </>

    )
}