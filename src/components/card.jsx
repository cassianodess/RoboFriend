import React from "react";

export default function Card({id, name, email }){
    
    return(
        <>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shaddow-5">
            <img src={`https://robohash.org/${id}?200x200`} alt="robot profile" width={200} height={200} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </>
    );
}