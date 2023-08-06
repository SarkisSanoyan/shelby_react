import { useNavigate, createSearchParams } from "react-router-dom";


export function Tour({
    id,
    name,
    country,
    hotel,
    transport_depart,
    transport_arrive,
    searchResult
}) {
    const navigate = useNavigate();

    return (
        <div className="Tour">
            <div className="tour-name">{name}</div>
            <div className="tour-hotel">{hotel}</div>
            <div className="tour-transport_depart">{transport_depart}</div>
            <div className="tour-transport_arrive">{transport_arrive}</div>
            <button className="tour-detail-btn" onClick={() => navigate({   // SearchParams navigate
                pathname: "/booking/" + id,
                search: createSearchParams(searchResult).toString()
            })}>DETAILS</button>
        </div >
    )
}
