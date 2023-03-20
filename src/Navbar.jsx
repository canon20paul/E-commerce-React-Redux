import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const cartobj = useSelector(store=>store.cartReducer)
    return (
        <div>
            {/* <h1>This is Component Navbar</h1> */}

            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/additem">Add Item</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav mr-auto">
                        <li className='nav-item'>
                            <a href="/cart" className='nav-link'>Cart  {cartobj.cartitems.length}</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>

    )
}
