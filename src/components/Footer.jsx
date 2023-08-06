import "../scss/Footer.scss";


export function Footer({ footer }) {

  return (
    <div className="Footer">
      <div className="footer-box">

        <div className="footer">
          <img src={footer[0]?.image} alt="" />

          <div className="info">
            <p>{footer[0]?.descr}</p>

            <div className="contacts">
              <p>&#9742; {footer[0]?.phone}</p>
              <p>&#128231; {footer[0]?.mail}</p>
              <p>&#128526; {footer[0]?.address}</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <h3>{footer[1]?.title}</h3>

          <div className="info">
            <a>{footer[1]?.subtitle}</a>
            <a className="paragraph">{footer[1]?.descr2}</a>
            <a>{footer[1]?.subtitle2}</a>
            <a className="paragraph">{footer[1]?.descr3}</a>
            <a>{footer[1]?.info}</a>
            <a>{footer[1]?.subtitle3}</a>
            <a>{footer[1]?.descr4}</a>
            <a>{footer[1]?.info2}</a>
          </div>
        </div>

        <div className="footer">
          <h3>{footer[2]?.title}</h3>
        </div>
      </div>

      <h4 className="allrights">© Copyright Qode Interactive. This demo is a part of the <span>Bridge theme</span>. <br />
        © All rights reserved. Developed by <span>Sarkis Sanoyan</span>.</h4>
    </div>
  )
}
