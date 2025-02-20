import registerImg from "../assets/gamil.png";

const Register = () => {
  return (
    <div className="container h-screen m-auto rounded-3xl flex justify-center items-center gap-17">
      <form className="flex flex-col gap-4 w-[38%] border-2 border-dark-imperial-blue rounded-2xl py-8 px-10 bg-ufo-green">
        <h2 className="text-3xl font-bold text-center mb-2">Register</h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label htmlFor="Name" className="pl-5 text-lg font-semibold">
              Name
            </label>
            <input
              className="outline-none border-2 border-dark-imperial-blue block w-full pl-4 py-2 rounded-full bg-white placeholder:text-dark-imperial-blue-border"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Name" className="pl-5 text-lg font-semibold">
              Email
            </label>
            <input
              className="outline-none border-2 border-dark-imperial-blue block w-full pl-4 py-2 rounded-full bg-white placeholder:text-dark-imperial-blue-border"
              type="text"
              name="name"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Name" className="pl-5 text-lg font-semibold">
              CNIC <small>(13 Digits)</small>
            </label>
            <input
              className="outline-none border-2 border-dark-imperial-blue block w-full pl-4 py-2 rounded-full bg-white placeholder:text-dark-imperial-blue-border"
              type="number"
              name="name"
              placeholder="Enter your CNIC"
            />
          </div>
          <button className="border-dark-imperial-blue border-2 self-center px-9 py-2 mt-2 mb-4 rounded-full bg-dark-imperial-blue text-white cursor-pointer text-lg hover:bg-white hover:text-dark-imperial-blue transition-(--transition)">
            Register
          </button>
        </div>
      </form>
      <div className="w-[48%]">
        <img src={registerImg} alt="" />
      </div>
    </div>
  );
};

export default Register;
