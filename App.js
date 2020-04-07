
//INDICE DE REFERENCIAS R=


//Aqui en Java Script vamos a diseñar 2 clases :1 para los datos y otra para mostrar los productos 
//a la derecha de la interfaz

//Aqui vamos a crear la estructura de los productos con los parametros que le damos en este caso name,price y year

class Product{
    constructor(name, price, year){
        //con lo siguiente le estoy diciendo " De este producto, su nombre va a ser asignado del nombre que yo le 
        //de al constructor this.name = name"; lo mismo con el resto de propiedades.
      this.name = name;
      this.price = price;
      this.year = year;
    }
}


// esta va a ser la clase de User Interface donde vamos a diseñar unos metodos 

class UI{

    //le damos este metodo a la interface UI va poder acceder al <html> que es el DOM para poder alterarlo y lo va agre
    //gar en el  <div id="product-list" class="col-md-8"> especificamente.

    addProduct(product){//en esta linea introduje la constante Product de abajo R2 que lleva de serie los valores name,price y year que el usiuario ha de ver cuando clicke save
        const productList = document.getElementById("product-list"); //aqui accedo al div product-list de html y lo guardo en una constante llamada productList.
        const element = document.createElement("div"); //aqui creo un elemento <div> HTML para despues darselo a const productlist y asi lo reproduzca en pantalla.
        element.innerHTML = `                        <!--aqui le indico inserta un elemento html <div></> dentro de "CUIDADO ,ACENTOS" porque es un string de varias lineas.--> 
             <div class="card text-center mb-4">     <!--este div tendra una clase de bootstrap llamada card ,le indico texto centrado y un margin bootom de 4 para la de abajo-->

                <div class="card-body">              <!--tendra una clase de bootstrap "card-body" porque es donde vamos a listar el producto-->

                    <strong> Product Name </strong> : ${product.name}  <!--este es div donde reproduce la constante product R2 a traves del $ y le indicamos que solo muestre-->
                    <strong> Product Price </strong> : ${product.price}  <!-- .name porque si no se lo marco mostrara todos los valores de product name price year--> 
                    <strong> Product Year </strong> : ${product.year}
                    <a href="#" class= "btn btn-danger" name="delete"> Delete </a> <!-- aqui hemos agregado un enlace a la derecha con el theme de bootstrap btn btn-danger "rojo"-->
                                                                       <!-- que sera un boton Delete , de momento solo aparece y para que haga la funcion de borrar hay que-->
                </div>                                                 <!--escribimos el atributo name="delete"R10 y capturaremos este evento de nuevo abajo R5 dentro del obje-->
                                                                       <!--to con el ID product-form-->

             </div>
        ` ;  
        productList.appendChild(element);             //aqui le estamos agregando el elemento html ya creado al <div> porductList mediante appendChild (agregar elementos hijo)
                                                      //   y el nombre de la constante element .POR ULTIMO creamos abajo en "DOCUMENT PRODUCT FORM" una constante R3 
                                                      //     que contenga este objeto UI.   
    }
    
    // R4 aqui abajo estoy creando un evento por el cual el formulario se va a resetear quedandose en blanco cuando el usuario haga click en save // MEDIANTE resetForm
    resetForm(){

        document.getElementById("product-form").reset();   // aqui estoy trayendo el elemento HTML llamado "product-form" y le llamo su metodo .RESET()
                                                           // UNA VEZ CREADO este evento lo voy a llamar en la CONSTANTE ui de abajo R4 como hice con addProduct(product) antes
   }





       //este tercer evento llamado "deleteProduct" es una funcion aplicada al elemento html creado arriba <a href...></> que esta dentro del div "Card-body" que a su vez esta
       //dentro del div "card center" que a su vez esta dentro del div product list .E7 Podemos decir que es un elemento hijo de un elemento hijo que a su vez es elemento hijo de
       // del <div> </> "product-list"

