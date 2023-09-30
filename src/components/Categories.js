import "./Categories.css"

import { useState } from "react"
import dataCategories from "../dataCategories"

const Categories = (props) => {
    const [categories, setCategories] = useState(dataCategories)

    return (
        <div className="all-buttons">
            {
                categories.map( (category, index) => {
                    return (
                        <button 
                            key={index} 
                            type="button"
                            className="one-button"
                            onClick={ () => props.kategorieFilterHandler(category) }
                        >
                            {category}
                        </button>
                    )
                })
            }
            <button 
                type="button"
                className="one-button"
                onClick={ () => props.kategorieFilterHandler('') }
            >
                Vše
            </button>            
        </div>
    )
}

export default Categories