import { NavBarComponent } from "../../components/NavBarComponent/NavBar";

export const HomeContainer = ()=> {

    //fetch a la base de datos o ajax
    const carrito = [];
    return(
        <div>
            {/*Para usar bootstrap*/}
            <NavBarComponent cart ={carrito}/>
        </div>
    )
}