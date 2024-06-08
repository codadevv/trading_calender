import Plus from "./PlusIcon";

export default function Day({ day })
{
    return (
        <>
            <div id="day_box">
                <div id="day_top">
                <h1 id="day_number">{day}</h1>
                </div>
                <Plus />
            </div>
        </>
    )
}