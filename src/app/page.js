import Image from "next/image";
import Header from "@/components/header"
import Footer from "@/components/footer";
import Homes from "@/components/homes"
import Form from "@/components/form"
import Banner from "@/components/banner";
import Projectslider from "@/components/projectslider"
import Content from "@/components/content"
import Navbar from "@/components/navbar"
export default function Home() {
  return (
    <>
 <Navbar/>
  <Banner/>
   <Homes/>
   <Projectslider/>
   <Form/>
   <Content/>
  <Footer/>
  </>
  );
}
