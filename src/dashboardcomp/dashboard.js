import React from "react"
import Heading from '../heading/heading';
import Cards from "../cards/cards"
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard(props) {

  const [Worlddata, Setworlddata] = useState([])
  let url = "https://covid19.mathdro.id/api/"
  function call() {

    axios.get(url)
      .then(response => { Setworlddata([response.data]) })

  }

  useEffect(() => {
    call()

  }, url)

  console.log(Worlddata)


  if (Worlddata[0]) {

              return (
        

                <div className="container-fluid">
                  <Heading needed="Dashboard" />
                  <div className="row">

                    <Cards title="confirmed" countdetail={Worlddata[0].confirmed.value} />
                    <Cards title="deaths" countdetail={Worlddata[0].deaths.value} />
                    <Cards title="recovered" countdetail={Worlddata[0].recovered.value} />

                  </div>


                </div>

                  
             

              )
            


}

  return (
    <div>...loading</div>
  )



}
