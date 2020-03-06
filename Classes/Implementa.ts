namespace Hospital {
	/**
	 * Instanciando os médicos
	 */
	 	let m1 = new Medico("Dr. Cardiogenes","000.000.000-00",1);
	 	m1.setEspecialidade("Cardilogista");

	 	let m2 = new Medico("Dra. Dermestres","111.111.111-11",2);
	 	m2.setEspecialidade("Dermatologista");

	 	let m3 = new Medico("Dra. Hema","222.222.222-22",3);
	 	m3.setEspecialidade("Hematologista");

	/**
	 * Instanciando os Enfermeiros
	 */
	  	let e1 = new Enfermeiro("enfer","333.333.333-33",4);
	 	e1.setCoren(111);

	 	let e2 = new Enfermeiro("ferme","444.444.444-44",5);
	 	e2.setCoren(222);

	 	let e3 = new Enfermeiro("meiro","555.555.555-55",6);
	 	e3.setCoren(333);

	/**
	 * Instanciando os Enfermeiros
	 */
	  	let p1 = new Paciente("paciente","333.333.333-33");
	 	p1.setCodPaciente(1);

	 	let p2 = new Paciente("impaciente","444.444.444-44");
	 	p2.setCodPaciente(2);

	/**
	 * Instanciando o Hospital
	 */
		let hospital =  new Hospital();
		hospital.setNome("Hospital que cura");

		// adicionando os médicos ao hospital
		hospital.addMedico(m1);
		hospital.addMedico(m2);
		hospital.addMedico(m3);

		// adicionando os enfermeiros ao hospital
		hospital.addEnfermeiro(e1);
		hospital.addEnfermeiro(e2);
		hospital.addEnfermeiro(e3);	

		// adicionando os pacientes ao hospital
		hospital.addPaciente(p1);
		hospital.addPaciente(p2);
		hospital.addPaciente(new Paciente("Parciente","555.555.555-55",3));

		document.getElementById('h_nome').textContent 		 = hospital.getNome();
		document.getElementById('h_medicos').textContent 	 = hospital.getMedicos().length.toString();
		document.getElementById('h_enfermeiros').textContent = hospital.getEnfermeiros().length.toString();
		document.getElementById('h_pacientes').textContent 	 = hospital.getPacientes().length.toString();

		// listando os registros dos medicos 
		let tbl_medico = document.getElementById("body_tbl_medicos");

		hospital.getMedicos().forEach(e => {
			let registro = "<tr>";
			registro 	+= "<td class='text-center'>"+ e.getNome()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCPF()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getEspecialidade()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCodFuncionario()+"</td>";
			registro 	+= "</tr>";

			tbl_medico.innerHTML += registro;
		});

		// listando os registros dos enfermeiros
		let tbl_enfermeiros = document.getElementById("body_tbl_enfermeiros");

		hospital.getEnfermeiros().forEach(e => {
			let registro = "<tr>";
			registro 	+= "<td class='text-center'>"+ e.getNome()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCPF()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCoren()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCodFuncionario()+"</td>";
			registro 	+= "</tr>";

			tbl_enfermeiros.innerHTML += registro;
		});

		// listando os registros dos pacientes

		let tbl_pacientes = document.getElementById("body_tbl_pacientes");

		hospital.getPacientes().forEach(e => {
			let registro = "<tr>";
			registro 	+= "<td class='text-center'>"+ e.getNome()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCPF()+"</td>";
			registro 	+= "<td class='text-center'>"+ e.getCodPaciente()+"</td>";
			registro 	+= "</tr>";

			tbl_pacientes.innerHTML += registro;
		});
}