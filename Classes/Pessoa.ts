namespace Hospital {
    export class Pessoa {
        
        private _nome: string | undefined;
        private _cpf: string | undefined;

        public setNome(nome: string): void{
            this._nome = nome;
        }

        public getNome(): string| undefined{
            return this._nome;
        }

        public setCPF(cpf: string): void {
            this._cpf = cpf;
        }

        public getCPF(): string| undefined{
            return this._cpf;
        }
    }
}