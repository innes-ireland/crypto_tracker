import { useEffect, useState } from "react";
import wallet from "../logos/wallet.png"
export default function Navbar() {
    return (
        <div className="navBar">
            <h2>Innes' cryptocurrency tracker <img className="wallet_logo" src={wallet} alt="a cryptocurrency wallet logo"></img></h2>

        </div>
    )
}