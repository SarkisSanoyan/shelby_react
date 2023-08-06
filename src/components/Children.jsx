

export function Children({ children, setChildren }) {

    const plusFunc = () => {
        Number(children) >= 0 ? setChildren(Number(children) + 1) : setChildren(Number(children));
    }

    const minusFunc = () => {
        Number(children) >= 1 ? setChildren(Number(children) - 1) : setChildren(Number(children));
    }

    return (
        <div className="Children">
            <label htmlFor="children">Children </label>
            <hr />
            <span onClick={minusFunc}>
                <i className="fa-solid fa-minus"></i>
            </span>
            <input id="children" type="text" min="0" step="1" max="10" value={children} onChange={e => setChildren(e.target.value)} disabled />
            <span onClick={plusFunc}>
                <i className="fa-solid fa-plus"></i>
            </span>
        </div>
    )
}
