const Register = () => {
  return (
    <div className="container h-screen m-auto rounded-3xl flex justify-center items-center">
      <form className="flex flex-col gap-4 w-1/3 border-2 border-dark-imperial-blue h-[70%] rounded-2xl p-5 bg-ufo-green">
        <div>
          <label htmlFor="Name">Name</label>
          <input className="border-2 border-dark-imperial-blue block" type="text" name="name" placeholder="Enter your name" />
        </div>
      </form>
    </div>
  );
};

export default Register;
