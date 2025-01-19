export const ProjectDetailModal = ({
  isModalOpen = false,
  setIsModalOpen,
  selectedProject,
}) => {
  const closeModal = () => setIsModalOpen(false);

  return (
    isModalOpen && (
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-hidden"
        onClick={closeModal}
      >
        <div
          className="bg-white w-11/12 sm:w-10/12 md:w-2/3 lg:w-3/5 rounded-lg relative transition-transform duration-500 ease-in-out transform translate-y-[-100%] opacity-0 modal-animate"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6 px-6 sm:px-8 md:px-14 py-4 sm:py-6 border-b border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              {selectedProject?.title}
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800 transition text-2xl"
            >
              &times;
            </button>
          </div>

          {/* Modal Content */}
          <div className="overflow-auto max-h-[75vh] flex flex-col gap-4 py-4 sm:py-6 px-6 sm:px-8 md:px-14">
            {/* From and Contact Section */}
            <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
              <p className="text-sm text-gray-400">From: October 2023</p>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition"
              >
                Contact
              </button>
            </div>

            {/* Description */}
            <p className="text-gray-800 mb-4 text-sm sm:text-base lg:max-w-[85%] leading-relaxed">
              {selectedProject?.description}
            </p>

            {/* Project Details */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 text-sm text-gray-500 border-t pt-4">
              <div>
                <h4 className="font-semibold">Project Duration</h4>
                <p>1-3 months</p>
              </div>

              {/* Skills Section */}
              {selectedProject?.technologies &&
              selectedProject?.technologies?.length ? (
                <div className="mb-4 flex flex-col gap-2">
                  <h4 className="font-semibold text-gray-500">
                    Skills and Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.technologies?.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-transparent border border-gray-300 text-gray-500 rounded-full px-4 py-2 inline-block"
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* <div>
                <h4 className="font-semibold">Project Category</h4>
                <p className="bg-transparent border border-gray-300 rounded-full px-4 py-2 inline-block">
                  Website Development
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-1">
                <h4 className="font-semibold w-full sm:w-auto">
                  Services Provided
                </h4>
                <p className="bg-transparent border border-gray-300 rounded-full px-4 py-2 inline-block">
                  Website Development
                </p>
                <p className="bg-transparent border border-gray-300 rounded-full px-4 py-2 inline-block">
                  Website Development
                </p>
              </div> */}
            </div>

            {/* Image Section */}
            <div className="mb-4">
              {selectedProject?.images && selectedProject?.images?.length ? (
                selectedProject?.images?.map((image, index) => {
                  return (
                    <img
                      src={image}
                      key={index}
                      alt={"thumbnail Images" + index}
                      className="w-full  first:rounded-t-lg last:rounded-b-lg"
                    />
                  );
                })
              ) : (
                <img
                  src={selectedProject?.thumbnailImage}
                  alt="thumbnail Images"
                  className="w-full rounded-lg"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
