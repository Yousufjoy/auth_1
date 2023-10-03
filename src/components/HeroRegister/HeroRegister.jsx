import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    const accept = e.target.terms.checked;
    console.log(accept, email, pass);

    if (pass.length < 6) {
      setRegError("Password should be 6 characters or longer");
      return;
    }

    if (!/[A-Z]/.test(pass)) {
      setRegError("Your password must contain at least one uppercase letter");
      return;
    }

    if (!accept) {
      setRegError("Please Check the terms and condition ");
      return;
    }
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
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <div className=" absolute top-5 right-[110px]">
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
                  </div>
                </div>
              </div>
              <div>
                <input type="checkbox" name="terms" id="" />
                <label className=" pl-4" htmlFor="">
                  Accept our terms!
                </label>
              </div>
              <div>
                Already Have an account
                <Link to="/login">
                  <span className=" text-blue-400">Login here!</span>
                </Link>
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
