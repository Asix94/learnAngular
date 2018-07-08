import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {
    
    mostrar = true;

    frase: any = {
        mensaje: "un gran poder require un gran responsabilidad",
        autor: "Ben Parker"
    }
    
    personajes: string[] = ["Spiderman", "Venom", "Dr. Octopus"]

}