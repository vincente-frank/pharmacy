import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import { MapPin } from "lucide-react"


gsap.registerPlugin(ScrollTrigger, SplitText)

const Contacts = () => {

  function contactsAnimation ():gsap.core.Timeline {
    let contacts = document.querySelector(".contacts")
    let map = document.querySelector(".contacts-map")
    let title = document.querySelector(".contacts-title")
    let description = document.querySelector(".contacts-description")
    let descriptionSplit = SplitText.create(description, {type:"lines"})
    let link = document.querySelector(".contacts-link")
    let contactsImage = document.querySelector(".contacts-image")
    let duration = 0.7
    let stagger = 0.1
    const matchmedia = gsap.matchMedia()
    const tl = gsap.timeline()

    // mobile view
    matchmedia.add("(max-width: 799px)", ()=> {
    tl.from(map, {opacity:0, y:80, duration:duration})
    tl.from(title, {opacity:0, y:80, duration:duration, ease:"back"})
    tl.from(descriptionSplit.lines, {opacity:0, y:80,
      duration:duration, stagger:stagger},"-=0.3")
    tl.from(link, {opacity:0, x:180, duration:duration,
      ease:"back", scale:0.3})
    tl.from(contactsImage, {opacity:0, y:80, duration:duration,
      ease:"back"})
      });

      // desktop view
      matchmedia.add("(min-width: 800px)", ()=> {
      tl.from(map, {opacity:0, y:80, duration:duration})
      tl.from(title, {opacity:0, y:80, duration:duration, ease:"back"})
      tl.from(descriptionSplit.lines, {opacity:0, y:80,
        duration:duration, stagger:stagger},"-=0.3")
      tl.from(link, {opacity:0, x:180, duration:duration,
        ease:"back", scale:0.3})
      });

      // scroll trigger animation
      ScrollTrigger.create({
        animation: tl,
        trigger: contacts,
        start: "top 80%",
        end: "top 10%",
        toggleActions: "restart none none reverse",
      })

    return tl;
  }

  useGSAP( ()=> { contactsAnimation() }, []);

  return (

    <div>
        {/* contacts section */}
        <section id="contact"
        className="min-h-screen h-auto p-6 bg-gradient-to-b
        from-primary via-transparent to-transparent border-b
        border-surface contacts ">
          <div className="h-auto bg-background rounded-[1rem] grid
          grid-cols-1 items-center justify-center md:items-start
          gap-6 md:grid-cols-2 ">
            {/* location */}
            <div className="py-12 px-3">
              <MapPin fill="background" className="text-primary bg-surface
              rounded-full size-10 p-1 contacts-map "
              />
              <h1 className="font-puff py-3 text-[26px] md:text-[3rem]
              text-primary contacts-title ">
                pharmacy yako ya karibu, popote ulipo.
              </h1>
              <p className="font-winky font-thin tracking-wide pt-3 text-[18px]
              pb-6 md:text-[1.8rem] text-black/70 contacts-description ">
                Tembelea duka letu upate ushauri wa kibinafsi,
                huduma za haraka za dawa ulizoandikiwa na
                vipimo vya magonjwa yasiyoambukiza.
                Tunahudumu kwa saa 12 kila siku.
              </p>
              <a href="tel:+255766355608"
              className="bg-primary text-white font-titan tracking-widest
              px-2 py-1 rounded-[.2rem] font-thin my-3 inline-block
              md:text-[1.3rem] contacts-link "
              >tuzungumze pamoja</a>
            </div>
            {/* pharmacy image */}
            <div className="p-4 bg-surface rounded-[1rem] contacts-image ">
              <img src="/consultation.webp" alt="pharmacy consultation image"
              className="rounded-[.2rem] aspect-square object-cover
              cursor-pointer hover:scale-102 hover:shadow
              hover:shadow-md hover:shadow-primary ease-in-out
              duration-700 transition-all "
              />
            </div>

          </div>
        </section>
    </div>

  )

}

export default Contacts

