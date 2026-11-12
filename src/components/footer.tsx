import { Mail, MessageCircle, PhoneCall } from 'lucide-react'




const Footer = () => {

  return (

    <div>
        {/* footer section */}
        <section id="footer" className="h-auto p-6 ">

          {/* logo */}
          <div className='pt-6'>
              <h1 className='font-puff tracking-wide text-[1.3rem]
              md:text-[2rem]'>
                  <span className='text-primary text-[2rem] saturate-200
                  md:text-[3rem] '>k</span>
                  <span>ing</span>
                  <span className='capitalize'>&nbsp;james</span> <br />
                  <span>pharmacy</span>
              </h1>
              <p className="py-3 font-winky font-thin text-black/70
              text-[18px] md:text-[2rem] leading-[2rem] md:pr-[28rem]
              md:leading-[3rem] "
              >Huduma za kisasa za famasia,
              zenye mizizi imara katika jamii tangu mwaka 2012.</p>
          </div>

          <div className="grid grid-cols-2 items-center justify-center
          md:grid-cols-3 gap-y-8 gap-x-12 py-4 ">       

            {/* quick links */}
            <div className="">
              <h1 className="font-puff text-primary py-2 ">pharmacy</h1>
              <nav className="flex flex-col items-start justify-start
              gap-y-1">
                <a href="#hero" className="text-black/70 font-winky
                tracking-wide ">nyumbani</a>
                <a href="#care" className="text-black/70 font-winky
                tracking-wide ">huduma zetu</a>
                <a href="#contact" className="text-black/70 font-winky
                tracking-wide ">wasiliana nasi</a>
              </nav>
            </div>
            
            {/* social media */}
            <div className="" >
              <h1 className="font-puff text-primary py-2 
              ">mitandao ya kijamii</h1>
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

            {/* contacts */}
            <div className="" >
              <h1 className="font-puff text-primary py-2 
              ">tuwasiliane</h1>
              <nav className="flex flex-col items-start justify-start
              gap-y-1 ">

                {/* phone number */}
                <a href="tel:+255766355608"
                className="text-black/70 font-winky tracking-wide py-1
                flex items-center justify-start gap-2 ">
                  <PhoneCall className='size-4'/>
                  <p className='w-full'>+255 766 355 608</p>
                </a>
                {/* email adress */}
                <a href="mailto:vincentfrank5432@gmail.com"
                className="text-black/70 font-winky tracking-wide py-1
                flex items-center justify-start gap-2 ">
                  <Mail className='size-4'/>
                  <p className='w-full'>vincentfrank5432@gmail.com</p>
                </a>

                {/* chat message */}
                <a href="sms:+255766355608"
                className="text-black/70 font-winky tracking-wide py-1
                flex items-center justify-start gap-2 ">
                  <MessageCircle className='size-4'/>
                  <p className='w-full'>+255 766 355 608</p>
                </a>
                
              </nav>
            </div>

          </div>

          {/* all rights div */}
          <div className="pt-10 pb-2 md:pt-16 " >
            <p className="font-titan font-thin text-black/50 tracking-widest
            capitalize text-center md:text-[3rem] "
            >&copy;2026 king james pharmacy. Haki zote zimehifadhiwa.</p>
          </div>

        </section>
    </div>

  )

}

export default Footer

