export default function Contact() {
    return (
      <div className="h-screen w-full flex justify-center items-center mx-auto bg-[#0a2335]">
        {/* foam */}
        <div className="h-[750px] md:h-[900px]  lg:h-[700px] w-[60%]  md:w-[60%] lg:w-[60%]  rounded-lg mt-10 mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-7xl font-bold text-white text-center mt-[15px] text-blur-out">
            Contact <span className="text-[#03AAe4]">Us</span>
          </h1>
  
          <form>
            <div className="grid xl:grid-cols-2 grid-cols-1 mx-7 pt-5 md:pt-16 ">
              <input
                className=" text-white text-sm md:text-xl lg:text-2xl  py-3 px-3 w-[auto] md:w-[400px] lg:w-[550px] h-[60px] border-[3px] gap-x-7 bg-[#0a2335] outline-4 mt-2  border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000 "
                type="text"
                placeholder="Your Name"
              />
              <input
               className="text-white  text-sm md:text-xl lg:text-2xl w-[auto] md:w-[400px] lg:w-[550px] h-[60px] py-3 px-3 border-[3px] mt-2 gap-x-7 bg-[#0a2335] border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="text-white  text-sm md:text-xl lg:text-2xl w-[auto] md:w-[400px] lg:w-[550px] h-[60px] py-3 px-3 border-[3px] mt-2 gap-x-7 bg-[#0a2335] border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000 "
                
                type="number"
                placeholder="Phone Number"
              />
              <input
                className="text-white  text-sm md:text-xl lg:text-2xl w-[auto] md:w-[400px] lg:w-[550px] h-[60px] py-3 px-3 border-[3px] mt-2 gap-x-5 bg-[#0a2335]  border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000 "
                type="text"
                placeholder="Company/Organization"
              />
              <textarea
                className="text-white  text-sm md:text-xl lg:text-3xl w-[auto] sm:w-[390px] md:w-[400px] lg:w-[900px]  h-[300px] md:h-[350px] lg:h-[300px] p-3 border-[3px] mt-2 mx-auto lg:ml-[90px] bg-[#0a2335] border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000"
                name="Message"
                id="text"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-[#103d4b] w-[150px] md:w-[200px] text-white sm:text-xl lg:text-3xl font-semibold border-[5px] border-[#0e6399] px-5 py-3 rounded-lg mt-4 hover:border-white hover:text-[#37739a]   hover:duration-1000 ml-[80px] md:ml-[150px] lg:ml-[450px] ">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
   