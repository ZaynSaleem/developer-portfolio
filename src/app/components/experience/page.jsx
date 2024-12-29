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
              <div className="flex flex-col gap-4 pt-6" key={index}>
                {/* ============== Company Detail & Experience ============== */}
                <div className="flex items-center justify-between">
                  {/* ------------ Commpany name & Logo ------------ */}
                  <div className="flex items-center gap-4">
                    {/* ---------- LOGO ---------- */}
                    {experience?.logo && (
                      <span className="w-10 h-10 rounded-full border border-blue-400"></span>
                    )}

                    {/* --------- Designation and Company --------- */}
                    <h4 className="font-bold text-xl">
                      {experience?.designation || "Designation Here"} at{" "}
                      {experience?.company || "Company Here"}
                    </h4>
                  </div>

                  {/* --------- Start & End Date --------- */}
                  <div className="text-[#8491A0]">
                    {experience?.startDate} - {experience?.endDate}
                  </div>
                </div>

                {/* ============== DESCRIPTION ============== */}
                <p className="text-[#8491A0]">
                  {experience?.description || "Description Here"}
                </p>

                {/* ============== Technologies Worked on ============== */}
                {experience?.technologies &&
                experience?.technologies?.length ? (
                  <div className="flex gap-2">
                    {experience?.technologies?.map((technology, innerIndex) => {
                      return (
                        <div
                          key={innerIndex}
                          className="bg-teal-400/10 text-teal-300 rounded-full w-max px-4 py-2 text-center font-medium text-sm capitalize"
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
