import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contrasena"
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: any, activar: boolean = true): any {
    if (activar) {
      let newContrasena: string = "";
      for (let i = 0; i < value.length; i++) {
        newContrasena += "*";
      }
      return newContrasena;
    } else {
      return value;
    }
  }
}
