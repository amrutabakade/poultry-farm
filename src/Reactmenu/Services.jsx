import Card from "./Card";
import khadaknath from "../khadaknath.jpg"
import Ancona from "../Ancona.webp"
import Grampariya from "../Grampariya.jpg"
import Asil from "../Asil.jpg"
 import Aseeleggs from "../AseelEggs.jpg"
import khadaknatheggs from "../KadaknathEgg.jpg"
const Services = () =>{
    return(
        <>
            <div className="my-5" height = "500px">
                <h1 className="tab-center title">Available Breeds</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                        <Card 
                        image = {khadaknath}
                        title = "khadaknath breed"
                        />
                        <Card
                        image = {Ancona}
                        title = "Ancona breed"
                        />
                        <Card
                        image = {Grampariya}
                        title = "Grampariya breed"
                        />
                        <Card
                        image = {Asil}
                        title = "Asil breed"
                        />
                        <Card
                        image = {Aseeleggs}
                        title = "Aseeleggs eggs"
                        />
                        <Card
                        image = {khadaknatheggs}
                        title = "khadaknath eggs"
                        />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Services;