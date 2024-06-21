import React from "react";
import Cards from "./Cards";

function Details() {
  return (
    <>
      <div className=" md:flex my-10  ">
        <div className="   h-full w-full flex  flex-col p-2 gap-4 ">
          <div>
            <p className=" font-bold text-2xl">
              International Aid Arrives In Flood-Hit Libya As More Bodies Wash
              Ashore
            </p>
          </div>
          <div className="flex w-full h-auto gap-4  flex-col md:flex-row justify-center ">
            <div className=" w-full md:max-w-full h-full   ">
              <img
                className=" w-full h-full object-cover rounded-xl"
                src="https://ichef.bbci.co.uk/news/1024/branded_news/ce48/live/3b1127f0-2e31-11ef-a044-9d4367d5b599.png"
              />
              <p className=" font-bold text-sm md:text-base text-balance px-2">
                Lockdown mode requires a PIN or password to unlock your phone
                the next time it's used. Know how to do it and why you might
                want to before you need it
              </p>
              <p className=" text-sm text-justify px-2">
                This study was a preliminary study of high school student value
                changes because of the terrorist attack on the U.S. The major
                limitations of this study were that the student population was
                from California and might not truly represent all high school
                students in the U.S. Further, this study could not be considered
                a truly longitudinal study because of privacy issues that
                prevented the researchers from identifying all the students who
                returned surveys before the attack. In addition, the senior
                class had graduated the previous year, and a much larger
                freshman class entered the school. These issues not only made
                the samples similar, but also different in their composition.
                The researchers will conduct periodic studies to explore whether
                these value changes are permanent and continue into adulthood.
                We do not know what if any changes will take place in their
                values as they grow older, and we will continue to explore their
                values in our longitudinal studies of the impact of the 9/11
                terrorist attacks. In brief, the mummification process may be
                summarized as follows: extract, sterilize, dehydrate, perfume,
                seal, tag, and stock. All were done ceremoniously and with due
                respect to the dead body. The viscera were extracted through an
                incision about 10 inches long, usually made in the left side of
                the abdomen. Through this incision, all the “floating” contents
                of the abdominal cavity, namely, the stomach, the liver, the
                spleen, and the intestines, were removed but the kidneys were
                left in place. The diaphragm was then cut and the thoracic
                contents removed through the abdominal incision. The heart,
                which was considered the center of emotions and the seat of
                conscience, was left in place. The ancient Egyptians seem to
                have attached no importance to the brain, which was removed
                through the ethmoid bone. Following these extractions began the
                slow process of sterilization and dehydration of the body,
                accomplished by osmosis with dry natron. Resterilization of the
                cavities, perfuming, closing the incision, and wrapping the body
                with linen and with beeswax completed the process. Molten resin
                was used to seal the body and its wrappings, providing a barrier
                against insects and anaerobes. This study was a preliminary
                study of high school student value changes because of the
                terrorist attack on the U.S. The major limitations of this study
                were that the student population was from California and might
                not truly represent all high school students in the U.S.
                Further, this study could not be considered a truly longitudinal
                study because of privacy issues that prevented the researchers
                from identifying all the students who returned surveys before
                the attack. In addition, the senior class had graduated the
                previous year, and a much larger freshman class entered the
                school. These issues not only made the samples similar, but also
                different in their composition. The researchers will conduct
                periodic studies to explore whether these value changes are
                permanent and continue into adulthood. We do not know what if
                any changes will take place in their values as they grow older,
                and we will continue to explore their values in our longitudinal
                studies of the impact of the 9/11 terrorist attacks. In brief,
                the mummification process may be summarized as follows: extract,
                sterilize, dehydrate, perfume, seal, tag, and stock. All were
                done ceremoniously and with due respect to the dead body. The
                viscera were extracted through an incision about 10 inches long,
                usually made in the left side of the abdomen. Through this
                incision, all the “floating” contents of the abdominal cavity,
                namely, the stomach, the liver, the spleen, and the intestines,
                were removed but the kidneys were left in place. The diaphragm
                was then cut and the thoracic contents removed through the
                abdominal incision. The heart, which was considered the center
                of emotions and the seat of conscience, was left in place. The
                ancient Egyptians seem to have attached no importance to the
                brain, which was removed through the ethmoid bone. Following
                these extractions began the slow process of sterilization and
                dehydration of the body, accomplished by osmosis with dry
                natron. Resterilization of the cavities, perfuming, closing the
                incision, and wrapping the body with linen and with beeswax
                completed the process. Molten resin was used to seal the body
                and its wrappings, providing a barrier against insects and
                anaerobes.
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[35%] flex  w-full flex-col">
          <div className=" flex px-2 items-center py-5 gap-2 ">
            <p className=" w-1 h-8 bg-red-500"></p>
            <p className=" font-bold text-2xl">Big Stories</p>
          </div>
          <div className="w-full flex  flex-col p-2">
            {[1, 2, 3, 4, 5, 6].slice(0, 4).map((item: any, index: any) => (
              <div className="flex w-full p-2 rounded-xl gap-4  flex-col md:flex-row shadow-xl  transition ease-in-out delay-150 hover:-translate-y-0 hover:scale-110  duration-500 ">
                <img
                  className="md:w-[150px] md:h-[200px] object-cover rounded-xl "
                  src="https://assets2.cbsnewsstatic.com/hub/i/r/2024/06/12/9d0eb2a1-8a4c-464e-a59f-40a95d271a94/thumbnail/1200x630g2/5415d521bf16a916abf64fa2cd446062/ap24164789956147.jpg?v=cb1f2643a8816828741cfb3a3fb2d931"
                />
                <div className=" flex flex-col justify-center ">
                  <p className=" font-bold">{item.title}</p>
                  <p className=" font-normal text-sm md:text-sm text-justify">
                    An FBI agent testified that Menendez's internet history
                    since 2008 showed that he had never searched for gold prices
                    until April 5, 2019.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}

export default Details;
