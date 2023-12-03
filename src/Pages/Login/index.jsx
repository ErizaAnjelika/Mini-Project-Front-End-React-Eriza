import { useEffect, useState } from 'react';
import './login.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // handle password visibility
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.input');

    function focusFunc() {
      let parent = this.parentNode.parentNode;
      parent.classList.add('focus');
    }

    function blurFunc() {
      let parent = this.parentNode.parentNode;
      if (this.value == '') {
        parent.classList.remove('focus');
      }
    }

    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });
  }, []);

  // memanggil navigate
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const bodyPayload = {
      email: email,
      password: password,
    };
    axios
      .post('https://reqres.in/api/login', bodyPayload)
      .then((res) => {
        // menyimpan di local storage
        const token = res.data.token;
        localStorage.setItem('accessToken', token);

        // setelah berhasil login maka akan pindah halaman ke homepage
        navigate('/home');

        // muncul alert success
        Swal.fire({
          title: 'Login Berhasil',
          icon: 'success',
          showConfirmButton: true,
        });

        setEmail('');
        setPassword('');
        console.log(res);
        // setSuccess(res)
      })
      .catch((err) => {
        // console.log(err.response);
        // setError(err.response.data.error)
        Swal.fire({
          title: 'Login Gagal',
          text: err.response.data.error,
          icon: 'error',
          showConfirmButton: true,
        });
      });
    // console.log(bodyPayload);
  };

  return (
    <div className="body">
      <div className="container login">
        <div className="img">
          <img
            src="../src/img/login.svg"
            alt=""
          />
        </div>
        <div className="login-container">
          <div className="form">
            <img
              src="../src/img/avatar.svg"
              alt=""
              className="avatar"
            />
            <h2>Login</h2>
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
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  onChange={onChangePassword}
                  value={password}
                />
                <i
                  className={`password-icon ${showPassword ? 'bi bi-eye-slash-fill' : 'bi bi-eye-fill'}`}
                  onClick={handlePasswordVisibility}
                ></i>
              </div>
            </div>
            <a className="link">Forgot Password?</a>
            <button
              type="submit"
              onClick={onSubmit}
              className="button"
            >
              Login
            </button>
            <p className="social-text">Or Sign in with social platform</p>
            <div className="social-media">
              <a
                href="#"
                className="social-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="#"
                className="social-icon"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="#"
                className="social-icon"
              >
                <i className="bi bi-google"></i>
              </a>
              <a
                href="#"
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
            <p className="account-text">
              Dont have an account?
              <Link to={'/Register'}>
                {' '}
                <a
                  href="#"
                  id="sign-up-btn2"
                >
                  Register
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
