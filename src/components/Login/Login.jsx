import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [regError, setRegError] = useState("");
  const [success, setSuccess] = useState("");

  const emailRef = useRef(null);

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (
      !/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)
    ) {
      console.log("Please put a valid email");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // send validation email

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRegError("");
    setSuccess("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log("Success", result.user);
        setSuccess("Successfully Created!");
      })
      .catch((error) => {
        console.log(error.message);
        setRegError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <span>
                New to the website?
                <Link to="/heroregister">
                  <span className=" text-blue-400">Sign up</span>
                </Link>
                here
              </span>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>

            <div>{regError && <p className=" bg-red-400">{regError}</p>}</div>
            <div>{success && <p className=" bg-green-500">{success}</p>}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
