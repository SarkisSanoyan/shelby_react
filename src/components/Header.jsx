import { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../scss/Header.scss';


export function Header({ header }) {

    const [showNavBar, setShowNavBar] = useState(false);
    const [showNavBarOnScroll, setShowNavBarOnScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', onScrollWindow);
    }, [])

    const onScrollWindow = () => {
        setShowNavBar(false);
        if (window.scrollY > 750) setShowNavBarOnScroll(true);
        else setShowNavBarOnScroll(false);
    }


    return (
        <div className='Header'>
            <div className='inner'>
                <Link to="/" className='logo'>
                    <img src='https://shelby.am/wp-content/uploads/2021/11/shelby-logo-1-e1656164210911.png' alt='logo' />
                </Link>

                <div id="menu-bar" className="fas fa-bars" onClick={() => setShowNavBar(!showNavBar)}></div>

                <nav className={showNavBar ? 'active' : ''}>
                    {
                        header.map(el => (
                            <Link key={el.id} to={el.url} onClick={() => setShowNavBar(false)}>{el.name}</Link>
                        ))
                    }
                </nav>
            </div>

            <div className='info'>
                <i className='fa-solid fa-phone'></i>
                <p>Call Us: 555 6785</p>

                <div className='icons'>
                    <a href="https://www.facebook.com/" target='_blank'>
                        <i className='fa-brands fa-facebook-f'></i>
                    </a>

                    <a href="https://twitter.com/" target='_blank'>
                        <i className='fa-brands fa-twitter'></i>
                    </a>

                    <a href="https://www.pinterest.com/" target='_blank'>
                        <i className='fa-brands fa-pinterest'></i>
                    </a>
                </div>
            </div>

            {
                showNavBarOnScroll && <div className='NavBarOnScroll'>
                    <Link to="/" className='logo'>
                        <img src='https://shelby.am/wp-content/uploads/2021/11/shelby-logo-1-e1656164210911.png' alt='logo' />
                    </Link>
                    
                    <nav>
                        {
                            header.map(el => (
                                <Link key={el.id} to={el.url}>{el.name}</Link>
                            ))
                        }
                    </nav>
                </div>
            }
        </div>
    )
}
