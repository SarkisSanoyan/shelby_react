

export function Rooms({ rooms, setRooms }) {

    const plusFunc = () => {
        Number(rooms) >= 0 ? setRooms(Number(rooms) + 1) : setRooms(Number(rooms));
    }

    const minusFunc = () => {
        Number(rooms) >= 1 ? setRooms(Number(rooms) - 1) : setRooms(Number(rooms));
    }

    return (
        <div className="Rooms">
            <label htmlFor="rooms">Rooms</label>
            <hr />
            <span onClick={minusFunc}>
                <i className="fa-solid fa-minus"></i>
            </span>
            <input id="rooms" type="text" min="1" step="1" max="30" value={rooms} onChange={e => setRooms(e.target.value)} disabled />
            <span onClick={plusFunc}>
                <i className="fa-solid fa-plus"></i>
            </span>
        </div>
    )
}
