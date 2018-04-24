export class Contatos {
    list = [];
    constructor(
        public nome: string,
        public telefone: string,
        public email: string
    ) {

    }
    private model(): object {
      return {
        Nome: this.nome,
        Telefone: this.telefone,
        Email: this.email
      };
    }
    salvar() {
      this.list.push(this.model());
    }
    getAll() {
      return this.list;
    }
}
