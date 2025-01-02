import Heading from "@/components/heading/heading";

import ExperienceJson from "@/json/experience/experience.json";

const ExperienceSection = () => {
  return (
    <div className="flex flex-col gap-8 container">
      {/* ============== HEADING ============== */}
      <Heading title={"EXPERIENCE"} />

      {ExperienceJson && ExperienceJson?.length
  ? ExperienceJson?.map((experience, index) => {
      return (
        <div
          className="flex flex-col gap-6 pt-6 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
          key={index}
        >
          {/* ============== Company Detail & Experience ============== */}
          <div
            className="flex flex-col justify-between gap-1 sm:gap-6 sm:flex-row sm:items-center md:gap-8 lg:gap-10"
          >
            {/* ------------ Company name & Logo ------------ */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              {/* ---------- LOGO ---------- */}
              {experience?.logo && (
                <span className="w-10 h-10 rounded-full border border-blue-400 sm:w-12 sm:h-12 lg:w-14 lg:h-14"></span>
              )}

              {/* --------- Designation and Company --------- */}
              <h4 className="font-bold text-lg sm:text-xl md:text-2xl">
                {experience?.designation || "Designation Here"} at{" "}
                {experience?.company || "Company Here"}
              </h4>
            </div>

            {/* --------- Start & End Date --------- */}
            <div
              className="text-sm sm:text-base text-[#8491A0] text-left sm:text-right"
            >
              {experience?.startDate} - {experience?.endDate}
            </div>
          </div>

          {/* ============== DESCRIPTION ============== */}
          <p className="text-sm sm:text-base md:text-lg text-[#8491A0] leading-relaxed sm:leading-6">
            {experience?.description || "Description Here"}
          </p>

          {/* ============== Technologies Worked on ============== */}
          {experience?.technologies && experience?.technologies?.length ? (
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {experience?.technologies?.map((technology, innerIndex) => {
                return (
                  <div
                    key={innerIndex}
                    className="bg-teal-400/10 text-teal-300 rounded-full px-4 py-2 text-center font-medium text-xs sm:text-sm capitalize"
                  >
                    {technology || "technology"}
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      );
    })
  : ""}

    </div>
  );
};

export default ExperienceSection;
