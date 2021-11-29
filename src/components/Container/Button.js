import React from 'react'
import '../../icofont/icofont/icofont.min.css'

function Button({className, handleClick}) {

    return (
        <div className="button">
            <i onClick={handleClick} className={className}></i>
        </div>
    )
}

export default Button
// icofont-thin-left
// icofont-thin-right