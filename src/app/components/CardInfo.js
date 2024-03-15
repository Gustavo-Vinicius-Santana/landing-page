export default function CardInfo ({num, title, desc}) {

    return(
    <div className="w-[280px]">
        <h1 className="text-[60px] font-bold text-[#8E2424]">{num}</h1>
        <p className="text-[18px] font-bold text-[#101828]">{title}</p>
        <p>{desc}</p>
    </div>


    )
}