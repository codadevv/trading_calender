import { useEffect, useState } from "react";
import Links from "./Links";
import Calender from "./Calender";
import "../css/widgetCalender.css";


export default function CalenderWidget()

{
    

    return (
        <>
            <div id="calender_container">
                <Links />
                <Calender />
            </div>
        </>
    )
}