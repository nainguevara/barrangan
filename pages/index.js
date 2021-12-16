import { useContext } from 'react';
import Head from 'next/head'
import Script from "next/script";
import Image from "next/image";
import logo from "../public/img/barragan-1.png";
import hero from "../public/img/hero.png";
import we from "../public/img/nosotros.png";
import productOne from "../public/img/nutricion-cera-b.jpeg";
import productTwo from "../public/img/palmiste.jpeg";
import footer from "../public/img/footer.png";
import CartOne from "../public/img/camion-1.jpeg"
import CartTwo from "../public/img/camion-2.jpeg"
import CartThree  from "../public/img/camion-3.jpeg"
import { MenuMobile } from '../components/MenuMobile';
import { SliderShow } from '../components/sliderShow';
import LanguageContext from '../context/Language';


export default function Home() {

  const { texts, handleLanguage } = useContext( LanguageContext );

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
                <p className="font-Roboto">roman@palmisteysuplementosbarrangan.com</p>
              </div>
          </div>
          <div className="flex w-[100px] justify-center">
            <a href="https://www.facebook.com/profile.php?id=100069099101511 " target="_blank" >
              <i aria-hidden  className="fab fa-facebook text-[1.8rem] text-green-main"></i>
            </a>
          </div>
        </div>
        <header className="grid grid-cols-[1fr,150px] md:grid-cols-[1fr,500px]">
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
            <a href="#quienes-somos" className="font-Roboto font-bold text-[1.5rem] hover:text-yellow-main duration-500 border-r-2 border-yellow-main pr-2">{texts.menuOne}</a>
            <a href="#producto" className="font-Roboto font-bold text-[1.5rem] hover:text-yellow-main duration-500 border-r-2 border-yellow-main pr-2">{texts.menuTwo}</a>
            <a href="#contacto" className="font-Roboto font-bold text-[1.5rem] hover:text-yellow-main duration-500 border-r-2 border-yellow-main pr-2">{texts.menuThree}</a>
            <select className="w-[50px] hidden md:block"  name="lenguage" onChange={ handleLanguage }>  
                  <option value="es">ES</option>
                  <option value="en">EN</option>
            </select>
          </div>
          <MenuMobile handleLanguage={handleLanguage}/>
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
                  <h1 className="md:text-[2rem] md:text-left text-[1.5rem] text-white font-bold font-Roboto text-center">{texts.heroImageText[0]}</h1>
                  <p className="text-white font-Roboto text-center md:text-left">{texts.heroImageText[1]}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Quienes somos */}
          <section className="mt-8 mx-4 xl:container xl:mx-auto" id="quienes-somos"> 
            <div className="w-[300px] mx-auto border-b-2 border-yellow-main">
              <h2 className="font-Roboto text-[2rem] font-bold text-center">BARRANGAN S.A.S</h2>
              <p className="font-Roboto text-[1.5rem] text-center">{texts.we}</p>
            </div>
            <div className="grid grid-cols-[1fr] md:grid-cols-[1fr,1fr] gap-4 mt-4 mx-2 lg:mx-0">
                <div className="img-wrapper relative">
                  <SliderShow img={[CartOne,CartTwo,CartThree]}/>
                <div className="absolute bg-green-main h-full w-full rounded-md top-0 z-[-1] rotate-6 max-w-[600px]">
                </div>
                  <a  href="https://drive.google.com/drive/folders/1Aja02PJ3MRphg_KsgUYVPrKwv13ND2iN?usp=sharing" className="bottom-[-15px] right-[0] left-[0] ml-auto mr-auto flex justify-center items-center absolute z-[100] w-[200px] bg-yellow-main h-[50px] rounded-md" target="_blank">
                    <p className="font-Roboto text-[1.2rem]">{texts.seeMore}</p>
                  </a> 
              </div>
              <div>
                <h2 className="font-Roboto text-[1.5rem] font-bold">{texts.weText[0]}</h2>
                <p className="font-Roboto text-[1.3rem]">{texts.weText[1]}</p>
              </div>
            </div>
            <div className="xl:container mx-auto mt-8">
              <p className="font-Roboto text-center text-[1.2rem]">
               {texts.politicsText}
              </p>
            </div>
          </section>
          {/* asesoria */}
          <div className="h-[150px] mt-8 bg-yellow-main flex justify-around items-center px-2 md:px-0">
            <div>
                <h3 className="font-Roboto text-[1.2rem] md:text-[1.5rem] font-bold">{texts.advice}</h3>
            </div>  
            <div>
              <a href="https://wa.me/573234755609?text=Quisiera%20obtener%20una%20asesoria%20o%20cotizacion" target="_blank" className="bg-green-main rounded-md h-[100px] flex justify-center flex-col px-4">
                <p className="text-white font-Roboto font-bold text-center">{texts.clickWhatsapp}</p>
                <i aria-hidden  className="fab fa-whatsapp text-[2rem] text-Roboto text-center text-white"></i>
              </a>
            </div>
          </div>
          {/* productos */}
          <section className="mt-8 xl:container lg:mx-auto mx-2" id="producto"> 
            <div className="w-[200px] mx-auto border-b-2 border-yellow-main">
              <h2 className="font-Roboto text-[2rem] font-bold text-center">{texts.products}</h2>
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
                      <td>{texts.compositionTextOne[0]}</td>
                      <td>{texts.compositionTextOne[1]}</td>
                      <td>{texts.compositionTextOne[2]}</td>
                    </tr>
                    <tr className="bg-[#F0DF73]">
                      <td>{texts.compositionTextOne[3]}</td>
                      <td>{texts.compositionTextOne[4]}</td>
                      <td>{texts.compositionTextOne[5]}</td>
                    </tr>
                    <tr className="bg-[#F0DF7330]">
                      <td>{texts.compositionTextOne[6]}</td>
                      <td>{texts.compositionTextOne[7]}</td>
                      <td>{texts.compositionTextOne[8]}</td>
                    </tr>
                    <tr className="bg-[#F0DF73]">
                      <td>{texts.compositionTextOne[9]}</td>
                      <td>{texts.compositionTextOne[10]}</td>
                      <td>{texts.compositionTextOne[11]}</td>
                    </tr>
                    <tr className="bg-[#F0DF7330]">
                      <td>{texts.compositionTextOne[12]}</td>
                      <td>{texts.compositionTextOne[13]}</td>
                      <td>{texts.compositionTextOne[14]}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-yellow-main h-50px mb-2 w-[200px] rounded-md mx-auto">
                  <a href="https://wa.me/573234755609?text=Mas%20informacion%20sobre%20la%20nutricion%20deba%20b%20bovinos" target="_blank" className="text-[1.5rem] font-Roboto rounded-md block text-center font-bold">{texts.knowMore}</a>
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
                <table class="table-auto w-full text-center my-4">
                  <tbody>
                    <tr className="bg-[#F0DF7330]">
                      <td>{texts.compositionTextTwo[0]}</td>
                      <td>{texts.compositionTextTwo[1]}</td>
                      <td>{texts.compositionTextTwo[2]}</td>
                    </tr>
                    <tr className="bg-[#F0DF73]">
                      <td>{texts.compositionTextTwo[3]}</td>
                      <td>{texts.compositionTextTwo[4]}</td>
                      <td>{texts.compositionTextTwo[5]}</td>
                    </tr>
                    <tr className="bg-[#F0DF7330]">
                      <td>{texts.compositionTextTwo[6]}</td>
                      <td>{texts.compositionTextTwo[7]}</td>
                      <td>{texts.compositionTextTwo[8]}</td>
                    </tr>
                    <tr className="bg-[#F0DF73]">
                      <td>{texts.compositionTextTwo[9]}</td>
                      <td>{texts.compositionTextTwo[10]}</td>
                      <td>{texts.compositionTextTwo[11]}</td>
                    </tr>
                    <tr className="bg-[#F0DF7330]">
                      <td>{texts.compositionTextTwo[12]}</td>
                      <td>{texts.compositionTextTwo[13]}</td>
                      <td>{texts.compositionTextTwo[14]}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-yellow-main h-50px mb-2 w-[200px] rounded-md mx-auto">
                  <a href="https://wa.me/573234755609?text=Mas%20informacion%20sobre%20el%20palmiste" target="_blank" className="text-[1.5rem] font-Roboto rounded-md block text-center font-bold">{texts.knowMore}</a>
                </div>
              </div>
            </div>
          </section>
          {/* contacto */}
          <section className="mt-8" id="contacto">
            <div className="w-[200px] mx-auto border-b-2 border-yellow-main">
              <h2 className="font-Roboto text-[2rem] font-bold text-center">{texts.contact}</h2>
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
                    <p className="text-white font-Roboto font-bold">{texts.contactoText}</p>
                    <p className="text-white font-Roboto">Carrera 17 N 12-09 B moriches (cumaral - meta)</p>
                  </div>
                  <div  className="text-center">
                    <i aria-hidden  className="far fa-envelope text-[3rem] text-white"></i>
                    <p className="text-white font-Roboto font-bold">EMAIL:</p>
                    <p className="text-white font-Roboto">roman@palmisteysuplementosbarrangan.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <div className="border-t-2 border-yellow-main pt-4 mt-4 grid grid-cols-[1fr] md:grid-cols-[1fr,1fr,1fr] justify-center items-center md:flex-row">
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
              <p className="font-Roboto">Carrera 17 N 12-09 B moriches<br/>Tel:3127380588 - email:roman@palmisteysuplementosbarrangan.com <br/>cumaral - meta<br/><span className="text-green-main">{texts.politics}</span> </p>
            </div>
            <div className="mt-4 flex justify-around w-full">
              <a href="https://www.facebook.com/profile.php?id=100069099101511 " target="_blank" >
                <i aria-hidden  className="fab fa-facebook text-[2rem] text-green-main"></i>
              </a>
              <a href="https://wa.me/573234755609?text=Mas%20informacion%20sobre%20la%20nutricion%20deba%20b%20bovinos" target="_blank">
                <i aria-hidden  className="fab fa-whatsapp text-[2rem] text-green-main"></i>
              </a>
            </div>
          </div>
        </footer>
    </>
  )
}
