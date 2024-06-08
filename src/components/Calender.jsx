import { useEffect, useState } from "react";
import Day from "./Day";

export default function Calender()
{
    const [arrayCalenderDays, setArrayCalenderDays] = useState([]);
    const [month, setMonth] = useState("feb");
    // honestly just gonna start naming these with the data structure that i am using since there are not types in js

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
        let weekdays = ["S", "M", "T", "W", "T", "F", "S"];

        let objValues = Object.values(weekdays);

        for (let i = 0; i <= daysPerMonth[month] + 7; i++)
        {
            if (i < 7)
            {
                clone.push(objValues[i]);
            } else if (i > 6)
            {
                clone.push(i - 7);
            }
        }

        setArrayCalenderDays(clone);
    }

    return (
        <>
            <div id="calender">
                <div id="calender_box">
                    <h3>{month}</h3>
                    <div id="days_box">
                        {
                            arrayCalenderDays.map((x, y) =>
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