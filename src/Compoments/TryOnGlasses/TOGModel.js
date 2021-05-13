import React, { Component } from 'react'

export default class TOGModel extends Component {
    modelSrc = './img/model.jpg';
    render() {
        let { product } = this.props;
        let { url, name, desc } = product;
        return (
            <div className="TOG-Model container my-5" style={{ height: '270px' }}>
                <div className="row h-100">
                    <div className="col-6 h-100 text-center d-block position-relative" >
                        <img src={this.modelSrc} className="h-100" alt="model" />
                        <div className="position-absolute" style={{ zIndex: 999, left: "15%", top: "27%" }} >
                            <img src={url} style={{ width: '30%' }} alt={name} />
                        </div>
                        <div className="position-absolute" style={{ zIndex: 999, left: "50%", bottom: "0", width: '221.53px', height: '32%', backgroundColor: 'rgba(255, 152, 0,0.4)', transform: `translateX(-50%)` }}>
                            <h5 className="text-primary text-left pl-1 pt-1 m-0">{name}</h5>
                            <p className="text-white px-1 text-left" style={{ fontSize: '12px' }}>{desc}</p>
                        </div>
                    </div>
                    <div className="col-6 h-100 text-center d-block" >
                        <img src={this.modelSrc} className="h-100" alt="model" />
                    </div>
                </div>
            </div>
        )
    }
}