    deleteProduct(element) { //aqui nombramos el evento deleteProduct que afectara a la const(element) "que es todo lo que hay dentro del card text center" y dentro de{}
                             // explicamos la condicion: que si element tiene una propiedad llamada nameR10 de arriba y es igual nombre que le dimos osea "delete"
                                                         //significa que el usuario hizo click en delete y
        if(element.name === "delete") {                                    //se ejecute la instruccion que hay dentro de las otras{} que dice asi: remove el elemento 
                                                                           //E7(arriba)" element.parentElement.parentElement.parentElement" osea el elemento que dentro
            element.parentElement.parentElement.parentElement.remove();         //engloba al div class text center que a su vez engloba al div card_body que a su vez engloba
                                                                                          // a las etiquetas strong de los productos ¡¡ SEA BORRADO !! .
                 this.showMessage ("Product Deleted Successfully" , "info");                                                                                                         //ESTE ES EL USO DE LLAMAR ELEMENTOS PADRE"
            
                      //en esta ultima fila n71 he metido el evento "showMessage" dentro del evento "deleteProduct" para que una vez removido el el <a> delete </>
                      //aparezca una producto borrado satisfactoriamente justo despues de 3000 milisegundos , durara este tiempo porque asi lo configuramos antes
                      //dentro de showMessage
            
            }  
    }






       //En el siguiente evento vamos crear un mensaje"producto añadido satisfactoriamente que saldra en el top de la App cuando el usuario haga click en save
       //para ello dentro de este evento showMessage R20 meto 2 parametros: 1el mensaje y 2 la clase de bootstrap que tendra el mensaje
    showMessage(message , cssClass){                      //message R9 cssClass R8

        const div = document.createElement("div");               //en esta linea creo mi PRIMER div con Java.S y no con HTML y creo una constante llamada div para almacenarlo
        div.className = `alert alert-${cssClass} mt-2`;          //aqui le indicamos a la consola: 1 que vamos a meterle clases con .className y 2 especifico cuales:el
                                                                 //la clase  R12 "alert"  y alert- y con ${cssClass}R8 le digo de donde obtener dichas clases TOTO ELLO ENTRE ACENTOS .


        div.appendChild(document.createTextNode(message));      //aqui le digo que estoy creando un element "TEXTO" que sera un elemento hijo del div de arriba y dentro tendra
                                                                //el R9message de arriba

        const container = document.querySelector(".container");    //En estas lineas le indicamos a la consola donde ubicarlo , para ello creo una constante "container" que
                                                                   //en la que guardo el div HTML con la clase container

        const app = document.querySelector("#App");                // Aqui vamos a seleccionar el segundo div HTML relevante para ubicar el div creado por Java.S 
                                                                  //y lo guardo dentro de una constante llamada app por ejemplo

        container.insertBefore(div ,app);                         //por ultimo en esta linea le decimos a la consola que dentro del divHTML de clase container inserte el (div ,
                                                                  // creado por Java.Script antes que el divHTML de nombre app
                                                                  // una vez creado este evento POR ULTIMO vamos a llamarlo con R11 abajo en los EVENTOS DEL DOM dentro 
                                                                  //dentro del evento SUBMIT mas concretamente

                     
                                           //aqui vamos a configurar el metodo para el evento "showMessage" que permitira borrar esta alerta a los 3000 milisegundos
                                            //despues que el usuario hace submit  de la siguiente manera :


        setTimeout(function (){             //creo el metodo setTiemout recibe el parametro de la funcion a ejecutar y despues de la coma, del final el segundo parametro                
                                                  //que sera el tiempo                
        


              document.querySelector('.alert').remove();     //en esta linea : le digo a la consola que el div creado por Java.S de clase R12"alert" sera removido

        }  ,3000  )  ;                                       //este es el segundo parametro por eso va fuera de la estructura de llaves de function {}   
        
                                                           //este metodo esta dentro del evento showMessage que ya esta mencionado  abajo en los eventos del DOM 
    }

}








//aqui vamos a meter los EVENTOS DEL DOM :por ejemplo cuando el usario haga click en el boton save introducira los 
//valores del formulario , cuando el usuario escribe o refresca la pagina esos son eventos.

