import React from "react";
import { TicketIcon } from "../Icons/Icons";

const ButtonTicket = ({to, text}) => {
    return(
        <a href={to} className="button__book"><TicketIcon/> {text}</a>
    )
}

export default ButtonTicket;