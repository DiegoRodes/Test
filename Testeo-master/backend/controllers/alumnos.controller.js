import { modelo } from "../models/alumnos.model.js";

modelo.create({
    Name:"Diego",
    edad:20
})

export const test = ()=>{
    console.log("El controlador está funcionando")
}