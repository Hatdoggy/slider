import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

const {cas,roul,poker,empty} = window.txt; 

const Casino = (props)=>{

    const {rewards,claim} = window.txt.drk;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-grn brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="w-100 flx flx-jc-ce flx-ai-ce ovr-hide">
            {ctr===6&&<p className="w-100 txt-al-ce txt-wht aleg aleg-reg m-t-2">{empty}</p>}
                {ctr!=6&&<img src={cas[ctr].src} alt={cas[ctr].alt} className="prods w-70 rew fade"/>}
        </span>

    </div>

    <div className="trans set bg-drk brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">

        <span className="w-100 flx flx-jc-ce flx-ai-ce ovr-hide">
            {ctr===6&&<p className="w-100 txt-al-ce txt-wht aleg aleg-reg m-t-2">{empty}</p>}
            {ctr!=6&&<img src={cas[ctr].src2} alt={cas[ctr].alt2} className="prods w-70 rew fade"/>}
        </span>

    </div>
</div>
}

const Roulette = (props)=>{
    
    const {rewards,claim} = window.txt.drk2;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-grn brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="w-100 flx flx-jc-ce flx-ai-ce ovr-hide">
            {ctr===6&&<p className="w-100 txt-al-ce txt-wht aleg aleg-reg m-t-2">{empty}</p>}
                {ctr!=6&&<img src={roul[ctr].src} alt={roul[ctr].alt} className="prods w-70 rew fade"/>}
        </span>

    </div>

    <div className="trans set bg-drk brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">

        <span className="w-100 flx flx-jc-ce flx-ai-ce ovr-hide">
            {ctr===6&&<p className="w-100 txt-al-ce txt-wht aleg aleg-reg m-t-2">{empty}</p>}
            {ctr!=6&&<img src={roul[ctr].src2} alt={roul[ctr].alt2} className="prods w-70 rew fade"/>}
        </span>

    </div>
</div>
}

const Poker = (props)=>{
    
    const {rewards,claim} = window.txt.drk3;
    const {ctr} = props;

    return <div className="flx flx-col flx-jc-ce flx-ai-ce w-100 h-80 adjust trans">

    <p className="aleg aleg-reg txt-al-ce custom hide"><span className="aleg-blck">{rewards[ctr].txt1}</span>{rewards[ctr].txt2}</p>

    <div className="trans set bg-grn brd flx flx-jc-ce w-100 m-t-2 flx-ai-ce p-20">
        <span className="w-100 flx flx-jc-ce flx-ai-ce ovr-hide">
            {ctr===6&&<p className="w-100 txt-al-ce txt-wht aleg aleg-reg m-t-2">{empty}</p>}
            {ctr!=6&&<img src={poker[ctr].src} alt={poker[ctr].alt} className="prods w-70 rew fade"/>}
        </span>


    </div>

    <div className="trans set bg-drk brd flx flx-jc-ce w-100 flx-ai-ce p-20 m-t-2">

        <span className="w-100 flx flx-jc-ce flx-ai-ce ovr-hide">
            {ctr===6&&<p className="w-100 txt-al-ce txt-wht aleg aleg-reg m-t-2">{empty}</p>}
            {ctr!=6&&<img src={poker[ctr].src2} alt={poker[ctr].alt2} className="prods w-70 rew fade"/>}
        </span>

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