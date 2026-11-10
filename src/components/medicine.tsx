import { useState } from "react"
import { Clock, Pill, ScanHeart, ShieldCheck } from "lucide-react"



const Medicine = () => {

    const [appointment, setAppointment] = useState<boolean>(false)

  return (

    <div>
        {/* more than medicine section */}
        <section id="health"
        className="min-h-screen h-auto p-6 bg-primary text-white relative
        grid grid-cols-1 items-center justify-center gap-6 md:grid-cols-2
        md:items-start container-medicine ">
          {/* health support div */}
          <div className="md:py-[4rem] health ">
            <p className="uppercase font-winky font-thin tracking-widest
            text-surface text-[14px] more-medicine
             ">Zaidi ya Dawa</p>
            <h2 className="font-puff text-[28px] py-3 md:text-[3.4rem]
            health-support
             ">Msaada wa afya unaoendana na maisha yako. </h2>
            <p className="font-winky font-thin pt-2 pb-6 md:text-[1.8rem]
            para ">
              Kuanzia chanjo za kawaida hadi mapitio ya dawa, wafamasia wetu
              wako hapa kurahisisha huduma za afya kwako.
            </p>
            <button onClick={ ()=> setAppointment(!appointment)}
            className="bg-yellow-500/70 px-2 py-1 rounded-[.2rem] font-puff
            tracking-widest font-thin md:text-[24px] cursor-pointer book "
            >Weka miadi</button>
          </div>

          {/* vaccinations div */}
          <div className="bg-green-400/10 rounded-[1rem] p-3 grid
          grid-cols-1 items-centr justify-center gap-y-6 md:grid-cols-2
          md:gap-x-0 md:my-[4rem] vaccinations ">

            {/* vaccine */}
            <div className="border-b border-surface p-2 md:border-none vaccine ">
              <ShieldCheck className="text-yellow-500 py-1 size-10 icon "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] heading ">chanjo</p>
              <p className="text-surface font-mono py-2 description ">
                Chanjo za mafua, na za kawaida, zinazotolewa na
                mfamasia mwenye mafunzo maalumu.
              </p>
            </div>

            {/* medication review */}
            <div className="border-b border-surface p-2 md:border-none ">
              <Pill className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">Mapitio ya Dawa</p>
              <p className="text-surface font-mono py-2 ">
                Ushauri na msaada wa kibinafsi ili unufaike
               zaidi na dawa zako.
              </p>
            </div>

            {/* same day treatment */}
            <div className="border-b border-surface p-2 md:border-none ">
              <Clock className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">Matibabu ya  Siku Moja</p>
              <p className="text-surface font-mono py-2 ">
                Huduma ya usafirishaji wa dawa ulizoandikiwa
                na mahitaji muhimu ya afya hadi nyumbani kwako.
              </p>
            </div>

            {/* health checks */}
            <div className="border-b border-surface p-2 md:border-none ">
              <ScanHeart className="text-yellow-500 py-1 size-10 "/>
              <p className="capitalize font-winky tracking-widest py-2 
              font-thin text-[18px] ">Vipimo vya Afya</p>
              <p className="text-surface font-mono py-2 ">
                Vipimo vya shinikizo la damu, hatari ya kisukari
                na uchunguzi wa afya ya moyo.
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
              font-puff text-[16px] mb-3 md:w-[10%] " >ghairi</button>
              </div>
            {/* appointment form */}
            <div>
              <form action="#">
                {/* name */}
                <div className="name py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2
                   ">majina yako:</p>
                  <input type="text" placeholder="Frank njolowelo"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>

                {/* email */}
                <div className="email py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2
                   ">barua pepe:</p>
                  <input type="email" placeholder="njolowelo@gmail.com"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>

                {/* phone number */}
                <div className="email py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2
                   ">nambari ya simu:</p>
                  <input type="number" placeholder="+255 766 355 608"
                  className=" w-full outline-none border-b border-b-2 px-2 py-1
                  border-yellow-500 rounded-[.2rem] "
                  />
                </div>

                {/* subject matter */}
                <div className="subject py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2
                   ">mada husika:</p>
                  <textarea name="subject" id="subject" cols={8} rows={3}
                  placeholder="lorem ipsum dolor sit amet..."
                  className="border-b border-b-2 border-yellow-500 w-full
                  rounded-[.2rem] "
                  ></textarea>
                </div>

                {/* date */}
                <div className="date py-2 px-6 ">
                  <p className="font-winky capitalize text-[18px] py-2
                   ">chagua tarehe:</p>
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
                >wasilisha</button>

              </form>
            </div>
            </div>

          </div>
        )}

        </section>
    </div>

  )

}

export default Medicine

