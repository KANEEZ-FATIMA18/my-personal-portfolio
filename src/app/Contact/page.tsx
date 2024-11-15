export default function Contact() {
    return (
      <div className="h-screen w-full flex justify-center items-center mx-auto bg-[#0a2335]">
        {/* foam */}
        <div className="rounded-lg  mx-auto">
          <h1 className="font-[poppins] text-4xl  font-bold text-white text-center mt-[15px] ">
            Contact <span className="text-[#03AAe4]">Us</span>
          </h1>
  
          <form>
            <div className="grid  grid-cols-1 mx-7 pt-5 md:pt-16 ">
              <input
                className=" text-white text-lg md:text-xl lg:text-2xl  py-3 px-3 w-[300px]  sm:w-[400px] lg:w-[550px] h-[60px] border-[3px] gap-x-7 bg-[#0a2335] outline-4 mt-2  border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000 "
                type="text"
                placeholder="Your Name"
              />
              <input
               className="text-white  text-lg md:text-xl lg:text-2xl w-[300px] sm:w-[400px] lg:w-[550px] h-[60px] py-3 px-3 border-[3px] mt-2 gap-x-7 bg-[#0a2335] border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000"
                type="text"
                placeholder="Email Address"
              />
              <input
                className="text-white  text-lg md:text-xl lg:text-2xl w-[300px]  sm:w-[400px] lg:w-[550px] h-[60px] py-3 px-3 border-[3px] mt-2 gap-x-7 bg-[#0a2335] border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000 "
                
                type="number"
                placeholder="Phone Number"
              />
              
              <textarea
                className="text-white  text-xl md:text-2xl lg:text-3xl w-[300px] sm:w-[400px]  lg:w-[550px]  h-[200px] sm:h-[250px] lg:h-[200px] p-3 border-[3px] mt-2  bg-[#0a2335] border-[#2d6087] rounded-lg hover:border-white  hover:duration-1000"
                name="Message"
                id="text"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex  justify-center">
            <button className="font-[poppins] bg-[#103d4b] w-[150px] sm:w-[250px] text-white text-2xl lg:text-3xl font-semibold border-[5px] border-[#0e6399] px-5 py-3 rounded-lg mt-4 hover:border-white hover:text-[#37739a]   hover:duration-1000 ">
              Submit
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
   