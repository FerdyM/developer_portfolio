import React, { Component } from 'react';
import './Navbar.css';
import menu from '../images/open-menu.png'

// const Navbar = () => {
//     return (
//         <div className="navbar">
//             <h2 className="navbar-title">Ferdy Macleod</h2>
//             <img className="menu-icon" src={menu} alt="menu icon" />
//         </div>
//     )
// }

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuActive: true,
            navClass: "navbar"
        }
    }

    triggerMenu = () => {
        this.setState({menuActive: !this.state.menuActive});
        if (this.state.menuActive) {
            this.setState({navClass: "navbar-green"})
        } else {
            this.setState({navClass: "navbar"})
        }
    }

    render() {
        return (
            <div className={this.state.navClass}>
                <h2 className="navbar-title">Ferdy Macleod</h2>
                <img className="menu-icon" src={menu} alt="menu icon" onClick={this.triggerMenu} />
            </div>
        )
    }
}

export default Navbar;