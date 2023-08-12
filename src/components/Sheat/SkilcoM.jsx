import "../../plugin/css/Home.css"

const Skill = (props) =>{
    return(
        <div>
            <div className="px-5 mt-3">
            <div className="flex items-center justify-between font-bold text-xl">
                <h1>{props.bahasa}</h1>
                <p>{props.persentase}<span className="text-hijau">%</span></p>
            </div>
            <div className="py-4">
                <p className="pb-2">Dikuasai:</p>
                <ul className="ps-5">
                    <li>{props.artikel}</li>
                    <li>{props.artikel1}</li>
                    <li>{props.artikel2}</li>
                    <li>{props.artikel3}</li>
                </ul>
            </div>
           </div>
           <div className="flex items-center">
                <div className={`${props.clasPersen} bg-black h-[2px]`}></div>
                <div className="bg-hijau w-[5%] h-[20px] rounded-3xl border-2 border-black bg-shadow"></div>
                <div className={`bg-abu-abu-100 h-[2px] ${props.endPersen}`}></div>
           </div>

        </div>
    )
}
export default Skill