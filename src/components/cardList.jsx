import React from "react";
import Card from "./card";

export default function CardList({robots}){
    return(
        <>
            {
                robots.map((robot, index) => {
                    return <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
                })
            }
        </>
    );
}