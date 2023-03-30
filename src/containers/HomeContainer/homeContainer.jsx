import { useEffect, useState } from "react";
import { CardComponent } from "../../components/CardComponent/card";
import { NavBarComponent } from "../../components/NavBarComponent/NavBar";

export const ButtonComponent = ()=>{
    return(
        <button>boton props</button>
    )
}

export const HomeContainer = ()=> {
    const[contador, setContador] = useState(1);
    const[productos, setProductos] = useState([]);
         //variable //funcion que modifica la variable // state, estado inicial
    useEffect(()=>{
        //se ejecuta, despues del primer renderizado y nunca mas si no le pones nada en los parentesis de la linea 23
        //sirve para llamadas fetch, APIS, base de datos, etc
        console.log('ciclo cuando se monta el componente. Ejecuta una vez')

        //se crea una variable dentro del use effect para cambiar el valor del estado
        const data = [({id:1, name:'Pauli', price: 20}, {id:1, name:'Pauli', price: 20},{id:1, name:'Pauli', price: 20})]
        setProductos(data);
        setProductos([...data, {id:1, name:'Pauli', price: 20}]) //si quiero agregar mas productos se aplica spread operator
        /*
        //se ejecuta despues del renderizado y espera 4 segundos.
        setTimeout(()=>{
            setContador(30);
        },4000)*/
        //el return se usa muy poco
        return () => { console.log('Estoy muriendo')}
        //este array, indica que cada vez que cambia el contador de estado se ejecuta useEffect
    },[]);

    useEffect(()=>{
        async function getDataFromMeli(){
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=zapatillas');
            const data = await response.json(); 
            setProductos(data.results); 
        }
        getDataFromMeli();
    },[])
    console.log(productos);


    //con el mrtodo MAP te permite, retornar cada elemento y ese elemento, genera un nuevo array.
    if(productos.length>0){
        console.log(productos.map(elemento => {
            if(elemento.price < 10000){
                elemento.title = "PRODUCTO OFERTA"
            }
            return elemento}));
    }

    /*
    //forma de llamar a APi con then, que es una promesa que va detectando cada ciclo que va pasando esa request (ajax). Se utiliza m[as la forma con async y await linea34 a la 42
     useEffect(()=>{
        function getDataFromMeli(){  
            fetch("https://api.mercadolibre.com/sites/MLC/search?q=relojes#json").then(response => {
               return response.json(); 
            }).then(data =>{
                // se utiliza cuando falla la carga de la request, para mostrar el error. Se optimiza enviando un mensaje de error
                console.log(data);
                console.log(data.results[0].title)
            }).catch(error=>{ 
                console.log(error);
            }).finally(()=>{
                console.log("se termino la request")
            })
      }
      getDataFromMeli();
    },[])*/

    

    console.log('ciclo cuando se esta por renderizar')

    //para usar, colocar en useState en los parentesis null 
    /*if(contador ==null){
        return <b>Cargando...</b>
    }*/


    function validarContador(){
        if(contador <= 1){
            setContador(1);
            return (<p>No puedes comprar menos de un producto</p>);
        }      
    }

    //fetch a la base de datos o ajax
    const carrito = [];
    return(
        <div>
            <NavBarComponent cart={carrito} botonProp={ButtonComponent}/>
            <section>
                {/*Con map se pueden mostrar todos los elementos de; fetch, es decir 50 titulos de los 50 productos*/}
                {productos.map( elemento => {
                    return (
                        <CardComponent key={elemento.id} name = {elemento.title} price={elemento.price} img= {elemento.thumbnail}/>
                    )
                })}
                 {/*para que se muestre el producto en la posicion 0 y con su precio, se debe haccer un if, ternario, 
                 para que primero cargue el fetch del use effect, porque en la primera pasada, no se lee
                {productos.length > 0 ? productos[0].price : 'Cargando...'}*/}
                
                {/*Para usar bootstrap*/}
                <button onClick={()=>{validarContador(setContador(contador-1))}}>-</button>
                {contador}
                <button onClick={()=>{setContador(contador+1)}}>+</button>
            </section>
        </div>
    )
}