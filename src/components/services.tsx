

import React from 'react'

const Services = () => {

  return (

    <div>
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
    </div>

  )

}

export default Services

