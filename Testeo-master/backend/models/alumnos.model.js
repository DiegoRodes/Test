import{schema, model} from "mongose";

const Eschemas = new Schema({
    name:{
        type:String
    },
    Edad:{
        type:Number
    }
})
export const Modelo = new model("Tabla de alumnos", Eschema)