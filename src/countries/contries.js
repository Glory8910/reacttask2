import React from "react"
import axios from "axios"
import { useEffect, useState } from 'react';
import Heading from "../heading/heading";
import Cards from "../cards/cards";


export default function Countries() {
    const [countriesdata, Setcountriesdata] = useState()
    let url = "https://covid19.mathdro.id/api/countries"
    function call() {

        axios.get(url)
            .then(response => { Setcountriesdata(response.data) })

    }

    useEffect(() => {
        call()

    }, url)


    if (countriesdata) {
        console.log(countriesdata.countries[0].name)
        return (


            <div className="container-fluid">
                <Heading needed="Heading" />
                <div className="row">
                    {
                      countriesdata.countries.map((obj)=>{
                         return(<Cards name={obj.name}/>)
                       
                       
                      })


                     
                    }



                </div>


            </div>




        )


    }

    return (
        <div>...loading</div>
    )




}