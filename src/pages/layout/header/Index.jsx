import Avatar from '@mui/material/Avatar';
import { Link, NavLink } from "react-router-dom";
import NavItems from './component/NavItems';
export default function Index() {

  const navbarLink = [{
    name:'HOME',
    path:'/'
  },
{
    name:'ABOUT',
    path:'/about'
  },
  {
    name:'CONTACT',
    path:'/contact'
  },
  {
    name:'PROJECT',
    path:'/project'
  },
  {
    name:'ADMIN',
    path:'/admin'
  },
]
  return (
    <header className="position-sticky top-0 navbar_style">
      <nav class="navbar px-0 navbar-expand-sm">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand d-flex text-white align-items-center gap-3" href="#">
          <Avatar alt="Arun Singh" src="https://res.cloudinary.com/dzmrolrxy/image/upload/v1689236818/mypic/mypng.png" />arunweb
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Arun web
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                {navbarLink?.map((element)=><NavItems element={element}/>)}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
