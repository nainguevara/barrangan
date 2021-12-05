import {  createContext, useState } from "react";

const LanguageContext = createContext();

const initialLenguage = "es";
const translations = {
    es : {
        menuOne: "Quienes somos",
        menuTwo: "Productos",
        menuThree: "Contacto",
        heroImageText:["Lo mejor para tu ganado","En suplementos alimenticios a base de torta de palmiste, palmiste alto grasa, como fuentes de energia y proteína, fibra soluble e insoluble, elementos básicos para el desarrollo de animales como el ganado bovino tanto de levante, engorde y como de producción de leche, para aves y equinos"],
        we: "Nosotros",
        weText:["Somo una empresa","Registrada y avalada en el ICA, como fabricante de suplementos alimenticios para ganado bovino de engorde, levante y producción de leche, rico en proteínas, carbohidratos, vitaminas, energía, fibra y grasa."],
        seeMore: "Ver mas",
        advice: "Necesitas asesoria, o una cotizacion ?",
        clickWhatsapp: "Dale click para hablar con nosotros",
        products: "PRODUCTOS",
        composition:"Composicion en analisis",
        knowMore: "Saber mas",
        contact: "Contacto",
        contactoText: "DIRECCION:",
        compositionText:["Proteina","Minimo","18.0%","Grasa","Minimo","2.5%","Fibra","Máximo","12.0%","Cenizas","Máximo","10.0%","Humedad","Máximo","13.0%"],
        politics:"Política de protección de datos personales",
        politicsText:" Nuestra empresa esta en la capacidad de realizar la explotación de suplementos alimenticios para ganado de engorde levante y producción de leche. Palmiste, torta de palmiste y otros subproductos de la palma de aceite.",

    },
    en : {
        menuOne: "About us",
        menuTwo: "Products",
        menuThree: "Contact",
        heroImageText:["The best for your cattle","In food supplements based on palm kernel cake, high fat palm kernel, as sources of energy and protein, soluble and insoluble fiber, basic elements for the development of animals such as cattle for both raising, fattening and milk production, for birds and equines        "],
        we: "Nosotros",
        weText: ["We are a company","Registered and endorsed in the ICA, as a manufacturer of nutritional supplements for cattle for fattening, raising and milk production, rich in proteins, carbohydrates, vitamins, energy, fiber and fat."],
        seeMore: "see more",
        advice: "Do you need advice, or a quote ?",
        clickWhatsapp: "Click to talk to us",
        products: "PRODUCTS",
        composition:"Composition in analysis",
        knowMore: "know more",
        contact: "CONTACT",
        contactoText: "DIRECTION:",
        compositionText:["Protein","Minimum","18.0%","Fat","Minimum","2.5%","Fiber","Maximum","12.0%","Cenizas","Maximum","10.0%","Humidity","Maximum","13.0%"],
        politics:"Personal data protection policy",
        politicsText:"Our company is in the capacity to carry out the exploitation of nutritional supplements for cattle raising fattening and milk production. Palm kernel, palm kernel cake and other by-products of oil palm."
    },
};

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState( initialLenguage );
    const [texts, setTexts] = useState( translations[language] );

    const handleLanguage = ({ target }) => {
        if ( target.value === "es" ) {
            setLanguage("es");
            setTexts(translations.es)
        } else {
            setLanguage("en");
            setTexts(translations.en) 
        }
    }

    const data = {
        texts,
        handleLanguage
    }
 
    return(
        <LanguageContext.Provider value={ data } >
            { children }
        </LanguageContext.Provider>
    )

}

export { LanguageProvider };
export default LanguageContext;