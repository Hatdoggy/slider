
import {BrowserRouter as Router,Link} from "react-router-dom";
const {btns} = window.txt.vio;

const Nav = (props)=>{

    const clicked = (val,targ)=>{

        const {cur,set,bound,setBound} = props;
        let bef = document.querySelector('.btn-not');
        bef.classList.remove('btn-not');
        bef.classList.add('btn-glass');
        let value = 1500;

        let btn = undefined;

        targ.classList.remove('.btn-not');
        targ.classList.add('.btn-glass');
        
        switch (val) {
            case 1:
                btn = document.querySelector('.cas');
                btn.classList.remove('btn-glass');
                btn.classList.add('btn-not');

               set({
                   cas:true,
                   rou:false,
                   pok:false
               })
            value=window.txt.max;
            break;
            case 2:
                btn = document.querySelector('.roul');
                btn.classList.remove('btn-glass');
                btn.classList.add('btn-not');

                set({
                    cas:false,
                    pok:true,
                    rou:false
                })
                value=window.txt.max2;                     
            break;      
            default:
                btn = document.querySelector('.poke');
                btn.classList.remove('btn-glass');
                btn.classList.add('btn-not');

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

    return <nav className="w-90 flx flx-jc-ce flx-ai-ce brd m-t-2">
            <button className="btn btn-not txt-wht aleg aleg-reg txt-al-ce cas" onClick={(elem)=>clicked(1,elem.target)}>{btns[0]}</button>
            <button className="btn btn-glass txt-wht aleg aleg-reg txt-al-ce roul m-l-2 m-r-2" onClick={(elem)=>clicked(2,elem.target)}>{btns[1]}</button>
            <button className="btn btn-glass txt-wht aleg aleg-reg txt-al-ce poke" onClick={(elem)=>clicked(3,elem.target)}>{btns[2]}</button>
    </nav>
}

export {Nav}