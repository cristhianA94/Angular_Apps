import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {

    //Parametro capitalizado:todas
    transform(value: string, todas: boolean = true): string {
        //console.log(value);
        value = value.toLowerCase();

        let nombres = value.split(" ");

        //Si elige :todas se capitalizaran todas las palabras,sino solo la primera
        if (todas) {
            for (let i in nombres) {
                // La primera letra de esa palabra sea minuscula + resto de la cadena a partir de la posicion 1
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        } else {
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }

        return nombres.join(" ");
    }
}