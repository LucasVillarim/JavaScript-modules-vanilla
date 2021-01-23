import sayHello from './scripts';


const content = null || document.getElementById('container');

content.innerHTML = `
<header class="align-items-center p-3 px-md-4 mb-3 bg-success border-bottom shadow-sm">
  <nav class="navbar navbar-expand-lg navbar-white bg-success">
    <div class="container-fluid">
      <a class="navbar-brand text-dark" href="#">JavaScript</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white" aria-current="page" href="#">Accenture</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Gama Academy</a>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
      </div>
    </div>
  </nav>
</header>

<div id="section-01"></div>

<div id="section-02"></div>
`;

const body01 = document.getElementById('section-01');

body01.innerHTML = `
<section class="container">
    <div class="row mt-5 mb-5">
      <div class="col-md-6 m-auto">
        <div class="fluid text-center pt-5">
          <h2>Formulário de login</h2>
          <p>Seja bem vindo ao Bootstrap</p>
        </div>
        <img class="img-fluid m-auto" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="imagem bootstrap">
      </div>
      <div class="col-md-6 m-auto">
        <div class="card w-100 p-5" style="width: 18rem;">
          <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label text-success">Email</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp">
              <div id="emailHelp" class="form-text">Seu E-mail não será divulgado.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label text-success">Senha</label>
              <input type="password" class="form-control" id="current-password">
            </div>
            <button type="button" onclick="" class="btn btn-dark">Logar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
`;





