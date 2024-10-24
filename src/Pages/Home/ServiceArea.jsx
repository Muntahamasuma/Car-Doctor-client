import { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useEffect } from "react";
import Service from "../../Components/Service";
import OutLineButton from "../../Components/OutLineButton";


const ServiceArea = () => {
    const [services, setServices]= useState([])

    useEffect(() => {
        fetch('https://car-doctor-server-livid-ten.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    // console.log(services)
    return (
        <div>
            <section>
                <SectionTitle
                categoryName={'Service'}
                categoryTitle={'Our Service Area'}
                paragraph={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."}
                ></SectionTitle>
                {/* cards map */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
                </div>
                <OutLineButton outLineBtn={'More Services'}/>
            </section>
        </div>
    );
};

export default ServiceArea;