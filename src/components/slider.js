import { Rewards } from "./rewards";
import { useState,useEffect } from "react";

const {currency,slider} = window.txt.ylw;
const {values,min,max} = window.txt;

const Slider= (props)=>{

    const {set,setCtr,cur,bound} = props;
    const [val, setVal] = useState(0)

    const show = (targ)=>{
        targ.classList.remove('hide','fade-out')
        targ.classList.add('fade')
    }
    
    const handle = (scrVal)=>{

        let value = scrVal;
        let btns = document.querySelectorAll('button.m-l-auto');
        let mes = document.querySelector('p.custom');

        setVal(value)
        set(value)
        
        if(value<250){
            btns.forEach(elem=>{
                elem.classList.add('hide','fade-out')
                elem.classList.remove('fade')
            })
            
            mes.classList.add('hide','fade-out')
            mes.classList.remove('fade')
            setCtr(6)
        }else if(value<500){
            btns.forEach(elem=>{
                show(elem)
            })
            show(mes)
            setCtr(5)
        }else if(value < 750){
            btns.forEach(elem=>{
                show(elem)
            })
            show(mes)
            setCtr(4)
        }else if(value<1000){
            btns.forEach(elem=>{
                show(elem)
            })
            show(mes)
            setCtr(3)
        }else if(value<1250){
            btns.forEach(elem=>{
                show(elem)
            })
            show(mes)
            setCtr(2)
        }else if(value < 1500){
            btns.forEach(elem=>{
                show(elem)
            })
            show(mes)
            setCtr(1)
        }else{
            btns.forEach(elem=>{
                show(elem)
            })
            show(mes)
            setCtr(0)
        }
        
    }

    useEffect(()=>{
        handle(document.querySelector('input').value)
    },[cur])

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100">
        <input type="range" className="w-100" min={bound.mini} max={bound.maxi} id="slider" value={val} onChange={event=>handle(event.target.value)}></input>
        <span className="flx w-100">
            <small className="aleg aleg-blck txt-wht">{currency}{bound.mini}</small>
            <small className="aleg aleg-blck m-l-auto txt-wht">{currency}{bound.maxi}</small>
        </span>
    </div>
}

const Slide = (props)=>{

    const [ctr, setCtr] = useState(6)
    const {val,set,cur,bound} = props;

    return <section className="prog pos-rel flx flx-col flx-jc-sa flx-ai-ce w-100 bg-glass2 h-70 p-20 m-t-5">
        <p className="aleg aleg-reg txt-wht">{slider.head}</p>
        <h2 className="aleg aleg-blck txt-grn txt-wht">{currency}{val}</h2>
        <Slider set={set} setCtr={setCtr} cur={cur} bound={bound}/>
        <Rewards ctr={ctr} cur={cur}/>
    </section>
}

export {Slide}