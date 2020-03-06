namespace Hospital {
    export class Funcionario extends Pessoa{
        
        private _cdFuncionario: number | undefined;

        public setCodFuncionario(cd : number): void {
            this._cdFuncionario = cd;
        }

        public getCodFuncionario(): number | undefined{
            return this._cdFuncionario;
        }
    }
}