import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

const HeroRegister = () => {
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleHeroRegister = (e) => {
    e.preventDefault();
    // Reset Error/Success
    setRegError("");
    setSuccess("");

    console.log("Submited!");
    const email = e.target.email.value;
    const pass = e.target.password.value;
    if (pass.length < 6) {
      setRegError("Password should be 6 characters or longer");
      return;
    }

    if (!/[A-Z]/.test(pass)) {
      setRegError("Your password must contain at least one uppercase letter");
      return;
    }

    console.log(`Email: ${email} and pass word is ${pass}`);
    //create user
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        setSuccess("Success!!!");
      })
      .catch((error) => {
        console.log(error);
        setRegError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleHeroRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <span
                  onClick={() => {
                    setShowPass(!showPass);
                  }}
                >
                  {showPass ? (
                    <AiFillEye></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible></AiFillEyeInvisible>
                  )}
                </span>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div>{regError && <p className=" bg-red-400">{regError}</p>}</div>
            <div>{success && <p className=" bg-green-500">{success}</p>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRegister;
