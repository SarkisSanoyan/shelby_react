

export function Adults({ adults, setAdults }) {

    const plusFunc = () => {
        Number(adults) >= 0 ? setAdults(Number(adults) + 1) : setAdults(Number(adults));
    }

    const minusFunc = () => {
        Number(adults) >= 1 ? setAdults(Number(adults) - 1) : setAdults(Number(adults));
    }

    return (
        <div className="Adults">
            <label htmlFor="adults">Adults</label>
            <hr />
            <span onClick={minusFunc}>
                <i className="fa-solid fa-minus"></i>
            </span>
            <input id="adults" type="text" min="1" step="1" max="30" value={adults} onChange={e => setAdults(e.target.value)} disabled />
            <span onClick={plusFunc}>
                <i className="fa-solid fa-plus"></i>
            </span>
        </div>
    )
}
