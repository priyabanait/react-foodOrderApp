import React from 'react'

const data= React.createContext({
    items:[],
    totalAmount:0,
    addItem:(id)=>{},
    removeItem:(id)=>{}


})
export default data;
