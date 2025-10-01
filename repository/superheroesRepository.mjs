import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import SuperheroesDataSource from './superheroesDataSource.mjs';

// Obtener la ruta del archivo de tareas
const __filename = fileURLToPath(import.meta.url);
/** 
 * import.meta es un objeto especial que contiene metadatos sobre el módulo actual en ejecución. 
 * Dentro de este objeto, la propiedad url contiene la URL completa del archivo del módulo actual. 
 * En entornos Node.js con módulos ES, esta URL comienza con el protocolo file:// seguido de la ruta del archivo en formato URL.
 * 
 * La función fileURLToPath que se importa del módulo 'url' convierte esta URL de archivo (por 
 * ejemplo, file:///home/user/proyecto/archivo.js) a una ruta de sistema de archivos estándar 
 * (por ejemplo, /home/user/proyecto/archivo.js en sistemas Unix).
 */

const __dirname = path.dirname(__filename);

export default class SuperheroesFileRepository extends SuperheroesDataSource {
    //clase que hereda de SHDataSouce e implementa su metodo abstracto
    constructor(){
        super();
        this.filePath = path.join(__dirname, '../superheroes.txt');
    }

    obtenerTodos(){
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data); 
        //Convierte el archivo JSON en un array de objetos JS
    }
}