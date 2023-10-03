const Register = () => {
  return (
    <div>
      <form>
        <div className="flex justify-center  h-[500px] items-center">
          <div>
            <h1>Please Register</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border"
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border"
            />
            <br />
            <button className=" bg-orange-100">Register</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
