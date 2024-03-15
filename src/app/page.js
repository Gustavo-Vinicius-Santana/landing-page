import Image from "next/image";

// IMAGENS:
import time from "@/app/imagens/img_time.png"

// COMPONENTES:
import Header from "./components/Header";
import CardInfo from "./components/CardInfo";
import CardVaga from "./components/CardVaga";
import CardColab from "./components/CardColab";

export default function Home() {

  return (
    <>
      <Header/>
      
      <main className="font-inter">
        <section className="mt-16 space-y-4">
          <p className="text-[16px] text-[#8E2424] text-center">Sobre nós</p>
          <h1 className="text-[50px] font-bold text-center">por que somos diferentes</h1>
          <p className="text-[20px] text-[#667085] text-center">nós focamos nos detalhes de tudo que fazemos. Tudo para ajudar as empresas de todo o mundo a se concentrarem naquilo que é realmente importante para elas.</p>
        </section>


        <section className="mt-32 flex flex-row justify-center space-x-8">

          <CardInfo num="400+" title="projetos concluidos" desc="Nós ajudamos a construir mais de 400 projetos." />

          <CardInfo num="100+" title="Colaboradores" desc="Temos mais de 100 colaboradores no nosso time que se preocupam com nossos clientes." />

          <CardInfo num="20k" title="Downloads" desc="Nossos projetos que estão disponiveis em lojas já foram baixados mais de 20.000 vezes." />

          <CardInfo num="500+" title="Reviews 5 estrelas" desc="Estamos orgulhosos de contar com mais de 500 reviews 5 estrelas em nossos produtos." />

        </section>

        <section className="mt-32 flex flex-col items-center">
          <p className="text-[16px] text-[#8E2424] text-center">vagas abertas!</p>
  
          <h1 className="text-[50px] font-bold text-center">estamos procurando por talentos</h1>

          <p className="text-[20px] text-[#667085] text-center">Somos uma equipe 100% remota com pessoas do Brasil inteiro.</p>

          <Image src={time} width={1216} height={400} />
        </section>

        <section className="mt-32 flex flex-col items-center space-y-8">
          <div className="space-y-4">
            <p>Design</p>
            <div className="space-y-4">
              <CardVaga vaga="Product Designer" tempo="Full-time" salario="7.000" />

              <CardVaga vaga="Ux Designer" tempo="Full-time" salario="6.000" />
            </div>
          </div>

          <div className="space-y-4">
            <p>Desenvolvimento de Software</p>
            <div className="space-y-2">
              <CardVaga vaga="Desenvolvedor(a) iOS" tempo="Full-time" salario="6.000" />

              <CardVaga vaga="Desenvolvedor(a) Front-end" tempo="Full-time" salario="7.000" />

              <CardVaga vaga="Desenvolvedor(a) Back-end" tempo="Full-time" salario="8.000" />
            </div>
          </div>
        </section>

        <section className="mt-16 flex flex-col items-center">

          <p className="mb-8 text-[16px] text-[#8E2424] text-center">veja o que nossos colaboradores falam sobre nós</p>

          <CardColab />

        </section>


        <section className="mt-32 ">

          <h1 className="text-[20px] font-bold text-center">Acompanhe as nossas oportunidades</h1>

          <p className="mt-2  text-[20px] text-[#667085] text-center">Seja o primeiro a saber quando novas vagas serão abertas.</p>

          <div className="w-full flex flex-col items-center">
            <form className="w-[500px] mt-4 flex row justify-around">
              <input className="shadow appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Seu e-mail" />

              <input className="w-[100px] cursor-pointer bg-red-500 text-white p-2 rounded" type="submit"  />
            </form>

          </div>
        </section>

      </main>
      
    </>
  );
}
