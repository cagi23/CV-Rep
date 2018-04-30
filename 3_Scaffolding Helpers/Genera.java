package it.cle.resettami.dto;

import java.lang.reflect.Method;

public class Genera {

	public static void main(String[] args) {

	}
	
	public void generaGetDojoSelect() {
		
		
	}

	/**
	 * Generazione nomi setters per il DAO.
	 */
	public void generaSetByClassName() {

		Method[] methods = MedicoDTO.class.getMethods();

		for (int i = 0; i < methods.length; i++) {

			String methodName = methods[i].getName();

			String startWith = "set";

			if (methodName.startsWith(startWith)) {
				System.out.println(methodName);
			}
		}

	}

}
