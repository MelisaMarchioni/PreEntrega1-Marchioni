
let cantidad= prompt('¿cuantos serán en la lista?')
let invitados= [];
let edad= [];

for (i=0; i<cantidad; i++) {
    invitados[i]= [prompt ('Nombre del Invitado ' + (i+1)),0];
    edad =prompt('¿Cual es tu edad?');
    if (edad>=18 && (edad<50 && edad>18)){
        alert('Te esperamos en la fiesta!!')
        } else if(edad<18){
            alert('Lo siento pero esta fiesta es +18') 
        }else{
           alert('Esta fiesta sería muy aburrida para vos')
        }
    }




    