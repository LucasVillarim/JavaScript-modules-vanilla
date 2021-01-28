import { isAuth, redirectTo } from '../../services/Auth.js';
import { getAccountInfo, getAccountDashBoard } from '../../services/dashFunctions.js';
import { creditCardBlack, creditCardSilver, creditCardGold } from '../../custom/creditCard.js';
import baseURL from '../../services/baseURL.js';

const isLogged = localStorage.getItem('@token');

let Dash = {
  render: async () => {
    const { login } = JSON.parse(localStorage.getItem('usuario'));
    console.log(login);
    let fetchedData = isLogged && await getAccountInfo(`lancamentos/planos-conta?login=${login}`);
    const {contaCredito, contaBanco} = isLogged && await getAccountDashBoard(`dashboard?fim=2020-01-01&inicio=2020-01-01&login=${login}`);
    console.log(contaCredito, contaBanco);
    // Allow dashboard access only with token bearer;
    await isAuth(isLogged, 'login');

// AQUI EH O MAP DAS CONTAS
  let view = `

  <div class="container d-flex justify-content-center area">
    
    <div class="debit-container me-5">
      <div class="card" style="width: 18rem;">
        <div class="card-header fw-bold">
          Conta Crédito
        </div>
        <ul class="list-group list-group-flush">
          <li>
            ${contaCredito.id}
          </li>
          <li>
            ${contaCredito.lancamentos}
          </li>
            ${contaCredito.saldo}
          </li>
        </ul>
      </div>
    </div>
    <div class="credit-container">
      <div class="card" style="width: 18rem;">
        <div class="card-header fw-bold">
          Conta Débito
        </div>
        <ul class="list-group list-group-flush">
          <li>
            ${contaBanco.id}
          </li>
          <li>
            ${contaBanco.lancamentos}
          </li>
          <li>
            ${contaBanco.saldo}
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container text-start">
  <h2>Ações</h2>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Pagar Contas
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="conta" class="form-label">Conta</label>
                <input type="number" class="form-control" id="conta" aria-describedby="emailHelp">
              </div>
              <div class="mb-3">
                <label for="contaDestino" class="form-label">Conta Destino</label>
                <input type="text" class="form-control" id="contaDestino">
              </div>
              <div class="mb-3">
                <label for="data" class="form-label">Data</label>
                <input type="text" class="form-control" id="data">
              </div>
              <div class="mb-3">
                <label for="descricao" class="form-label">Descrição</label>
                <input type="text" class="form-control" id="descricao">
              </div>
              <div class="mb-3">
                <label for="login" class="form-label">Login</label>
                <input type="text" class="form-control" id="login">
              </div>
              <div class="mb-3">
                <label for="planoConta" class="form-label">planoConta</label>
                <input type="number" class="form-control" id="planoConta">
              </div>
              <div class="mb-3">
                <label for="valor" class="form-label">Valor</label>
                <input type="number" class="form-control" id="valor">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="button" class="btn btn-primary" id="payButton">Pagar</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container text-center mt-5">
    <h2>Transações</h2>
    <div class="d-flex">
      ${fetchedData && fetchedData.map(element => {
        return (`
      <div class="card col-md-6 m-2" style="width: 18rem;">
        <div class="card-body text-start">
          <h5 class="card-title">${element.descricao}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Usuário: ${element.login}</h6>
          <p class="card-text">Movimento: ${element.tipoMovimento}</p>
          <a href="#" class="card-link fw-bold">Ver Detalhes</a>
        </div>
      </div>
      `)
    }).join('')
    }
    </div>
  </div>

  <div class="credit-cards--section container-fluid">
    <h1 class="mt-4 text-center">Seus Cartões</h1>
    <div class="d-flex justify-content-center my-5">
    ${creditCardSilver}
    ${creditCardGold}
    ${creditCardBlack}
    </div>
  </div>

  <div class="container text-center area">
    <h1>Transações Realizadas</h1>
    <div class="payments-container row mt-5">
    </div>
  </div>

  <div class="container text-center my-5 py-5">
    <div class="card text-center p-5">
      <h2>Conteúdo da Semana!</h2>
      <p class="text-start">  
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugiat aspernatur rem quia velit! Blanditiis cupiditate ducimus quo, voluptates, rerum accusantium hic nulla odit nisi qui repudiandae ab earum distinctio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugiat aspernatur rem quia velit! Blanditiis cupiditate ducimus quo, voluptates, rerum accusantium hic nulla odit nisi qui repudiandae ab earum distinctio.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus fugiat aspernatur rem quia velit! Blanditiis cupiditate ducimus quo, voluptates, rerum accusantium hic nulla odit nisi qui repudiandae ab earum distinctio.
      </p>
      </div>
      <button class="btn btn-dark mt-2">Estudar</button>
  </div>

  <div class="container my-5 py-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `;

    return view;
  },
  after_render: async () => {

    const logoutBtn = null || document.getElementById('loginLink');
    const payButton = document.getElementById('payButton');
    // var myModal = document.getElementById('myModal')
    // var myInput = document.getElementById('myInput')

    // myModal.addEventListener('shown.bs.modal', function () {
    //   myInput.focus()
    // })
    
    // const focusDashButton = document.getElementById('dashLink');
    payButton.addEventListener('click', () => {
      const contaDestino = document.getElementById('contaDestino').value;
      const planoConta =   document.getElementById('planoConta').value;
      const descricao =    document.getElementById('descricao').value;
      const conta =        document.getElementById('conta').value;
      const login =        document.getElementById('login').value;
      const valor =        document.getElementById('valor').value;
      const data =         document.getElementById('data').value;
      console.log(contaDestino, planoConta, descricao, conta, login, valor, data);
      const response = axios.post(`${baseURL}lancamentos`, {
        conta,
        contaDestino,
        data,
        descricao,
        login,
        planoConta,
        valor
      }, {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('@token')
      });
      console.log(response.data, response.status);
    })

    const logout = () => {
      clearStorage();
      redirectTo('');
    }

    logoutBtn && logoutBtn.addEventListener('click', () => logout());
    
    


  }


}

export default Dash;
    