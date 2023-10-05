import ContentLayout from "../components/layout/contentLayout.jsx";
import Hero from "../components/hero/hero.jsx";
import ContactUs from "../components/contactUs/contactUs";
import Product from "../components/produk/product.jsx";
import AboutUs from "../components/aboutUs/AboutUs.jsx";
import { useState } from "react";

export default function LandingPage(){
    const [data, setdata] = useState("")
    console.log("ini data problem text", data);
    return(
        <ContentLayout>
            <Hero/>
            <AboutUs/>
            <Product/>
            <ContactUs settingData={setdata}/>
        </ContentLayout>
    )
}