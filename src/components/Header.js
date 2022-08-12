import React, {useState} from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
import SearchIcon from '../assets/search.png'

const Header = (props) => {

    const [query, setquery] = useState('')

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setquery(e.target.value)
    }

    const handleSubmit = () => {
        if(query) {
            props.fetchImages(query)
        }
    }

    const headerStyle = {
        height: '16rem',
    }

    const inputStyle = {
        width: '100%',
        height: '3rem',
        border : '0px'
    }

    const searchIconStyle = {
        'max-height' : '100%',
        'max-width' : '100%'
    }

    return (
        <div class="d-flex align-items-center justify-content-center flex-column px-4" style={headerStyle}>
            <div class="d-flex align-items-center">
                <img src={Logo} width="100"></img>
                <span class="ms-3 display-4">Phototub</span>
            </div>

            <div class="border border-secondary mt-md-5 mt-3 search">
                <div class=" w-100 d-flex align-items-center ps-2 pe-1">
                    <input style={inputStyle} placeholder="Search Images..." value={query} onChange={handleInputChange}></input>
                    <img src={SearchIcon} style={searchIconStyle} width="50" class="border border-dark border-bottom-0 border-top-0 border-end-0" onClick={handleSubmit}>
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Header