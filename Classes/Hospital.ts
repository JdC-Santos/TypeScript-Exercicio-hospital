namespace Hospital {
	export class Hospital {
		private _nome 			: string | undefined;
		private _enfermeiros 	: Array<Enfermeiro> = [];
		private _medicos 		: Array<Medico> 	= [];
		private _pacientes 		: Array<Paciente> 	= [];

		public setNome(nm : string): void {
			this._nome = nm;
		}

		public getNome(): string | undefined {
			return this._nome;
		}

		public addEnfermeiro(e : Enfermeiro): void {
			this._enfermeiros.push(e);
		}

		public getEnfermeiros(): Array<Enfermeiro> {
			return this._enfermeiros;
		}

		public addMedico(m : Medico): void {
			this._medicos.push(m);
		}

		public getMedicos(): Array<Medico> {
			return this._medicos;
		}

		public addPaciente(p : Paciente): void {
			this._pacientes.push(p);
		}

		public getPacientes(): Array<Paciente> {
			return this._pacientes;
		}
	}
}