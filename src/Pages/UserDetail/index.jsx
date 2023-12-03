import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../component/Navbar';
import Footer from '../../component/Footer';
import './userdetail.css';

const UserDetail = () => {
  const [user, setUser] = useState({});

  // akses id user
  const param = useParams();
  console.log(param);

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = () => {
    axios
      .get(`https://reqres.in/api/users/${param.id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };


  return (
    <div>
      <div className="container">
        <Header />

        <div className="detail">
        {/* awal kode breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={'/home'}>Home</Link>
              </li>
              <li
                className="breadcrumb-item active"
                aria-current="page"
              >
                Team Detail
              </li>
            </ol>
          </nav>
        {/* Akhir kode breadcrumb */}

        {/* awal kode detail user */}
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <img className='rounded-circle'
                src={user.avatar}
                alt=""
                style={{ width: '300px' }}
              />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-6">
              <div className='user-content'>
                <h2 className="user-name">
                  {user.first_name} <span>{user.last_name}</span>
                </h2>
                <a
                  href="#"
                  className="user-link"
                >
                  visit {user.first_name} Github & Linkedln
                </a>
                <div className="user-rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i> <span>4.7(21)</span>
                </div>
              </div>
              <div className="user-detail">
                <h2>about {user.first_name}: </h2>
                <h6>
                <i className="bi bi-envelope-at-fill"></i> : <span>{user.email}</span>
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
              </div>

              <div className="social-links">
                <p>Follow {user.first_name} At: </p>
                <div className='d-flex'>
                <a href="#">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="#">
                <i className="bi bi-github"></i>
                </a>
                <a href="#">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                <i className="bi bi-twitter"></i>
                </a>
                </div>
              </div>
            </div>
          </div>
          {/* akhir kode detail user */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDetail;
