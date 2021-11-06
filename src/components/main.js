import { useState } from "react"
import { Head } from "./head"
import { Nav } from "./nav"
import { Slide } from "./slider"        

const {min,max} = window.txt;

const Main = ()=>{

    const [init, setInit] = useState(min)
    const [cur,setCur] = useState({
        cas:true,
        rou:false,
        pok:false
    })

    const [bound,setBound] = useState({
        mini:min,
        maxi:window.txt.max
    }) 

    return <main className="bg-drk flx flx-col flx-jc-sa flx-ai-ce p-20 w-30 h-80 fade-t">
        <Head/>
        <Nav cur={cur} set={setCur} bound={bound} setBound={setBound}/>
        <Slide val={init} set={setInit} cur={cur} bound={bound}/>
    </main> 
}

export {Main}