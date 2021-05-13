import React, { Component } from 'react'

export default class TOGGlassesItem extends Component {
    shadowOnPicture = (event) => {
        event.target.classList.add('shadow');
    }
    shadowOffPicture = (event) => {
        event.target.classList.remove('shadow');
    }
    render() {
        let { product, funcChangeGlasses } = this.props;

        return (
            <div className="p-0 mx-2" style={{ width: '15%', cursor: 'pointer' }} onClick={() => { funcChangeGlasses(product) }}>
                < img src={product.url} className="border img-fluid p-1" alt={product.name} onMouseOver={(event) => { this.shadowOnPicture(event) }} onMouseLeave={(event) => { this.shadowOffPicture(event) }} />
            </div >
        )
    }
}
