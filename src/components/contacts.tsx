import { MapPin } from "lucide-react"



const Contacts = () => {

  return (

    <div>
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
                pharmacy yako ya karibu, popote ulipo.
              </h1>
              <p className="font-winky font-thin tracking-wide pt-3 text-[18px]
              pb-6 md:text-[1.8rem] text-black/70 ">
                Tembelea duka letu upate ushauri wa kibinafsi,
                huduma za haraka za dawa ulizoandikiwa na
                vipimo vya magonjwa yasiyoambukiza.
                Tunahudumu kwa saa 12 kila siku.
              </p>
              <a href="#"
              className="bg-primary text-white font-titan tracking-widest px-2
              py-1 rounded-[.2rem] font-thin my-3 inline-block md:text-[1.3rem] "
              >tuzungumze pamoja</a>
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
    </div>

  )

}

export default Contacts

