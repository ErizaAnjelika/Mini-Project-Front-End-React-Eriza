import { useNavigate} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Swal from 'sweetalert2';
import {navbarLogo, navbarList} from '../../const'
import './Header.css'

const Header =()=>{

    const accessToken = localStorage.getItem('accessToken')
    console.log('token', accessToken);

    const navigate = useNavigate()

    const handleLogout=()=>{
        Swal.fire({
            title: 'Konfirmasi Logout',
            text: 'Anda yakin ingin keluar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Ya, Logout!',
          }).then((result) => {
            if (result.isConfirmed) {
              // Lakukan logout jika pengguna menekan tombol "Ya, Logout!"
              // Misalnya, panggil fungsi logout atau navigasi ke halaman login
              localStorage.removeItem('accessToken');
              navigate("/login")
              console.log('Anda telah logout!');
            }
          });
    }
    return(
        <div>
            <Navbar expand="lg" className="navbar-wraper fixed-top navbar-wrapper ">
                <Container>
                    <Navbar.Brand>
                        <img className="navbar-brand navbar-logo" src={navbarLogo} alt="logo" width={'120px'} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                    <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="m-auto justify-content-center navbar-list">
                        {navbarList.map((item)=>(
                            <Nav className="list" key={item}>
                                {item}
                            </Nav>
                        ))}
                    </Nav>
                    <Nav className="d-flex mt-2">
                        <div>
                        <button className="btn logout" type="submit" onClick={handleLogout}>
                        Logout  <i className="bi bi-box-arrow-right"></i> 
                        </button>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

}

export default Header