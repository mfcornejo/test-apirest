import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'fecha'
})
export class FechaPipe implements PipeTransform{
    transform(): string {
        return 'Fecha';
    }

}