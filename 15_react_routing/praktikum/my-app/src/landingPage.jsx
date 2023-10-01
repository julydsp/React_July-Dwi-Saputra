import MainLandingPage from "./Pages/mainLandingPage/mainLandingPage";
import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";


export default function LandingPage(){
    return(
        <>
            <Navbar></Navbar>
            <MainLandingPage></MainLandingPage>
            <About></About>
            <Footer></Footer>
        </>
    )
}