import Image from "next/image";

// IMAGEM:
import img_colab from "@/app/imagens/colab.png"

export default function CardColab () {

    return(
        <>
            <div className="flex flex-col items-center">
                <div className="w-[50%]">
                    <h1 className="text-[20px] font-bold">OptimusTech se importa com a saude dos seus colaboradores e sempre procura nos dar todo tipo de auxilio possível.</h1>
                </div>


                <Image src={img_colab } width={56} height={56}/>
                <p>Julia Castro</p>
                <p className="text-[14px] text-[#667085]">Desenvolvedora web</p>

            </div>
        </>
    )
}