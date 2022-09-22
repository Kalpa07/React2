import React,{useEffect, useState} from "react";
import "./style.scss"
import flavorList from "../assets/jsons/flavors.json"
import Flavor from "../components/Flavor";

const Flavors = () => {
    const [flavors, setFlavors] = useState([]);
    useEffect(() => {
        setFlavors(flavorList)
    },[])
    return(
        <div className="container fvr">
            <h1> FLAVORS</h1>

            <div className="grid grid_colspan2">
                {flavors.map((f) => <Flavor flavor={f}/>)}
            </div>
        </div>
    )
}




export default Flavors