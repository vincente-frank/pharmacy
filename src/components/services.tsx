import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"


gsap.registerPlugin(ScrollTrigger, SplitText)

const Services = () => {

  function serviceAnimation () {
    let serviceContainer = document.querySelector(".services")
    let servicesHeading = document.querySelector(".services-heading")
    let title = document.querySelector(".services-title")
    let split = SplitText.create(title, {type:"chars"})
    let description = document.querySelector(".services-description")
    let splitDescription = SplitText.create(description, {type: "lines"})
    let servicesImage = document.querySelector(".services-image")
    let vitamin = document.querySelector(".vitamin")
    let personal = document.querySelector(".personal")
    let medicine = document.querySelector(".medicine")
    let baby = document.querySelector(".baby")
    let advice = document.querySelector(".advice")
    let duration = 0.7
    let stagger = 0.05

    const tl = gsap.timeline()
    .from(vitamin, {x:250, duration:duration, opacity:0})
    .from(personal, {x:-251, duration:duration, opacity:0})
    .from(medicine, {x:250, duration:duration, opacity:0})
    .from(baby, {x:-250, duration:duration, opacity:0})
    .from(advice, {x:250, duration:duration, opacity:0})


    // services heading timeline
    let headingTimeline = gsap.timeline()
    .from(split.chars, {opacity:0, y:80, stagger:{
      each:stagger, from:"center"}})
    .from(splitDescription.lines, {opacity: 0, stagger:stagger, duration:duration,
      y:80},"-=0.4")
      .from(servicesImage, {opacity: 0, y:80, duration:duration},"+=0.1")

      // headingTimeline scroll trigger
      ScrollTrigger.create({
        animation: headingTimeline,
        trigger: servicesHeading,
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none reverse"
      })

      // tl scroll trigger
    ScrollTrigger.create({
      animation: tl,
      trigger: serviceContainer,
      start: "top top",
      end: "+=5000",
      scrub: true,
      pin: true
    })
    

  }

  useGSAP ( ()=> { serviceAnimation() }, [] );


  return (

    <div>
        {/* our services section */}
        <section id="services"
        className="min-h-screen h-auto p-6 flex flex-col relative
        overflow-hidden services ">
          
          {/* heading */}
          <div className="services-heading">
            <h1 className="font-puffy text-primary font-black tracking-wide
          lowercase text-[2rem] services-title ">huduma zetu</h1>
          <p className="pt-3 font-winky font-thin text-[24px] pb-6
          services-description ">
            Tunatoa huduma bora za afya zinazokidhi mahitaji yako,
            kwa uangalifu, uaminifu na utaalamu.
          </p>
          <img src="/welcome.webp" alt=""
          className="rounded-[1rem] cursor-pointer aspect-square
          object-cover h-[20rem] md:object-top md:h-[27rem] w-full
          services-image "/>
          </div>

          {/* vitamin supplement div */}
          <section id="vitamin"
          className="h-screen p-6 text-center flex flex-col
          items-center justify-center gap-y-2 absolute inset-0
          bg-background vitamin ">
            {/* image */}
            <img src="/vitamin.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[2rem] ">virutubisho vya vitamini</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Virutubisho bora vya vitamini vinavyosaidia kuimarisha afya yako,
              kuongeza kinga ya mwili na kukupa nguvu za kila siku.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>

          {/* personal care div */}
          <section id="personal"
          className="h-screen p-6 text-center flex flex-col
          items-center justify-center gap-y-2 absolute inset-0
          bg-primary personal ">
            {/* image */}
            <img src="/care.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-xl
            shadow-surface md:size-24 bg-background "
            />
            {/* title */}
            <h2 className="font-puff text-white py-2 capitalize tracking-wide
            md:text-[3rem] ">kujijali</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem]
            text-surface ">
              Bidhaa bora za kujitunza na kujijali zinazokusaidia kudumisha usafi,
              afya ya mwili na kujiamini kila siku.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >fika ofisini kwetu</a>
          </section>

          {/*medicine prescriptions div */}
          <section id="medicine"
          className="h-screen p-6 text-center flex flex-col
          items-center justify-center gap-y-2 absolute inset-0
          bg-background medicine ">
             {/* image */}
            <img src="/medicines.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[3rem] ">Dawa na Maagizo ya Daktari</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Pata dawa zilizoidhinishwa na huduma za maagizo ya daktari kwa
              ushauri na uangalizi wa wafamasia wenye utaalamu.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>

          {/*baby & children care div */}
          <section id="baby"
          className="h-screen p-6 text-center flex flex-col
          items-center justify-center gap-y-2 absolute inset-0
          bg-background baby ">
            {/* image */}
            <img src="/baby.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[3rem] ">Huduma za Watoto na Watoto Wachanga</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Bidhaa salama na bora kwa afya, lishe na utunzaji wa watoto
              wako katika kila hatua ya ukuaji.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>

          {/* advice & consultation div */}
          <section id="advice"
          className="h-screen p-6 text-center flex flex-col
          items-center justify-center gap-y-2 absolute inset-0
          bg-background advice ">
            {/* image */}
            <img src="/advice.svg" alt="orange juice vitamin supplement"
            className=" size-16 rounded-full my-3 shadow shadow-md 
            shadow-primary md:size-24 "
            />
            {/* title */}
            <h2 className="font-puff text-primary py-2 capitalize tracking-wide
            md:text-[3rem] ">Ushauri na Mashauriano ya Afya</h2>
            <p className="font-winky font-thin text-[16px] pb-3 md:text-[1.8rem] ">
              Pata ushauri wa kitaalamu kutoka kwa wafamasia wetu ili kukusaidia
              kufanya maamuzi sahihi kuhusu afya yako.
            </p>
            <a href="#contact"
            className=" bg-surface px-2 py-1 text-primary font-titan
            rounded-[.2rem] tracking-wide text-[20px] "
            >wasiliana nasi</a>
          </section>

        </section>
    </div>

  )

}

export default Services

