import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"


gsap.registerPlugin(ScrollTrigger, SplitText)

const Care = () => {

  function careAnimation ():gsap.core.Timeline {
    let care = document.querySelector(".care")
    let title = document.querySelector(".care h2")
    let description = document.querySelector(".care p")
    let split = SplitText.create(title, {type:"chars"})
    let descriptionSplit = SplitText.create(description, {type:"lines"})
    let duration = 0.7
    let stagger = 0.05
    const tl = gsap.timeline()
    .from(split.chars, {opacity:0, y:80, stagger:stagger,
      duration:duration})
    .from(descriptionSplit.lines, {opacity:0, y:80, stagger:stagger,
      duration:duration})

      ScrollTrigger.create({
        animation: tl,
        trigger: care,
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none reverse",
      })

    return tl;
  }

  useGSAP ( ()=> { careAnimation() }, [] );

  return (

    <div>
        {/* care without pain section */}
        <section id="care"
        className="h-screen p-6 flex items-center justify-center
        flex-col text-center care ">
          {/* title */}
          <h2 className="font-puff text-primary text-[3rem]
          tracking-wide md:text-[6rem] md:px-[18rem] md:pb-8
          px-5 ">Huduma bila usumbufu</h2>
          <p className="font-winky py-4 text-[24px] font-thin
          tacking-widest md:text-[40px] md:px-[12rem] ">
            kila kitu unachohitaji kutoka kwenye
            duka lako la dawa la karibu.
          </p>
        </section>
    </div>

  )

}

export default Care

