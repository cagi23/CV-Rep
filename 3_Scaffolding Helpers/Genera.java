import java.lang.reflect.Method;

public class Genera {

	public static void main(String[] args) {
		
		Genera genera = new Genera();

		genera.generaGetDojoSelect("tipoRuoloMedico","lvRuolo","idTipoStatoAttivita","idTipoStatoAttivita");
	}
	
	/**
	 * Scaffolding per riempimento select dojo grid.
	 * 
	 * @param nomeSelect
	 * @param nomeLiveVariable
	 * @param idDTO
	 * @param idEntity
	 */
	public void generaGetDojoSelect(String nomeSelect,String nomeLiveVariable,String idDTO,String idEntity) {
		
		StringBuilder sb = new StringBuilder();
		

		sb.append("if (" + idDTO + " > 0) {");
            sb.append("for (i = 0; i <= this." + nomeLiveVariable + ".getCount() - 1; i++) {");
                sb.append("item = this." + nomeSelect + ".dataSet.getItem(i);");
                sb.append("idOfItem = this." + nomeSelect + ".dataSet.getItem(i).getData()." + idDTO + ";");

                sb.append("if (" + idDTO + " == idOfItem) {");
                    sb.append("this." + nomeSelect + ".setDataValue(item);");
                sb.append("}");
            sb.append("}");
            
        sb.append("}");
        
        System.out.println(sb.toString());
	}

	/**
	 * Generazione nomi setters per il DAO.
	 */
	public void generaSetByClassName() {

		Method[] methods = Genera.class.getMethods();

		for (int i = 0; i < methods.length; i++) {

			String methodName = methods[i].getName();

			String startWith = "set";

			if (methodName.startsWith(startWith)) {
				System.out.println(methodName);
			}
		}

	}

}
