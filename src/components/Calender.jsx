import { useEffect, useState } from "react";
import Day from "./Day";

export default function Calender()
{
    const [arrayCalenderDays, setArrayCalenderDays] = useState([]);
    const [month, setMonth] = useState("feb");
    const [listOfCharacters, setListOfCharacers] = useState([]);
    const [listOfDays, setListOfDays] = useState()
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

    const numbersArray = [1, 2, 3, 4, 5, 6, 7];

    function filterArrayMinMax(min, max, array)
    {
        let clone = [];

        array.forEach(element =>
        {
            if (element >= min && element <= max)
            {
                clone.push(element);
            }
        });

        console.log("The array has been filtered");
        console.log(clone);
    }

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

    const buttonStyle = {
        backgroundColor: "tan",
        color: "black"
    }

    return (
        <>
            <div id="calender">
                <button style={buttonStyle} onClick={() => filterArrayMinMax(2, 6, numbersArray)}>filter array</button>
                <div id="calender_box">
                    <div id="calender_top">
                        <h3>{month}</h3>
                    </div>
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