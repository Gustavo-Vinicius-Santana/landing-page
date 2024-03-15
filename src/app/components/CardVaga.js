export default function CardVaga ({vaga, tempo, salario}) {

    return(
        <>
            <div className="p-4 w-[786px] border-solid border-2 border-gray rounded-[12px] cursor-pointer">
                <p className="text-[18px] text-[#101828]">{vaga}</p>
                <div className="mt-8 w-[300px] flex flex-row justify-between">
                    <p className="text-[16px] text-[#667085]">{tempo}</p>
                    <p className="text-[16px] text-[#667085]">faixa salarial: R${salario}</p>
                </div>
            </div>
        </>
    )
}