import { Check, Clock, MapPin, Pill, ScanHeart, ShieldCheck } from "lucide-react"
import Navigation from "./Navigation"
import gsap from "gsap"
import { SplitText } from "gsap/SplitText"
import TextPlugin from "gsap/TextPlugin"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import { useState } from "react"




const Home = () => {

  gsap.registerPlugin(SplitText, TextPlugin, ScrollTrigger);

  const [appointment, setAppointment] = useState<boolean>(false)

  // sliding panel animation it scroll driven
  function slidePanels ():gsap.core.Timeline {
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
      return tl;
    }
    // hero animation function
  function heroAnimation ():gsap.core.Timeline {
      let hero = document.querySelector(".hero")
      let heroCare = document.querySelector(".hero-care")
      let heroHead = document.querySelector(".hero-head")
      let heroFeel = document.querySelector(".hero-feel")
      let heroLive = document.querySelector(".hero-live")
      let heroDescription = document.querySelector(".hero-description")
      let heroShop = document.querySelector(".hero-shop")
      let heroHealth = document.querySelector(".hero-health")
      let heroLicensed = document.querySelector(".hero-licensed")
      let heroSecured = document.querySelector(".hero-secured")
      let heroImage = document.querySelector(".hero-image")
      let duration = 2
      const heroTimeline = gsap.timeline()
      .from(hero, {autoAlpha:1})
      .from(heroCare, {opacity:0, scale:0.4, x: 80, duration:duration },"<")
      .from(heroImage, {opacity:0, y:80, duration:1},"<")
      .from(heroFeel, {opacity:0, y:80, duration:1},"-=1.5")
      .from(heroLive, {opacity:0, y:80, duration:1},"-=0.8")
      .from(heroDescription, {opacity:0, y:80, duration:1},"-=0.8")
      .from(heroShop, {opacity:0, scale:0.4, x: 80, duration:duration },"<")
      .from(heroHealth, {opacity:0, scale:0.4, x: -80, duration:duration },"-=1")
      return heroTimeline;
    }
    // care reveal animation function
    function careAnimation ():gsap.core.Timeline {
      let care = document.querySelector(".care")
      let heading = document.querySelector(".care h2")
      let paragraph = document.querySelector(".care p")
      let duration = 3
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: care,
          start: "top 85%",
          end: "bottom bottom",
          scrub: true,
        }
      })
      .from(heading, {opacity:0, scale:0.4, y:100, ease:"back",
      duration:duration})
      .from(paragraph, {opacity:0, duration: duration,
      xPercent:100},"-=1.2")

      return tl;
    }
    // health support animation function
    function healthAnimation ():gsap.core.Timeline {
      let medicine = document.querySelector(".container-medicine")
      let healthDiv = document.querySelector(".health")
      let moreMedicine = document.querySelector(".more-medicine")
      let heading = document.querySelector(".health-support")
      let para = document.querySelector(".para")
      let appointment = document.querySelector(".book")
      let vaccinationsDiv = document.querySelector(".vaccinations")
      let duration = 3
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: medicine,
          start: "top 80%",
          end: "+=400",
          scrub: true,
        }
      })
      .from(moreMedicine, {opacity:0, scale:0.4, y:100, ease:"back",
      duration:duration})
      .from(heading, {opacity:0, scale:0.4, y:100, ease:"back",
      duration:duration})
      .from(para, {opacity:0, y:100, ease:"back",
      duration:duration})
      .from(appointment, {opacity:0, scale:0.4, x:100, ease:"back",
      duration:duration})
      .from(vaccinationsDiv, {opacity:0, x:100, ease:"back",
      duration:duration})

      return tl;
    }
    // services heaading animation function
    function servicesHeading ():gsap.core.Timeline {
      let services = document.querySelector(".services-head")
      let serviceTitle = document.querySelector(".services-title")
      let serviceDescription = document.querySelector(".services-description")
      let serviceImage = document.querySelector(".services-image")
      let splitTitle =  SplitText.create(serviceTitle, {type:"chars"})
      let duration = 2
      const tl = gsap.timeline()
      .from(splitTitle.chars, {opacity:0, ease:"back", duration:duration,
        stagger:0.05, y:gsap.utils.wrap([100, -100])
      })
      .from(serviceDescription, {opacity:0, y:80, ease:"back", duration:duration,
        stagger:0.05,},"<")
      .from(serviceImage, {opacity:0, y:80, ease:"back", duration:duration,
       stagger:0.05,},"<")

      ScrollTrigger.create({
        trigger: services,
        start: "top 80%",
        end: "bottom 10%",
        scrub: true,
        markers: true,
        animation: tl
      })
      return tl;

    }

  useGSAP ( ()=> {
    
    heroAnimation()
    careAnimation()
    servicesHeading()
    slidePanels()
    healthAnimation()

  }, []);


  return (

    <div className='bg-background container '>

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

        {/* care without pain section */}
        <section id="care"
        className="p-6 h-[30rem] text-center py-[4rem]
        md:py-[5rem] care ">
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
        <section id="services"
        className="min-h-screen h-auto p-6 flex flex-col relative
        overflow-hidden services services-head ">
          <h1 className="font-puffy text-primary font-black tracking-wide
          lowercase text-[2rem] services-title ">huduma zetu</h1>
          <p className="pt-3 font-winky font-thin text-[24px] pb-6
          services-description ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Deleniti veritatis corrupti inventore?
          </p>
          <img src="/welcome.webp" alt=""
          className="rounded-[1rem] cursor-pointer aspect-square
          object-cover h-[20rem] md:object-top md:h-[30rem] services-image "
          />

          {/* vitamin supplement div */}
          <section id="vitamin"
          className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background vitamin ">
            {/* image */}
            <img src="/vitamin.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[2rem] ">virutubisho vya vitamini</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>
          {/* personal care div */}
          <section id="personal"
          className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-primary personal ">
            {/* image */}
            <img src="/care.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-xl
            shadow-surface md:size-24 bg-background "
            />
            {/* title */}
            <h2 className="font-puff text-white py-2 capitalize tracking-wide
            md:text-[3rem] ">personal care</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem]
            text-surface ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >fika ofisini kwetu</a>
          </section>
          {/*medicine prescriptions div */}
          <section id="medicine"
          className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background medicine ">
             {/* image */}
            <img src="/medicines.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[3rem] ">Medicine & Prescriptions</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>
          {/*baby & children care div */}
          <section id="baby"
          className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background baby ">
            {/* image */}
            <img src="/baby.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[3rem] ">child infant care</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>
          {/* advice & consultation div */}
          <section id="advice"
          className="h-screen p-6 text-center flex flex-col items-center
          justify-center gap-y-2 absolute inset-0 bg-background advice ">
            {/* image */}
            <img src="/advice.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[3rem] ">advice & consultation</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Quaerat quasi ab veniam.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>

        </section>

        {/* more than medicine section */}
        <section id="health"
        className="min-h-screen h-auto p-6 bg-primary text-white relative
        grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2
        md:items-start container-medicine ">
          {/* health support div */}
          <div className="md:py-[4rem] health ">
            <p className="uppercase font-winky font-thin tracking-widest
            text-surface text-[14px] more-medicine ">more than medicine</p>
            <h2 className="font-puff text-[28px] py-3 md:text-[3.4rem]
            health-support " >Health support that fits your life. </h2>
            <p className="font-winky font-thin pt-2 pb-6 md:text-[1.8rem]
            para ">
              From routine vaccinations to medication reviews, our
              pharmacists are here to make healthcare feel simpler.
            </p>
            <button onClick={ ()=> setAppointment(!appointment)}
            className="bg-yellow-500/70 px-2 py-1 rounded-[.2rem] font-puff
            tracking-widest font-thin md:text-[24px] cursor-pointer book "
            >Book an appointment</button>
          </div>
          {/* vaccinations div */}
          <div className="bg-green-400/10 rounded-[1rem] p-3 grid
          grid-cols-1 items-centr justify-center gap-y-6 md:grid-cols-2
          md:gap-x-0 md:my-[4rem] vaccinations ">
            {/* vaccine */}
            <div className="border-b border-surface p-2 md:border-none vaccine ">
              <ShieldCheck className="text-yellow-500 py-1 size-10 icon "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] heading ">vaccinations</p>
              <p className="text-surface font-mono py-2 description ">
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

          {/* book an appoinment modal */}
        {appointment && (
          <div className="h-auto bg-surface/10 absolute inset-0
          backdrop-blur-sm px-3 py-[16rem] md:px-6 md:py-3 md:backdrop-blur-3xl  ">
            <div className="border border-2 border-surface rounded-[.9rem] ">
              {/* cancel button */}
              <div className="flex items-center justify-end px-6 ">
                <button onClick={ ()=> setAppointment(!appointment)}
              className="bg-background text-primary px-2 py-1 rounded-[.2rem]
              w-[32%] mt-8 shadow shadow:md shadow-surface cursor-pointer
              font-puff text-[16px] mb-3 md:w-[10%] " >cancel</button>
              </div>
            {/* appointment form */}
            <div>
              <form action="#">
                {/* name */}
                <div className="name py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2 ">your name:</p>
                  <input type="text" placeholder="Frank njolowelo"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>
                {/* email */}
                <div className="email py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2 ">email address:</p>
                  <input type="email" placeholder="njolowelo@gmail.com"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>
                {/* phone number */}
                <div className="email py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2 ">phone number:</p>
                  <input type="number" placeholder="+255 766 355 608"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>
                {/* subject matter */}
                <div className="subject py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2 ">subject matter:</p>
                  <textarea name="subject" id="subject" cols={8} rows={3}
                  placeholder="lorem ipsum dolor sit amet..."
                  className="border-b border-b-2 border-yellow-500 w-full
                  rounded-[.2rem] "
                  ></textarea>
                </div>
                {/* date */}
                <div className="date py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2 ">pick your date:</p>
                  <input type="date"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>
                {/* save or submit button  */}
                <button type="submit" onClick={ ()=> setAppointment(!appointment)}
                className="mx-6 my-2 font-puff bg-background text-primary
                px-2 py-1 rounded-[.2rem] w-[32%] md:w-[10%] mb-3
                cursor-pointer "
                >submit</button>

              </form>
            </div>
            </div>

          </div>
        )}

        </section>

        {/* contacts section */}
        <section id="contact"
        className="min-h-screen h-auto p-6 bg-gradient-to-b
        from-primary via-transparent to-transparent border-b border-surface ">
          <div className="h-auto bg-background rounded-[1rem] grid grid-cols-1
          items-center justify-center md:items-start gap-6 md:grid-cols-2 ">
            {/* location */}
            <div className="py-12 px-3">
              <MapPin fill="background" className="text-primary bg-surface rounded-full
              size-10 p-1"
              />
              <h1 className="font-puff py-3 text-[26px] md:text-[3rem]
              text-primary ">
                Your neighborhood pharmacy, wherever you are
              </h1>
              <p className="font-winky font-thin tracking-wide pt-3 text-[18px]
              pb-6 md:text-[1.8rem] text-black/70 ">
                Stop by for personal advice, quick prescriptions,
                and a familiar face. We have 24 locally owned
                locations ready to help.
              </p>
              <a href="#"
              className="bg-primary text-white font-titan tracking-widest px-2
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
        <section id="footer" className="h-screen p-6 ">
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
                <a href="#hero" className="text-black/70 font-winky tracking-wide
                ">Home</a>
                <a href="#care" className="text-black/70 font-winky tracking-wide
                ">Services</a>
                <a href="#contact" className="text-black/70 font-winky tracking-wide
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

