import React from 'react'
import '../sass/Sniper.sass'

function Sniper() {
    return (
        <div className="sniper">
            <div className="sniper__class">
                <div className="sniper__block">
                    <div className="click low0"></div>
                    <span for="low0">Andres</span>
                </div>
                <div className="sniper__block">
                    <div className="low1 banner__see"></div>
                    <span for="low1">Tony</span>
                </div>
                <div className="sniper__block">
                    <div className="low2 banner__see"></div>
                    <span for="low2">Luis</span>
                </div>
                <div className="across"></div>
                <div className="sniper__account">Account</div>
                <div className="sniper__account">Help Center</div>
                <div className="sniper__account">Sign out of Netflix</div>
            </div>
        </div>
    )
}

export default Sniper
