import React, { Component } from "react"
import { ReactComponent as Search } from "../../assets/icon/search.svg"
import Button from "../Button"
import Logo from "./Logo"
import "./index.scss";
import HamburgerButton from "../HamburgerButton";


class Menus extends Component {
    state = {
        visible: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    listenToScroll = () => {
        const { visible } = this.state;

        if (window.pageYOffset > 25) {
            if (visible) {
                this.setState({ visible: false });
            }
        } else {
            if (!visible) {
                this.setState({ visible: true });
            }
        }
    }

    render() {
        const { visible } = this.state;
        return (
            <div className={`menu ${visible ? "" : "invisible"}`}>
                <div className="wrapper">
                    <Logo />
                    <ul>
                        <li>QUI SOMMES NOUS</li>
                        <li>SECTUERS</li>
                        <li>FORMATION</li>
                        <li>TERMOIGNAGE</li>
                        <li>ACTUALITE</li>
                    </ul>
                    <Search className="magnifier" />
                    <Button size="small">Inscrivez-vous</Button>
                    <HamburgerButton />
                </div>
            </div>
        );
    }
}



export default Menus;