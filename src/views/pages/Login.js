import baseURL from '../../services/baseURL.js';
import { storeData, redirectTo } from '../../services/Auth.js';


let Login = {
  render: async () => {
    let view = `
      <section class="container area h-100">
        <div class="d-flex mt-5 mb-5">
          <div class="col-md-6 m-auto">
            <div class="fluid text-center pt-5">
              <h2>Bem-Vindo(a)! Faça o login</h2>
            </div>
            <img class="img-fluid m-auto" width="100%" style="transform: scale(0.6)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="imagem bootstrap">
          </div>
          <div class="col-md-6 m-auto">
            <div class="card w-100 p-5" style="width: 18rem;">
              <h2 class="mt-5 mb-4 text-center">Informe aqui seu usuário e senha</h2>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label text-success">Email</label>
                  <input type="email" class="form-control" id="usuario" aria-describedby="emailHelp">
                  <div id="emailHelp" class="form-text">Seu E-mail não será divulgado.</div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label text-success">Senha</label>
                  <input type="password" class="form-control" id="password">
                </div>
                <div class="d-flex justify-content-between w-100">
                  <button type="button" id="submit_login" class="btn btn-dark">Logar</button>
                  <a href="/#/signup">
                    <button type="button" class="btn btn-success">Cadastrar</button>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;

    return view;
  },
  after_render: async () => {
    document.getElementById('submit_login').addEventListener('click', () => {
    let nameValue = document.getElementById('usuario').value,
        passwordValue = document.getElementById('password').value

    axios.post(`${baseURL}login`, {
          usuario: nameValue, 
          senha: passwordValue
        })
        .then( res => {
          if (res.status === 200) {
            storeData(res.data);
            redirectTo('dashboard');
            location.reload();
            return res.status;
          } else {
            alert('algo de errado aconteceu!');
          }
          
        }
        ).catch(err => {console.log(err)});
      });
  }
}

export default Login;