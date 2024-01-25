import Common from "./Common";
import eggs from "../eggs.png"
const Home = () =>{
    return (
        <>
        <Common 
        name = "Indulge in the exquisite flavors of Desi eggs and succulent chicken from"
        image = {eggs}
        visit = "/About"
        btname = "Know About Us"
        widths = "500"
        />
        </>
    )
}
export default Home;