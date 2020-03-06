namespace Hospital {
    export class Paciente extends Pessoa {
        
        private _codPaciente: number | undefined;

        constructor(nome: string, cpf : string, cd?:number){
        	super(nome, cpf);
        	if(cd != undefined) this._codPaciente = cd;
        }

        public setCodPaciente(cd: number): void {
            this._codPaciente = cd;
        }

        public getCodPaciente(): number | undefined {
            return this._codPaciente;
        }
    }
}