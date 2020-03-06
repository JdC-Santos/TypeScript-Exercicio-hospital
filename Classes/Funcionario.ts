namespace Hospital {
    export class Funcionario extends Pessoa{
        
        private _cdFuncionario: number | undefined;

        constructor(nome : string ,cpf: string, cd: number){
        	super(nome, cpf);
        	this._cdFuncionario = cd;
        }

        public getCodFuncionario(): number | undefined{
            return this._cdFuncionario;
        }
    }
}