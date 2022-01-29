import React from 'react';
import Button from '../components/button';

export default {
    title : "Button",
    component : Button
}

export const btnlrg = () =>(
    <Button value={"Click Me"} style={{width:'100px' , backgroundColor:"yellow"}} onClick={()=>alert("Big Button")}/>
)

export const btnmed = () =>(
    <Button value={"Click Me"} style={{width:'70px' , backgroundColor:"yellow"}} onClick={()=>alert("medium Button")}/>
)

export const btnsmall = () =>(
    <Button value={"Click Me"} style={{width:'50px' , backgroundColor:"yellow"}} onClick={()=>alert("small Button")}/>
)
