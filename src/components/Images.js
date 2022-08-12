import React from 'react'
import './Header.css'

const Images = (props) => {

    console.log(props.images)

    const titleStyle = {
        'font-size': '1.6rem'
    }

    const rowStyle = {
        'min-height': '12rem'
    }

    const imagelistStyle = {
        border: '1px solid #e7e7e7',
        'background-color': '#f9f9f9'
    }

    return (
        <div class="d-flex justify-content-center mb-3">
            <div class=" search px-3">
                {
                    props.searchTitle ?
                        <div class="text-center text-dark" style={titleStyle}>
                            Results for <b>{props.searchTitle}</b>
                        </div>
                        :
                        ""
                }

                <div class="mt-3 py-3 container" style={imagelistStyle}>
                    <div class="row">
                        {props.images.length ? props.images.map(item => {
                            return (
                                <div class="col-md-6 col-12 text-center p-2 d-flex align-items-center justify-content-center" style={rowStyle}>
                                    <img src={item.urls.full} width="100%" ></img>
                                </div>
                            )
                        }) : <div class="text-center">
                            Enter a keyword to search.
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Images