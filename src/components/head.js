
const {head,head2} = window.txt.red;

const Head = ()=>{


    return <div className="flx flx-col flx-ai-ce flx-jc-ce w-100">
        <img src="./img/logo.png" alt="logo" className="w-50"/>
        <p className="txt-wht aleg aleg-reg w-100 txt-al-ce m-t-2">{head}<span className="aleg aleg-blck">{head2}</span></p>
    </div>
}

export {Head}