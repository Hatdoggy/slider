import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const {prod} = window.txt; 

const Casino = (props)=>{

    const {rewards,claim} = window.txt.drk;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-grn brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
        {ctr!=6&&<img src={prod[ctr].src} alt={prod[ctr].alt} className="prods w-30 rew fade"/>}
            <img src="./img/casumo.png" alt="casumo" className="w-30 m-t-2"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew}</p>
        </span>
        <button className="m-l-auto btn btn-trans btn-trans-1 aleg aleg-blck w-30 hide">{claim}</button>
    </div>

    <div className="trans set bg-drk brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
        {ctr!=6&&<img src={prod[ctr].src2} alt={prod[ctr].alt2} className="prods w-30 rew fade"/>}
            <img src="./img/casumo.png" alt="casumo" className="w-30 m-t-2"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew2}</p>
        </span>
        <button className="m-l-auto btn btn-trans aleg aleg-blck btn-trans-2 w-30 hide">{claim}</button>
    </div>
</div>
}

const Roulette = (props)=>{
    
    const {rewards,claim} = window.txt.drk2;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-grn brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
        {ctr!=6&&<img src={prod[ctr].src} alt={prod[ctr].alt} className="prods w-30 rew fade"/>}
            <img src="./img/casumo.png" alt="casumo" className="w-30 m-t-2"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew}</p>
        </span>
        <button className="m-l-auto btn btn-trans btn-trans-1 aleg aleg-blck w-30 hide">{claim}</button>
    </div>

    <div className="trans set bg-drk brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
        {ctr!=6&&<img src={prod[ctr].src2} alt={prod[ctr].alt2} className="prods w-30 rew fade"/>}
            <img src="./img/casumo.png" alt="casumo" className="w-30 m-t-2"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew2}</p>
        </span>
        <button className="m-l-auto btn btn-trans aleg aleg-blck btn-trans-2 w-30 hide">{claim}</button>
    </div>
</div>
}

const Poker = (props)=>{
    
    const {rewards,claim} = window.txt.drk3;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-grn brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
        {ctr!=6&&<img src={prod[ctr].src} alt={prod[ctr].alt} className="prods w-30 rew fade"/>}
            <img src="./img/casumo.png" alt="casumo" className="w-30 m-t-2"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew}</p>
        </span>
        <button className="m-l-auto btn btn-trans btn-trans-1 aleg aleg-blck w-30 hide">{claim}</button>
    </div>

    <div className="trans set bg-drk brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
        {ctr!=6&&<img src={prod[ctr].src2} alt={prod[ctr].alt2} className="prods w-30 rew fade"/>}
            <img src="./img/casumo.png" alt="casumo" className="w-30 m-t-2"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew2}</p>
        </span>
        <button className="m-l-auto btn btn-trans aleg aleg-blck btn-trans-2 w-30 hide">{claim}</button>
    </div>
</div>
}

const Rewards = (props)=>{

    console.log(prod)
    const {ctr,cur} = props;

    return  cur.cas?
    <Casino ctr={ctr}/>
    :
    cur.rou?
    <Roulette ctr={ctr}/>
    :
    <Poker ctr={ctr}/>
}

export {Rewards}