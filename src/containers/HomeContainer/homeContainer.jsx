import { useEffect, useState } from "react";
import { NavBarComponent } from "../../components/NavBarComponent/NavBar";

export const ButtonComponent = ()=>{
    return(
        <button>boton props</button>
    )
}

export const HomeContainer = ()=> {
    const[contador, setContador] = useState(1);

    useEffect(()=>{
        //se ejecuta, despues del primer renderizado y nunca mas si no le pones nada en los parentesis de la linea 23
        //sirve para llamadas fetch, APIS, base de datos, etc
        console.log('ciclo cuando se monta el componente. Ejecuta una vez')

        //se ejecuta despues del renderizado y espera 4 segundos.
        setTimeout(()=>{
            setContador(30);
        },4000)
        //este array, indica que cada vez que cambia el contador de estado se ejecuta useEffect
        //el return se usa muy poco
        return () => { console.log('Estoy muriendo')}
    },[contador]);

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
            {/*Para usar bootstrap*/}
            <NavBarComponent cart={carrito} botonProp={ButtonComponent}/>
            <section>
                <button onClick={()=>{validarContador(setContador(contador-1))}}>-</button>
                {contador}
                <button onClick={()=>{setContador(contador+1)}}>+</button>
            </section>
        </div>
    )
}