import React from "react"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cards(props) {

    console.log(props.name)
    const [alldata, Setalldata] = useState() 
    const [confirm,Setconfirm]=useState("")
    const [dead,Setdead]=useState("")
    const [recover,Setrecover]=useState("")
    let url = `https://covid19.mathdro.id/api/countries/${props.name}`
    function call1() {

        axios.get(url)
            .then(response => { Setalldata(response.data)
            Setconfirm(response.data.confirmed.value) 
            Setdead(response.data.deaths.value)
            Setrecover(response.data.recovered.value)
        
        })

    }

    useEffect(() => {
        call1()

    }, url)

    if (props.countdetail) {
        console.log(props.title, props.countdetail)
        return (

            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">




                                <div> < div className="text-xs font-weight-bold text-success text-uppercase mb-1" >
                                    {props.title}
                                </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{props.countdetail}</div>
                                </div>
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
    else if (props.name) {
        if ({...alldata}) {
            console.log(alldata)
            return (

                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-success shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                   
                                   
                                <div> < div className="text-xs font-weight-bold text-success text-uppercase mb-1" >
                                    {props.name}
                                </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">condfirmed- {confirm}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">deaths- {dead}</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">recovered- {recover}</div>
                                </div>



                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )
        }
    }

    return (
        <div>not got value..</div>
    )


}






