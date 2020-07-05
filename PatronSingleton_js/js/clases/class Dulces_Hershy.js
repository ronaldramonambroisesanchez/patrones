class Dulces_Hershy{

    static chocolates;
    material='';

    constructor( material=''){



if(!!Dulces_Hershy.chocolates){
   return Dulces_Hershy.chocolates;

}

Dulces_Hershy.chocolates= this;
this.material=material;


    }
}


const PrimerMaterial= new Dulces_Hershy('Chocolate');
const SegundoMaterial= new Dulces_Hershy('Caramelo'); 
const TercerMaterial= new Dulces_Hershy('Galleta'); 
const CuartoMaterial= new Dulces_Hershy('Cereal');

console.log('El Primer Material es:'+PrimerMaterial.material);
console.log('El Segundo Material es::'+SegundoMaterial.material);
console.log('El Tercer Material es:'+TercerMaterial.material);
console.log('El Cuarto Material es:'+CuartoMaterial.material);