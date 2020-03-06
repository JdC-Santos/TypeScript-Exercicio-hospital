namespace Hospital {
    export class Pessoa {
        
        private _nome: string | undefined;
        private _cpf: string | undefined;

        constructor(nome: string, cpf: string){
            this._nome = nome;
            this._cpf = cpf;
        }

        public getNome(): string| undefined{
            return this._nome;
        }

        public getCPF(): string| undefined{
            return this._cpf;
        }
    }
}