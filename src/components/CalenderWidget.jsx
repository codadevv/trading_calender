import { useEffect, useState } from "react";
import Links from "./Links";
import Calender from "./Calender";
import "../css/widgetCalender.css";


export default function CalenderWidget()
{
    // month may 31 days
    const [calenderDays, setCalenderDays] = useState(Array(31).fill(null));


    return (
        <>
            <div id="calender_container">
                <Links />
                <Calender />
            </div>
        </>
    )
}