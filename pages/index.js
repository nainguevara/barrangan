import Head from 'next/head'
import Script from "next/script";
import Image from "next/image";
import logo from "../public/img/barragan-1.png";
import hero from "../public/img/hero.png";
import we from "../public/img/nosotros.png";
import productOne from "../public/img/nutricion-cera-b.jpeg";
import productTwo from "../public/img/palmiste.jpeg";
import footer from "../public/img/footer.png";
import { MenuMobile } from '../components/MenuMobile';

export default function Home() {
  return (
    <>
     <Script strategy="beforeInteractive" src="https://kit.fontawesome.com/9f459137df.js" crossOrigin="anonymous"></Script>
      <Head>
          <title>Barrangas S.A.S</title>
      </Head>
      <a href="https://wa.me/573234755609?text=Me%20gustaría%20saber%20mas%20de%20sus%20productos" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      <div className="hidden md:flex justify-around mt-[1rem] border-b-2 border-[#ccc]"> 
        <div className="flex w-[400px] justify-between">
            <div className="flex justify-between w-[170px]">
              <i aria-hidden  className="fab fa-whatsapp text-[1.8rem] text-green-main"></i>
              <p className="font-Roboto ">(+57) 3234755609</p>
            </div>
            <div className="flex justify-between w-[170px]">
              <i aria-hidden  className="far fa-envelope text-[1.8rem] text-green-main pr-2"></i>
              <p className="font-Roboto">suplementosbarragan02@gmail.com</p>
            </div>
        </div>
        <div className="flex w-[100px] justify-center">
          <a href="https://www.facebook.com/profile.php?id=100069099101511 " target="_blank" >
            <i aria-hidden  className="fab fa-facebook text-[1.8rem] text-green-main"></i>
          </a>
        </div>
      </div>
      <header className="grid grid-cols-[1fr,80px] md:grid-cols-[1fr,450px]">
        <div className="mt-4 ml-2">
          <Image 
            src={logo}
            alt="logo barrangas"
            width={120}
            height={90}
            objectFit="cover"
          />
        </div>
        {/* Menu desktop */}
        <div className="hidden md:flex col-span-1 justify-between items-center mr-8">
          <a href="#quienes-somos" className="font-Roboto font-bold text-[1.5rem] hover:text-yellow-main duration-500 border-r-2 border-yellow-main pr-2">Quienes somos</a>
          <a href="#producto" className="font-Roboto font-bold text-[1.5rem] hover:text-yellow-main duration-500 border-r-2 border-yellow-main pr-2">Productos</a>
          <a href="#contacto" className="font-Roboto font-bold text-[1.5rem] hover:text-yellow-main duration-500">Contacto</a>
        </div>
        <MenuMobile />
      </header>
      <main>
        {/* hero img */}
        <div className="relative">
          <div className="min-w-full">
              <Image 
                  src={ hero }
                  alt="campo"
                  width={1200}
                  height={600}
                  layout="responsive"
              />
          </div>
          <div className="absolute top-0 bg-[#00000050] w-full h-full">
            <div className="w-[100%] md:w-[40%] h-full flex flex-col justify-center items-center">
              <div className="md:ml-8">
                <h1 className="md:text-[2rem] md:text-left text-[1.5rem] text-white font-bold font-Roboto text-center">Lo mejor para tu ganado </h1>
                <p className="text-white font-Roboto text-center md:text-left">orem Ipsum is simply dummy text of the printing and 
                typesettin orem Ipsum is simply dummy text of the printing and 
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Quienes somos */}
        <section className="mt-8 xl:container mx-auto" id="quienes-somos"> 
          <div className="w-[300px] mx-auto border-b-2 border-yellow-main">
            <h2 className="font-Roboto text-[2rem] font-bold text-center">BARRANGAN S.A.S</h2>
            <p className="font-Roboto text-[1.5rem] text-center">Nosotros</p>
          </div>
          <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] gap-4 mt-4 mx-2 lg:mx-0">
            <div className="img-wrapper relative">
              <Image 
                 src={ we }
                 alt="barranga s.a.s"
                 width={600}
                 height={500}
                 objectFit="cover"
              />
              <div className="absolute bg-green-main h-full w-full rounded-md top-0 z-[-1] rotate-6 max-w-[600px]">

              </div>
            </div>
            <div>
              <h2 className="font-Roboto text-[1.5rem]">Somo una empresa</h2>
              <p className="font-Roboto ">It is a long established fact that a reader will be distracted by the 
                readable content of a page when looking at its layout. The point of using
                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                as opposed to using 'Content here, content here', making it look like 
                readable English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and a search for '
                lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
          </div>
        </section>
        {/* asesoria */}
        <div className="h-[150px] mt-8 bg-yellow-main flex justify-around items-center px-2 md:px-0">
          <div>
              <h3 className="font-Roboto text-[1.2rem] md:text-[1.5rem] font-bold">Necesitas asesoria, o una cotizacion ?</h3>
          </div>  
          <div>
            <a href="https://wa.me/573234755609?text=Quisiera%20obtener%20una%20asesoria%20o%20cotizacion" target="_blank" className="bg-green-main rounded-md h-[100px] flex justify-center flex-col px-4">
              <p className="text-white font-Roboto font-bold text-center">Dale click para hablar con nosotros</p>
              <i aria-hidden  className="fab fa-whatsapp text-[2rem] text-Roboto text-center text-white"></i>
            </a>
          </div>
        </div>
        {/* productos */}
        <section className="mt-8 xl:container lg:mx-auto mx-2" id="producto"> 
          <div className="w-[200px] mx-auto border-b-2 border-yellow-main">
            <h2 className="font-Roboto text-[2rem] font-bold text-center">PRODUCTOS</h2>
          </div>
          <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] mt-4 gap-4">

            <div className="bg-green-main rounded-lg">
              <div className="bg-green-main img-wrapper rounded-lg text-center pt-2">
                <Image 
                  src={ productOne }
                  alt="nutricion cera b"
                  width={250}
                  height={300}
                  objectFit="cover"
                />
                <p className="text-[1.5rem] font-bold text-white border-b-2 border-yellow-main mx-8">Nutricion ceba b bovinos</p>
              </div>
              <div>
              <table class="table-auto w-full text-center my-4">
                <tbody>
                  <tr className="bg-[#F0DF7330]">
                    <td>Proteina</td>
                    <td>Minimo</td>
                    <td>18.0%</td>
                  </tr>
                  <tr className="bg-[#F0DF73]">
                    <td>Grasa</td>
                    <td>Minimo</td>
                    <td>2.5%</td>
                  </tr>
                  <tr className="bg-[#F0DF7330]">
                    <td>Fibra</td>
                    <td>Máximo </td>
                    <td>12.0%</td>
                  </tr>
                  <tr className="bg-[#F0DF73]">
                    <td>Cenizas</td>
                    <td>Máximo</td>
                    <td>10.0%</td>
                  </tr>
                  <tr className="bg-[#F0DF7330]">
                    <td>Humedad</td>
                    <td>Máximo</td>
                    <td>13.0%</td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-yellow-main h-50px mb-2 w-[200px] rounded-md mx-auto">
                <a href="https://wa.me/573234755609?text=Mas%20informacion%20sobre%20la%20nutricion%20deba%20b%20bovinos" target="_blank" className="text-[1.5rem] font-Roboto rounded-md block text-center font-bold">Saber mas</a>
              </div>
              </div>
            </div>

            <div className="bg-green-main rounded-lg ">
              <div className="bg-green-main img-wrapper rounded-lg text-center pt-2">
                <Image 
                  src={ productTwo }
                  alt="palmiste"
                  width={250}
                  height={300}
                  // objectFit="cover"
                />
                <p className="text-[1.5rem] font-bold text-white border-b-2 border-yellow-main mx-8">Palmiste</p>
              </div>
              <div>
              <div className="h-[130px] flex justify-center items-center" >
                <p className="text-[.1.5rem] font-Roboto text-white">COMPOSICION EN ANALISIS </p>
              </div>
              <div className="bg-yellow-main h-50px mb-2 w-[200px] rounded-md mx-auto">
              <a href="https://wa.me/573234755609?text=Mas%20informacion%20sobre%20el%20palmiste" target="_blank" className="text-[1.5rem] font-Roboto rounded-md block text-center font-bold">Saber mas</a>
              </div>
              </div>
            </div>
          </div>
        </section>
        {/* contacto */}
        <section className="mt-8" id="contacto">
          <div className="w-[200px] mx-auto border-b-2 border-yellow-main">
            <h2 className="font-Roboto text-[2rem] font-bold text-center">CONTACTO</h2>
          </div>
          <div className="min-w-full mt-4  relative md:img-max">
            <Image 
              src={ footer }
              alt="campo feliz"
              width={2000}
              height={2000}
              objectFit="cover"
            />
            <div className="absolute top-0 img-footer w-full bg-[#00000050]">
              <div className="mx-2 flex flex-col md:flex-row justify-between lg:justify-around items-center h-full">
                <div className="text-center">
                  <i aria-hidden  className="fab fa-whatsapp  text-[3rem] text-white"></i>
                  <p className="text-white font-Roboto font-bold">WHATSAPP:</p>
                  <p className="text-white font-Roboto">(+57) 3234755609</p>
                </div>
                <div  className="text-center">
                  <i  aria-hidden  className="fas fa-home  text-[3rem] text-white"></i>
                  <p className="text-white font-Roboto font-bold">DIRECCION:</p>
                  <p className="text-white font-Roboto">Carrera 17 N 12-09 B moriches (barrancabermeja)</p>
                </div>
                <div  className="text-center">
                  <i aria-hidden  className="far fa-envelope text-[3rem] text-white"></i>
                  <p className="text-white font-Roboto font-bold">EMAIL:</p>
                  <p className="text-white font-Roboto">suplementosbarragan02@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className=" border-t-2 border-yellow-main pt-4 mt-4 grid grid-cols-[1fr] md:grid-cols-[1fr,1fr,1fr] justify-center items-center md:flex-row">
        <div className="mt-[8px] text-center">
        <Image 
            src={logo}
            alt="logo barrangas"
            width={120}
            height={90}
            objectFit="cover"
          />
        </div>
        <div className="mt-4 text-center "> 
          <p className="font-Roboto">Carrera 17 N 12-09 B moriches<br/>Tel:3127380588 - email:suplementosbarragan02@gmail.com <br/>barrancabermeja, colombia<br/><span className="text-green-main">Politica de proteccion de datos personales</span> </p>
        </div>
        <div className="mt-4 flex justify-around w-full">
          <a href="https://www.facebook.com/profile.php?id=100069099101511 " target="_blank" >
            <i aria-hidden  className="fab fa-facebook text-[2rem] text-green-main"></i>
          </a>
          <a href="https://wa.me/573234755609?text=Mas%20informacion%20sobre%20la%20nutricion%20deba%20b%20bovinos" target="_blank">
            <i aria-hidden  className="fab fa-whatsapp text-[2rem] text-green-main"></i>
          </a>
        </div>
      </footer>
    </>
  )
}
