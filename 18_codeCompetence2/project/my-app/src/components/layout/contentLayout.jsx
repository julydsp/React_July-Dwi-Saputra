import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";

export default function ContenLayout({children}){
    
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}