

export function CheckOut({ checkin, checkout, setCheckout }) {

    return (
        <div className="CheckOut">
            <label>Check out</label> 
            <hr />
            <input type="date" min={checkin} value={checkout} onChange={e => setCheckout(e.target.value)} />
        </div>
    )
}
