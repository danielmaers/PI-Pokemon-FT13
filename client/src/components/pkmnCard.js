import React from "react";

export default function PkmnCard(props){
    return (<div>
        <div>
            <img src={props.img} />
        </div>
        <div>
        <p>hp: {props.hp}</p>
        <p>attack: {props.attack}</p>
        <p>defense: {props.defense} </p>
        <p>speed: {props.speed}</p>
        <p>height: {props.height}</p>
        <p>weight: {props.weight} </p>
        </div>
    </div>);
}