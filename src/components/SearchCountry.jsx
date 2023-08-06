import { useEffect, useState } from "react";


export function SearchCountry({ countries, setSelectedCountry }) {

    const [input, setInput] = useState('');
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (input.length > 2) setDropdown(true);
        else setDropdown(false);
    }, [input])

    const handelClickListItem = async (name) => {
        await setInput(name);
        await setDropdown(false);
        setSelectedCountry(name);
    }

    return (
        <div className="SearchCountry">
            <i className="fa-sharp fa-solid fa-hotel icon"></i>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Where are you going?" />

            {
                dropdown &&
                <ul>
                    {
                        countries
                            .filter(country => country.name.toLowerCase().includes(input.toLowerCase()))
                            .map(country => <li key={country.id} onClick={() => handelClickListItem(country.name)}>
                                {country.name}
                            </li>)
                    }
                </ul>
            }
        </div>
    )
}




