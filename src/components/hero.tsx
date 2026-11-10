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
                md:text-[16px] text-green-800 ">care that feels personal</p>
              </div>
              {/* hero head */}
              <h1 className="py-3 md:py-0 hero-head">
                <span className="font-titan inline-block tracking-wide
                text-[40px] text-background md:text-[4rem] hero-feel ">Feel better,</span> <br />
                <span className="inline-block italic font-puff text-[35px]
                text-surface py-1 md:text-[3.5rem] hero-live ">&nbsp;live well.</span>
              </h1>
              {/* hero description */}
              <p className="font-winky text-surface py-6 text-[18px] hero-description
              leading-[1.8rem] md:py-4 md:text-[1.8rem] md:leading-[2.3rem] ">
                Trusted medicines, expert pharmacists, and everyday wellbeing
                essentials - delivered with genuine care.
              </p>
              {/* button */}
              <div className="flex items-center justify-start flex-col py-4
              md:flex-row gap-4">
                <a href="#services"
                className="bg-primary text-white px-4 py-2 rounded-[2rem]
                font-winky text-center w-full border border-2 border-background
                hero-shop ">Shop health essentials</a>
                <a href="#health"
                className="bg-background text-primary px-4 py-2 rounded-[2rem]
                font-winky text-center border border-2  border-surface shadow-surface
                w-full shadow-md hero-health ">our health support</a>
              </div>
              {/* license */}
              <div className="flex  flex-col items-start justify-start gap-y-0
              md:flex-row gap-x-6 md:mt-12 ">
                {/* licensed pharmacists */}
                <div className="flex items-center justify-start gap-x-3
                hero-licensed ">
                  <Check className="text-surface "/>
                  <p className="font-winky text-surface py-4 text-[18px]
                  leading-[1.8rem] capitalize ">licensed pharmacists</p>
                </div>
                {/* secure & confidential */}
                <div className="flex items-center justify-start gap-x-3
                hero-secured ">
                   <Check className="text-surface"/>
                  <p className="font-winky text-surface py-4 text-[18px]
                  leading-[1.8rem] capitalize ">secure & confidential</p>
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
            {/* stat count div */}
            <div className="py-8 grid grid-cols-1 items-center justify-center
            md:grid-cols-4 gap-y-3 gap-x-4 stat ">
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 count ">
                <h2 className="font-titan tracking-widest number ">24</h2>
                <p className="font-winky text ">hour service</p>
              </div>
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 count ">
                <h2 className="font-titan tracking-widest number ">24</h2>
                <p className="font-winky text ">local pharmacies</p>
              </div>
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 count ">
                <h2 className="font-titan tracking-widest number ">24</h2>
                <p className="font-winky text ">local pharmacies</p>
              </div>
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 count ">
                <h2 className="font-titan tracking-widest number ">24</h2>
                <p className="font-winky text ">local pharmacies</p>
              </div>
            </div>
        </section>
    </div>

  )

}

export default Hero

