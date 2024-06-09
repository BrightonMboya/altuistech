

export default function SignUpForm() {
 
  return (
    <section className="mt-[150px] flex flex-col items-center bg-cover bg-center md:bg-[url('/imgs/bg/bg-3.png')]">
      <div className="bg-cream md:my-[60px] md:flex md:h-[700px] md:w-[560px] md:flex-col md:items-center md:px-[50px] md:py-[24px] lg:ml-[800px]">
        <h3 className="text-[28px] font-medium text-blue">
          Sign up your school
        </h3>
        <p className="my-[7px] max-w-[274px] text-center text-blue md:max-w-[400px]">
          If you would like to take part in one of our programs, please enter
          your contact details.
        </p>

        <form
          className="mt-[15px] flex flex-col items-center space-y-[37px]"
          action="https://formsubmit.co/brighton.mboya.io@gmail.com"
          method="POST"
        >
          <div className="flex flex-col">
            <label className="text-[15px] text-blue">Your name</label>
            <input
              type="text"
              name="name"
              className="h-[40px] w-[314px] rounded-[3px] border-[0.17px] border-black bg-white pl-3 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-blue md:w-[400px]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-[15px] text-blue">School Name</label>
            <input
              type="text"
              name="schoolName"
              className="h-[40px] w-[314px] rounded-[3px] border-[0.17px] border-black bg-white pl-3 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-blue md:w-[400px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[15px] text-blue">Email</label>
            <input
              type="text"
              name="email"
              className="h-[40px] w-[314px] rounded-[3px] border-[0.17px] border-black bg-white pl-3 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-blue md:w-[400px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[15px] text-blue">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              className="h-[40px] w-[314px] rounded-[3px] border-[0.17px] border-black bg-white pl-3 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-blue md:w-[400px]"
            />
          </div>
          <button
            type="submit"
            className="h-[47px] w-[150px] rounded-[4px] bg-orange text-[15px]  text-white lg:h-[81px] lg:w-[261px] lg:py-[26px] lg:text-[26px]"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
