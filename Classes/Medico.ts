namespace Hospital {
    export class Medico extends Funcionario {

        private _crm: number | undefined;
        private _especialidade: string | undefined;

        public setCrm(crm: number): void {
            this._crm = crm;
        }

        public getCrm(): number | undefined {
            return this._crm;
        }

        public setEspecialidade(e : string): void {
            this._especialidade = e;
        }

        public getEspecialidade(): string | undefined {
            return this._especialidade;
        }   
    }
}