//El primer evento que vamos a introducir es el submit que es  cuando el usuario manda la info mediante el boton "save",
//para ello primero selecciono el elemento formulario que tiene un id "product-form" y le añado el evento submit


//EVENTOS DEL DOM

document.getElementById("product-form")       

          //este primer evento  es para capturar el EVENTO SUBMIT
        .addEventListener("submit",function(e){  //con la "e" R7 abrevio evento que voy a anular despues
            const name = document.getElementById("name").value;    //en estas lineas, le indico que una vez el usuario
            const price = document.getElementById("price").value;  // haga submit, se muestren los valores de los inputs con  
            const year = document.getElementById("year").value;    //ID name,el ID price y el ID year que el usuario escribio

            const product = new Product(name,price,year);//en esta linea abro una nueva constante para guardar una nueva
                                                         //construccion "product" R2 que construi arriba del todo poniendo "new" antes.
                                                             //un buen resumen seria decir que le indique a la consola que una vez el usuario haga click en save se produzcan 
                                                            //los siguientes eventos: 1,muestre los valores elegidos por el cliente , 2evite hacer refresh para que los datos
                                                             //permanezcan en el formulario y 3 se cree una nueva constante = a una nueva construccion product que muestre de nuevo los
                                                            //valores . FALTA mostrar todo esto en la pantalla y eso lo haremos arriba en CLASS UI por ser la interface.R2


            const ui = new UI();         //creo una cosntante R3 donde almaceno un NUEVA CONSTRUCCION UI

            if(name === '' || price === '' || year === '') {            //en esta linea le digo a la consola : si el nombre ||=o  precio o el año esta vacio
                
                return ui.showMessage('Please Complete Fields', 'danger');     // muestra el mensaje ("plase comple..." , con una estilo de bootswacht danger = rojo)
                                                                    
            }                                               //PERO a su vez esta al nombrar ui.showMessage estoyb llamando tambien al evento de abajo C5 y se  reproduciran
                                                            //los dos mensajes a la vez por ello añado un "RETURN" al comienzo de la instruccion para que cuando la termine
                                                            //vuelva y no continue a showMessage c5

            ui.addProduct(product);      //en esta linea indico que el contenido de ese ui es el primero de los UI osea "add Product" conteniendo a su vez la constante "product"
            ui.resetForm();              // R4 aqui estoy llamando el evento resetForm R4(ARRIBA) igual que llame al evento addproduct (dentro de una const "ui")

               
                                                                         // evento C5 ¡¡CONSOLA una vez he agregado un producto y reseteado el formulario
            ui.showMessage('Product Added Successfully','success');    //desde ui voy a llamar el siguiente metodo de nombre showMessage y le doy sus dos parametros
                                                                         //definidos al comienzo del metodo el R8 message y el R9 la clase de bootstrap "success"

            e.preventDefault(); // cuando el ususario hace click en save , por defecto desaparecen los valores del formulario , con este EVENTO "prevent" anulo 
                                                                         // este comportamiento y los valores quedan dentro del formulario "NOTA" abreviar el evento "e" R7 arriba dentro
                                                                         //de function()                                                             



                                                                         //PERO cuando el usuario introduce otro producto en el formulario el mensaje persiste y no desaparece
        });                                                              //incluso cuando hacemos delete en el producto para ello creamps otro metodo para R15 arriba para
                                                                         // este ui.showMessage

    //este evento sera para darle el poder de borrar a la etiqueta DELETE  de la derecha

document.getElementById("product-list").addEventListener("click", function(e) {   //aqui estoy seleccionando mediante getElementByID  el div de html con ID product-list y 
                                                                                  //dentro de este quiero capturar tu evento de click addEvent... cuando captures ese evento
   const ui = new UI(); //creo una constante ui = a un nuevo UI = al        //voy a añadir a traves de una funcion ."NOTA" con la abreviatura de event = "e" puedo + 
                        //evento deleteProduct                                           //indicar el evento delete product podre usar (e.target) para ver en la consola a que div     
   ui.deleteProduct(e.target);                                                            //pertenece a cada punto donde yo paso el mouse



})
        



