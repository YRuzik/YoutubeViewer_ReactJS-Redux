import {ToasterBody, ToasterLabel} from "./Toaster.style";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";


const Toaster = () => {
    const {toasterState}: any = useSelector(state => state)
    const [isChecked, setIsChecked] = useState(false)
    const [label, setLabel] = useState()

    useEffect(() => {
        let setupTimer: ReturnType<typeof setTimeout>;
        if (toasterState.label.length > 0) setupTimer = setTimeout(() => {
            setLabel(toasterState.label)
            setIsChecked(true)
        }, 250)
        const timerID = setTimeout(() => setIsChecked(false), 5000)
        return () => {
            clearTimeout(timerID)
            clearTimeout(setupTimer)
            setIsChecked(false)
        }
    }, [toasterState])

    return (
        <>
            {isChecked ?
            <ToasterBody>
                <ToasterLabel>
                    Добавлено в плейлист &#34;{label}&#34;.
                </ToasterLabel>
            </ToasterBody>
                : null}
        </>
    )
}

export default Toaster
