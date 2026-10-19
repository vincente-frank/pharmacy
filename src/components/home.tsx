import { Clock, LocateIcon, MapPin, Pill, ScanHeart, ShieldCheck, TicketPlus } from "lucide-react"
import Navigation from "./Navigation"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import TextPlugin from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"




const Home = () => {

  gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger);
  useGSAP ( ()=> {
    function slidePanels () {
      let vitamin = document.querySelector(".vitamin")
      let personal = document.querySelector(".personal")
      let medicine = document.querySelector(".medicine")
      let baby = document.querySelector(".baby")
      let advice = document.querySelector(".advice")
      let services = document.querySelector(".services")
      const tl = gsap.timeline()
      .from(vitamin, {xPercent:250, duration:2})
      .from(personal, {xPercent:-250, duration:2})
      .from(medicine, {xPercent:250, duration:2})
      .from(baby, {xPercent:-250, duration:2})
      .from(advice, {xPercent:250, duration:2})

      ScrollTrigger.create({
        trigger: services,
        start: "top top",
        end: "+=4000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        animation: tl
      })
    }
    slidePanels()
  }, []);


  return (

    <div className='bg-background'>

        {/* hero section */}
        <section className="bg-background px-6 pt-24 min-h-screen h-auto
        md:pt-32 ">
            {/* navigation */}
            <Navigation/>
            {/* the textual and image content */}
            <div className="grid grid-cols-1 items-center justify-center
            md:grid-cols-2 md:items-start bg-green-300 rounded-[1rem] ">

              {/* live well div */}
            <div className="p-6 h-screen">
              <div className="flex items-center justify-start gap-x-3
              bg-background px-2 py-1 w-[70%] rounded-[2rem] shadow
              shadow-md shadow-surface md:my-6 mt-10 mb-6 md:w-[40%] ">
                <div className="size-2 bg-green-800 rounded-full"></div>
                <p className="uppercase font-winky tracking-wide text-[12px]
                md:text-[16px] text-green-800 ">care that feels personal</p>
              </div>
              <h1 className="py-3 md:py-0">
                <span className="font-titan inline-block tracking-wide
                text-[40px] text-primary md:text-[4rem] ">Feel better,</span> <br />
                <span className="inline-block italic font-puff text-[35px]
                text-green-800 py-1 md:text-[3.5rem] ">&nbsp;live well.</span>
              </h1>
              <p className="font-winky text-green-900/60 py-6 text-[18px]
              leading-[1.8rem] md:py-4 md:text-[1.8rem] md:leading-[2.3rem] ">
                Trusted medicines, expert pharmacists, and everyday wellbeing
                essentials - delivered with genuine care.
              </p>
              {/* button */}
              <div className="flex items-center justify-start flex-col py-4
              md:flex-row gap-4">
                <button className="bg-primary text-white px-4 py-2 rounded-[2rem]
                font-winky text-center w-full ">Shop health essentials</button>
                <button className="bg-background text-primary px-4 py-2 rounded-[2rem]
                font-winky text-center border border-2  border-green-900/50
                w-full ">Transfer a prescription</button>
              </div>
              {/* license */}
              <div className="flex  flex-col items-start justify-start gap-y-0
              md:flex-row gap-x-6 md:mt-12 ">
                {/* licensed pharmacists */}
                <div className="flex items-center justify-start gap-x-3 ">
                  <TicketPlus/>
                  <p className="font-winky text-green-900/60 py-4 text-[18px]
                  leading-[1.8rem] capitalize ">licensed pharmacists</p>
                </div>
                {/* secure & confidential */}
                <div className="flex items-center justify-start gap-x-3 ">
                   <TicketPlus/>
                  <p className="font-winky text-green-900/60 py-4 text-[18px]
                  leading-[1.8rem] capitalize ">secure & confidential</p>
                </div>
              </div>
            </div>
            {/* image div */}
            <div className="relative h-screen bg-[url('/shopping2.webp')]
            bg-center bg-cover rounded-[1rem] z-0 ">
              {/* gradient over lay in smaller screens */}
              <div className="absolute inset-0 bg-gradient-to-b from-green-300
              to-transparent md:from-transparent "></div>
              {/* gradient overlay in medium to larger screens */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r
              from-green-300 to-transparent "></div>
            </div>

            </div>
            {/* stat count div */}
            <div className="py-8 grid grid-cols-1 items-center justify-center
            md:grid-cols-4 gap-y-3 gap-x-4 ">
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 ">
                <h2 className="font-titan tracking-widest ">24</h2>
                <p className="font-winky">local pharmacies</p>
              </div>
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 ">
                <h2 className="font-titan tracking-widest ">24</h2>
                <p className="font-winky">local pharmacies</p>
              </div>
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 ">
                <h2 className="font-titan tracking-widest ">24</h2>
                <p className="font-winky">local pharmacies</p>
              </div>
              {/* local pharmacies */}
              <div className="flex items-center justify-center flex-col
              gap-y-1 border-b border-surface rounded-[1rem] p-2 ">
                <h2 className="font-titan tracking-widest ">24</h2>
                <p className="font-winky">local pharmacies</p>
              </div>
            </div>
        </section>

        {/* care without pain section */}
        <section className="p-6 h-[30rem] text-center py-[4rem]
        md:py-[5rem] ">
          {/* title */}
          <h2 className="font-puff text-primary text-[3rem]
          tracking-wide md:text-[6rem] ">care without pain</h2>
          <p className="font-winky py-4 text-[24px] font-thin
          tacking-widest md:text-[40px] ">
            Everything you need from your <br />
            neighborhood pharmacy.
          </p>
        </section>

        {/* our services section */}
        <section className="min-h-screen h-auto p-6 flex flex-col relative
        overflow-hidden services ">
          <h1 className="font-puffy text-primary font-black tracking-wide
          capitalize text-[2rem] ">huduma zetu</h1>
          <p className="pt-3 font-winky font-thin text-[24px] pb-6 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Deleniti veritatis corrupti inventore?
          </p>
          <img src="/welcome.webp" alt=""
          className="rounded-[1rem] cursor-pointer aspect-square
          object-cover h-[20rem] md:object-top md:h-[30rem] "
          />

          {/* vitamin supplement div */}
          <section className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background vitamin ">
            {/* image */}
            <img src="/vitamin.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            ">virutubisho vya vitamini</h2>
            <p className="font-winky font-thin text-[16px] pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>
          {/* personal care div */}
          <section className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background personal ">
            {/* image */}
            <img src="/care.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            ">personal care</h2>
            <p className="font-winky font-thin text-[16px] pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >fika ofisini kwetu</a>
          </section>
          {/*medicine prescriptions div */}
          <section className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background medicine ">
            {/* image */}
            <img src="/medicines.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            ">medicine prescription</h2>
            <p className="font-winky font-thin text-[16px] pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>
          {/*baby & children care div */}
          <section className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background baby ">
            {/* image */}
            <img src="/baby.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            ">child infant care</h2>
            <p className="font-winky font-thin text-[16px] pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>
          {/* advice & consultation div */}
          <section className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background advice ">
            {/* image */}
            <img src="/advice.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            ">advice & consultation</h2>
            <p className="font-winky font-thin text-[16px] pb-3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>

        </section>

        {/* more than medicine section */}
        <section className="h-auto p-6 bg-primary text-white
        grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2
        md:items-start ">
          {/* health support div */}
          <div className="md:py-[4rem] ">
            <p className="uppercase font-winky font-thin tracking-widest
            text-surface text-[14px] ">more than medicine</p>
            <h2 className="font-puff text-[28px] py-3 md:text-[3.4rem]
             " >Health support that fits your life. </h2>
            <p className="font-winky font-thin pt-2 pb-6 md:text-[1.8rem] ">
              From routine vaccinations to medication reviews, our
              pharmacists are here to make healthcare feel simpler.
            </p>
            <a href="#"
            className="bg-yellow-500/70 px-2 py-1 rounded-[.2rem] font-puff
            tracking-widest font-thin md:text-[24px] "
            >Book an appointment</a>
          </div>
          {/* vaccinations div */}
          <div className="bg-green-400/10 rounded-[1rem] p-3 grid
          grid-cols-1 items-centr justify-center gap-y-6 md:grid-cols-2
          md:gap-x-0 md:my-[4rem] ">
            {/* vaccine */}
            <div className="border-b border-surface p-2 md:border-none ">
              <ShieldCheck className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">vaccinations</p>
              <p className="text-surface font-mono py-2 ">
                Flu, travel, and routine vaccines with
                a trained pharmacist.
              </p>
            </div>
            {/* medication review */}
            <div className="border-b border-surface p-2 md:border-none ">
              <Pill className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">medication review</p>
              <p className="text-surface font-mono py-2 ">
                One-to-one support to get the most from your medicines.
              </p>
            </div>
            {/* same day treatment */}
            <div className="border-b border-surface p-2 md:border-none ">
              <Clock className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">same day treatment</p>
              <p className="text-surface font-mono py-2 ">
                Local delivery for prescriptions and wellness essentials.
              </p>
            </div>
            {/* health checks */}
            <div className="border-b border-surface p-2 md:border-none ">
              <ScanHeart className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">Health checks</p>
              <p className="text-surface font-mono py-2 ">
                Blood pressure, diabetes risk, and heart health screenings.
              </p>
            </div>
          </div>
        </section>

        {/* contacts section */}
        <section className="min-h-screen h-auto p-6 bg-gradient-to-b
        from-primary via-transparent to-transparent border-b border-surface ">
          <div className="h-auto bg-background rounded-[1rem] grid grid-cols-1
          items-center justify-center md:items-start gap-6 md:grid-cols-2 ">
            {/* location */}
            <div className="py-12 px-3">
              <MapPin fill="background" className="text-primary bg-surface rounded-full
              size-10 p-1"
              />
              <h1 className="font-puff py-3 text-[26px] md:text-[3rem] ">
                Your neighborhood pharmacy, wherever you are
              </h1>
              <p className="font-winky font-thin tracking-wide pt-3 text-[18px]
              pb-6 md:text-[1.8rem] ">
                Stop by for personal advice, quick prescriptions,
                and a familiar face. We have 24 locally owned
                locations ready to help.
              </p>
              <a href="#"
              className="bg-primary text-surface font-titan tracking-widest px-2
              py-1 rounded-[.2rem] font-thin my-3 inline-block md:text-[1.3rem] "
              >let's talk</a>
            </div>
            {/* pharmacy image */}
            <div className="p-4 bg-surface rounded-[1rem] ">
              <img src="/consultation.webp" alt="pharmacy consultation image"
              className="rounded-[.2rem] aspect-square object-cover cursor-pointer
              hover:scale-102 hover:shadow hover:shadow-md hover:shadow-primary
              ease-in-out duration-700 transition-all "
              />
            </div>
          </div>
        </section>

        {/* footer section */}
        <section className="h-screen p-6 ">
          <div className="grid grid-cols-1 items-center justify-center
          md:grid-cols-3 gap-y-8 gap-x-12 py-12 ">
            {/* logo */}
            <div>
                <h1 className='font-puff tracking-wide md:text-[1.3rem]'>
                    <span className='text-primary text-[16px] md:text-[2rem] '>k</span>
                    <span>ing</span>
                    <span className='capitalize'>&nbsp;james</span> <br />
                    <span>pharmacy</span>
                </h1>
                <p className="py-3 font-winky font-thin text-black/70
                text-[16px] md:text-[1.3rem] "
                >Modern pharmacy care, rooted in community since 1987.</p>
            </div>
            {/* quick links */}
            <div className="md:pt-32">
              <h1 className="font-puff text-primary py-2 ">pharmacy</h1>
              <nav className="flex flex-col items-start justify-start
              gap-y-1">
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">Home</a>
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">Services</a>
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">Send us a message</a>
              </nav>
            </div>
            {/* contacts */}
            <div className="md:pt-32" >
              <h1 className="font-puff text-primary py-2 ">help</h1>
              <nav className="flex flex-col items-start justify-start
              gap-y-1 ">
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">whatsapp</a>
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">instagram</a>
                <a href="#" className="text-black/70 font-winky tracking-wide
                ">youtube</a>
              </nav>
            </div>
          </div>
          {/* all rights div */}
          <div className="pt-10 pb-2 " >
            <p className="font-titan font-thin text-black/50 tracking-widest
            capitalize text-center md:text-[3rem] "
            >&copy;2026 king james pharmacy. all rights reserved.</p>
          </div>
        </section>

    </div>

  )

}

export default Home

