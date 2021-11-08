import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const Casino = (props)=>{

    const {rewards,claim} = window.txt.drk;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom txt-wht hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-non brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
            <img src="./img/casumo.png" alt="casumo" className="casumo"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew}</p>
        </span>
        <button className="txt-wht m-l-auto btn btn-grn aleg aleg-blck w-30 hide">{claim}</button>
    </div>

    <div className="trans set bg-non brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
            <img src="./img/casumo.png" alt="casumo" className="casumo"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew2}</p>
        </span>
        <button className="txt-wht m-l-auto btn aleg aleg-blck btn-vio w-30 hide">{claim}</button>
    </div>
</div>
}

const Roulette = (props)=>{
    
    const {rewards,claim} = window.txt.drk2;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom txt-wht hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-non brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
            <img src="./img/casumo.png" alt="casumo" className="casumo"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew}</p>
        </span>
        <button className="txt-wht m-l-auto btn btn-grn aleg aleg-blck w-30 hide">{claim}</button>
    </div>

    <div className="trans set bg-non brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
            <img src="./img/casumo.png" alt="casumo" className="casumo"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew2}</p>
        </span>
        <button className="txt-wht m-l-auto btn aleg aleg-blck btn-vio w-30 hide">{claim}</button>
    </div>
</div>
}

const Poker = (props)=>{
    
    const {rewards,claim} = window.txt.drk3;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom txt-wht hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-non brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
            <img src="./img/casumo.png" alt="casumo" className="casumo"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew}</p>
        </span>
        <button className="txt-wht m-l-auto btn btn-grn aleg aleg-blck w-30 hide">{claim}</button>
    </div>

    <div className="trans set bg-non brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">
        <span className="flx flx-col flx-jc-ce flx-ai-strt">
            <img src="./img/casumo.png" alt="casumo" className="casumo"/>
            <p className="txt-wht aleg aleg-reg m-t-2">{rewards[ctr].rew2}</p>
        </span>
        <button className="txt-wht m-l-auto btn aleg aleg-blck btn-vio w-30 hide">{claim}</button>
    </div>
</div>
}

const Rewards = (props)=>{

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