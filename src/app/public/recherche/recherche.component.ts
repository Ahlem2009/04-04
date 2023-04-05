// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import {Article} from 'src/app/models/article.model'
// @Component({
//   selector: 'app-recherche',
//   templateUrl: './recherche.component.html',
//   styleUrls: ['./recherche.component.css']
// })
// export class RechercheComponent {
//   registerForm:any = FormGroup;
//   submitted = false;
//   selectedValue: string = '';
//   tags: string[]=[];
//   constructor(private article:Article, private formBuilder: FormBuilder) {}
//   recherche = new FormGroup ({
//     // mots-cles : new FormControl(),
//     // prenom : new FormControl(),
//     // // les variables a entrer
//     // date: new FormControl()
//   }
//   );
//   // constructor( private formBuilder: FormBuilder){}
//   //Add user form actions
//   get f() { return this.registerForm.controls; }
//   onSubmit() {
    
//     this.submitted = true;
//     // stop here if form is invalid
//     if (this.registerForm.invalid) {
//         return;
//     }
//     //True if all the fields are filled
//     if(this.submitted)
//     {
//       alert("Great!!");
//     }
   
//   }
//     ngOnInit() {
//       //Add form validations
//        this.recherche = this.formBuilder.group({
//         ffrom: '',
//         fto: '',
//         dparting: '',
//         returning: '',
//         adults: '',
//         children: '',
//         travel: '',
//         roundtripopt: '',
             
//         });
//     }
//     onSelectedValueChange(event: any) {
//       this.selectedValue = event.target.value; // Mise à jour de la valeur sélectionnée à chaque changement de sélection
//       console.log(this.selectedValue);
//       this.tags.push(this.selectedValue); 
//       console.log(this.tags);
//       // Affichage de la valeur sélectionnée dans la console du navigateur
//     }
//     supprimerLi(){
     
//     }

// }
