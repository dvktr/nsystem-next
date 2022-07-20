import HttpService from "./HttpServices";
export default class UsuarioService extends HttpService {
  async login(usuario, senha) {

  }

  async cadastro(dados) {
    return this.post('/cadastro', dados)
  }
}