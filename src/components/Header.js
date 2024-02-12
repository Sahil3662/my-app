const Header = ()=>{
    return(
        <nav className="navbar navbar-expand-sm navbar-secondary bg-warning">
        <div className="container-fluid justify-content-between">
        <ul className="navbar-nav">
            <li class="nav-item">
                    <a class="nav-link" href="https://www.swiggy.com/" target="_blank"><img src="https://th.bing.com/th/id/OIP.Cg6A7Zb-9CL-guzmZNy8yAAAAA?w=148&h=159&c=7&r=0&o=5&dpr=1.1&pid=1.7" class="rounded-circle" alt="Swiggy Logo" style={{height:"50px"}} /></a>
                </li>
                <li class="nav-item dropdown pt-2 px-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"><u>Other</u></a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Link</a></li>
                        <li><a class="dropdown-item" href="#">Another link</a></li>
                        <li><a class="dropdown-item" href="#">A third link</a></li>
                    </ul>
                </li>
            </ul>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
          <div className="container collapse navbar-collapse justify-content-end" id="mynavbar">
            <ul className="navbar-nav">
            <li class="nav-item pt-1">
                    <a class="nav-link" href="#">Search</a>
                </li>
                <li class="nav-item pt-1">
                    <a class="nav-link" href="#">Offers</a>
                </li>
                <li class="nav-item pt-1">
                    <a class="nav-link" href="#">Help</a>
                </li>
                <li class="nav-item pt-1">
                    <a class="nav-link" href="#">Sign-In</a>
                </li>
                <li class="nav-item pt-1">
                    <a class="nav-link" href="#">Cart</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    )
            
    
}

export default Header;