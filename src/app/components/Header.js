import Image from "next/image";
import logo from "@/app/imagens/logo.png"

export default function Header (){

    return(
        <>
            <header className="p-4 text-sm w-full  flex flex-row justify-around items-center">
                <div className="flex flex-row items-center space-x-2">
                    <Image className="ml-8 cursor-pointer" src={logo} width={27} height={26} />
                    <p className="text-sm cursor-pointer">optimus tech</p>
                </div>

                <nav className=" list-none flex flex-row flex space-x-4">
                    <li className="cursor-pointer">HOME</li>
                    <li className="cursor-pointer">PRODUTOS</li>
                    <li className="cursor-pointer">RECURSOS</li>
                    <li className="cursor-pointer">SOBRE NÓS</li>
                </nav>

                <div className="cursor-pointer flex flex-row items-center space-x-2">
                    <p>ENTRAR</p>
                    <button className="cursor-pointer bg-red-500 text-white p-2 rounded">CADASTRAR</button>
                </div>
            </header>
        </>
    )
}