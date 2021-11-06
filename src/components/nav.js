
import {BrowserRouter as Router,Link} from "react-router-dom";
const {btns} = window.txt.vio;

const Nav = (props)=>{

    const clicked = (val,targ)=>{

        const {cur,set,bound,setBound} = props;
        let bef = document.querySelector('.btn-drkB');
        bef.classList.remove('btn-drkB');
        bef.classList.add('btn-tran');
        let value = 1500;

        let btn = undefined;

        targ.classList.remove('.btn-drkB');
        targ.classList.add('.btn-tran');
        
        switch (val) {
            case 1:
                btn = document.querySelector('.cas');
                btn.classList.remove('btn-tran');
                btn.classList.add('btn-drkB');

               set({
                   cas:true,
                   rou:false,
                   pok:false
               })
            value=window.txt.max;
            break;
            case 2:
                btn = document.querySelector('.roul');
                btn.classList.remove('btn-tran');
                btn.classList.add('btn-drkB');

                set({
                    cas:false,
                    pok:true,
                    rou:false
                })
                value=window.txt.max2;                     
            break;      
            default:
                btn = document.querySelector('.poke');
                btn.classList.remove('btn-tran');
                btn.classList.add('btn-drkB');

                set({
                    cas:false,
                    rou:true,
                    pok:false
                })
                value=window.txt.max3;
            break;
        }
        setBound({
            ...bound,
            maxi:value
        })
    }

    return <nav className="w-90 bg-not flx flx-jc-ce flx-ai-ce brd m-t-2">
            <button className="btn btn-drkB txt-wht aleg aleg-reg txt-al-ce cas" onClick={(elem)=>clicked(1,elem.target)}>{btns[0]}</button>
            <button className="btn btn-tran txt-wht aleg aleg-reg txt-al-ce roul" onClick={(elem)=>clicked(2,elem.target)}>{btns[1]}</button>
            <button className="btn btn-tran txt-wht aleg aleg-reg txt-al-ce poke" onClick={(elem)=>clicked(3,elem.target)}>{btns[2]}</button>
    </nav>
}

export {Nav}