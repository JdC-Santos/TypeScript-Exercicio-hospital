namespace Hospital {
    export class Paciente extends Pessoa {
        
        private _codPaciente: number | undefined;

        public setCodPaciente(cd: number): void {
            this._codPaciente = cd;
        }

        public getCodPaciente(): number | undefined {
            return this._codPaciente;
        }
    }
}