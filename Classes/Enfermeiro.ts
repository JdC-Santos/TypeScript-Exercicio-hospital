namespace Hospital {
	export class Enfermeiro extends Funcionario{
		
		private _coren : number | undefined;

		public setCoren(c : number): void {
			this._coren = c;
		}

		public getCoren(): number | undefined {
			return this._coren;
		}
	}
}