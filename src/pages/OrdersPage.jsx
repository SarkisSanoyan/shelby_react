import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchOrder } from "../api";

import '../scss/OrdersPage.scss';


export function OrdersPage() {

    const [order, setOrder] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        fetchOrder().then(data => setOrder(data));

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className='OrdersPage'>
            <div className="background"></div>

            <table>
                <thead className="tour-info">
                    <tr>
                        <th>ID</th>
                        <th>Tour</th>
                        <th>City</th>
                        <th>Departure</th>
                        <th>Arrival</th>
                        <th>City</th>
                        <th>Check-in</th>
                        <th>Check-out</th>
                        <th>Rooms</th>
                        <th>Adults</th>
                        <th>Children</th>
                        <th className='childrenAge'>Children ages</th>
                        <th className='phone'>Phone</th>
                        <th className='email'>E-mail</th>
                    </tr>
                </thead>
                <br />

                <tbody className="query-info">
                    {
                        order.map(el =>
                            <tr key={el.id}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.country}</td>
                                <td>{el.transport_depart}</td>
                                <td>{el.transport_arrive}</td>
                                <td>{el.selectedCountry}</td>
                                <td>{el.checkin}</td>
                                <td>{el.checkout}</td>
                                <td>{el.rooms}</td>
                                <td>{el.adults}</td>
                                <td>{el.children}</td>
                                <td className='childrenAge'>{el.childAgeArr}</td>
                                <td className='phone'>{el.phone}</td>
                                <td className='email'>{el.email}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {/* <button className='btn' onClick={() => navigate('/booking')}>Book more</button> */}
        </div>
    )
}
