import { Check } from "lucide-react"
import Navigation from "./Navigation"

const Hero = () => {

  return (

    <div>
      {/* hero section */}
      <section id="hero"
      className="bg-background px-6 pt-24 min-h-screen h-auto
      md:pt-32 hero ">
        {/* navigation */}
        <Navigation/>
        {/* the textual and image content */}
        <div className="grid grid-cols-1 items-center justify-center
        md:grid-cols-2 md:items-start bg-primary rounded-[1rem] ">

          {/* live well div */}
          <div className="p-6 h-screen">
            {/* hero care that feels personal */}
            <div className="flex items-center justify-start gap-x-3 hero-care
            bg-background px-2 py-1 w-[70%] rounded-[2rem] shadow
            shadow-md shadow-surface md:my-6 mt-10 mb-6 md:w-[40%] ">
            <div className="size-2 bg-green-800 rounded-full"></div>
              <p className="uppercase font-winky tracking-wide text-[12px]
              md:text-[16px] text-green-800 ">Huduma yenye kujali.</p>
            </div>
              {/* hero head */}
              <h1 className="py-3 md:py-0 hero-head">
                <span className="font-titan inline-block tracking-wide
                text-[35px] text-background md:text-[4rem] hero-feel
                 ">jisikie vizuri,</span> <br />
                <span className="inline-block italic font-puff text-[30px]
                text-surface py-1 md:text-[3.5rem] hero-live
                 ">&nbsp;ishi vizuri.</span>
              </h1>
              {/* hero description */}
              <p className="font-winky text-surface py-6 text-[18px] hero-description
              leading-[1.8rem] md:py-4 md:text-[1.8rem] md:leading-[2.3rem] ">
                Dawa zinazoaminika, wafamasia wabobezi, na mahitaji muhimu
                ya afya ya kila siku — yakiletwa kwa upendo na uangalifu wa
                kweli
              </p>
              {/* button */}
              <div className="flex items-center justify-start flex-col py-4
              md:flex-row gap-4">
                <a href="#services"
                className="bg-primary text-white px-4 py-2 rounded-[2rem]
                font-winky text-center w-full border border-2 border-background
                hero-shop ">Nunua mahitaji ya afya</a>
                <a href="#health"
                className="bg-background text-primary px-4 py-2 rounded-[2rem]
                font-winky text-center border border-2  border-surface shadow-surface
                w-full shadow-md hero-health ">pata msaada wa kiafya</a>
              </div>
              {/* license */}
              <div className="flex  flex-col items-start justify-start gap-y-0
              md:flex-row gap-x-6 md:mt-12 ">
                {/* licensed pharmacists */}
                <div className="flex items-center justify-start gap-x-3
                hero-licensed ">
                  <Check className="text-surface "/>
                  <p className="font-winky text-surface py-4 text-[18px]
                  leading-[1.8rem] capitalize ">wafamasia wenye leseni</p>
                </div>
                {/* secure & confidential */}
                <div className="flex items-center justify-start gap-x-3
                hero-secured ">
                   <Check className="text-surface"/>
                  <p className="font-winky text-surface py-4 text-[18px]
                  leading-[1.8rem] capitalize ">faragha na usalama</p>
                </div>
              </div>
            </div>
            {/* image div */}
            <div className="relative h-screen bg-[url('/shopping2.webp')]
            bg-center bg-cover rounded-[1rem] z-0 hero-image ">
              {/* gradient over lay in smaller screens */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary
              to-transparent md:from-transparent hero-image "></div>
              {/* gradient overlay in medium to larger screens */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r
              from-primary to-transparent hero-image "></div>
            </div>

            </div>

        </section>
    </div>

  )

}

export default Hero

