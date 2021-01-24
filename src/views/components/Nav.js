let Header = {
  render: async () => {
    const isLoggedIn = sessionStorage.getItem('name');
    const currentPage = window.location.href;
    const path = currentPage.split('/').slice(-1)[0];
    const displayName = isLoggedIn ? isLoggedIn : 'Visitante';

    let view = `
<header class="align-items-center p-3 px-md-4 mb-3 border-bottom shadow-sm">
  <nav class="navbar navbar-expand-lg navbar-white">
    <div class="container-fluid">
      <div class="d-flex align-items-center">
        <a class="navbar-brand text-dark" href="#"><h1>Olá ${displayName}!</h1></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="navbar-link nav-link active text-dark" aria-current="page" href="#">Accenture</a>
          </li>
          <li class="nav-item">
            <a class="navbar-link nav-link text-dark" href="#">Gama Academy</a>
          </li>
          <li class="nav-item">
            <a class="navbar-link nav-link text-dark font-weight-bold" href="/#/login" id="loginLink">${path === 'dashboard' ? 'Logout' : 'Login'}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
`;

    return view;
  },
  after_render: async () => {
    const isLoggedIn = sessionStorage.getItem('name');
    console.log(isLoggedIn);
    if (isLoggedIn) {
      const elementLogin = document.getElementById('loginLink');
      elementLogin.classList.add('isLogged');
    }
  }
}

export default Header;

