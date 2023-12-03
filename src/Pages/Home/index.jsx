import { useEffect, useState } from 'react';
import Header from '../../component/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Hero from '../../component/Hero';
import './Home.css';
import Footer from '../../component/Footer';

const Home = () => {
  const [users, setUsers] = useState([]);
  const perPage = 5;
  // const [currentPage, setCurrentPage] = useState(1)
  const [paging,setPaging] =useState({
    currentPage:1,
    total_Pages:0,
  })
  
    // handle back & next
    const handleBack = () => {
      setPaging({
        ...paging,
        currentPage: paging.currentPage - 1,
      });
    };
  
    const handleNext = () => {
      setPaging({
        ...paging,
        currentPage: paging.currentPage + 1,
      });
    };
 
  useEffect(() => {
    getUsers();
  }, [paging.currentPage]);

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users?&per_page=${perPage}&page=${paging.currentPage}`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.data);

        setPaging({
          currentPage:res.data.page,
          total_Pages:res.data.total_pages
        })
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  // console.log(users);

  // const changePage = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  return (
    <div>
      <Header />
      <Hero />
      <div className="container our-team">
        <h1>Our Team</h1>
        {/*awal kode pagination */}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button  className="page-link"
                  onClick={handleBack} disabled={paging.currentPage === 1}
                  style={{ backgroundColor: paging.currentPage === 1 ? '#CCCCCC' : '' }}>
                  Previous Page
              </button>
            </li>
            <li className="page-item">
              <span className='page-link'> Page {paging.currentPage}</span>
            </li>
            <li className="page-item">
              <button className='page-link' 
              onClick={handleNext} disabled={paging.currentPage === paging.total_Pages}
              style={{ backgroundColor: paging.currentPage === paging.total_Pages ? '#CCCCCC' : '' }}>
                Next Page
              </button>
            </li>
          </ul>
        </nav>  
        {/* akhir kode pagination */}

        <div className="row">
          {users.map((item) => (
            <div
              key={item}
              className="col-lg-6 col-md-6 col-sm-6"
            >
              <div className="card mb-3 border-1">
                <div className="row">
                  <div className="col-md-4 p-4">
                    <img
                      src={item.avatar}
                      className="rounded-circle"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.first_name}</h5>
                      <p className="card-text">{item.email}</p>
                      <Link to={`/users/${item.id}`}>
                        <a
                          href="#"
                          className="btn btn-detail"
                        >
                          <span>Detail</span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
