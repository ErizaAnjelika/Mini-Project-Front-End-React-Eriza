import axios from "axios";
import { useState, useEffect } from "react";
import "./register.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // handle password visibility
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode.parentNode;
      if (this.value == "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });
  }, []);
  const onChangeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  // memanggil navigate
  const navigate = useNavigate();

  const onSubmit = () => {
    const bodyPayload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/register", bodyPayload)
      .then((res) => {
        Swal.fire({
          title: "Resister Berhasil, Silahkan Login",
          icon: "success",
          showConfirmButton: true,
        });
        // Setel ulang nilai email dan password setelah berhasil register
        setEmail("");
        setPassword("");
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        Swal.fire({
          title: "Resister Gagal",
          icon: "error",
          text: err.response.data.error,
          showConfirmButton: true,
        });
        console.log(err.response);
      });
    console.log(bodyPayload);
  };

  return (
    <div className="body">
      <div className="container register">
        <div className="img">
          <img src="/img/register.svg" alt="" />
        </div>
        <div className="register-container">
          <div className="form">
            <img src="/img/avatar.svg" alt="" className="avatar" />
            <h2>Register</h2>
            <div className="input-div one">
              <div className="icon">
                <i className="bi bi-envelope-at-fill"></i>
              </div>
              <div>
                <h5>Email</h5>
                <input
                  className="input"
                  onChange={onChangeEmail}
                  value={email}
                />
              </div>
            </div>
            <div className="input-div two">
              <div className="icon">
                <i className="bi bi-key-fill"></i>
              </div>
              <div>
                <h5>Password</h5>

                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={onChangePassword}
                  value={password}
                />
                <i
                  className={`password-icon ${
                    showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"
                  }`}
                  onClick={handlePasswordVisibility}
                ></i>
              </div>
            </div>
            <button type="submit" onClick={onSubmit} className="button">
              Register
            </button>
            <p className="social-text">Or Sign in with social platform</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p className="account-text">
              Already have an account?
              <Link to={"/login"}>
                <a href="#" id="sign-in-btn2">
                  Login
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
