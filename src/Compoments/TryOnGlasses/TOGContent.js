import React, { Component } from 'react'
import TOGModel from './TOGModel'
import { Products } from '../data/Products'
import TOGGlassesItem from './TOGGlassesItem'
export default class TOGContent extends Component {

    state = {
        Product: Products[0]
    }

    changeGlasses = (result) => {
        this.setState({ Product: result })
    }

    renderGlassses = () => {
        return Products.map((Product, index) => {
            return (
                <TOGGlassesItem product={Product} key={index} funcChangeGlasses={this.changeGlasses} />
            )
        })
    }
    render() {
        return (
            <section className="TOG-Content container">
                <div className="row">
                    <TOGModel product={this.state.Product}></TOGModel>
                </div>
                <div className="row bg-white px-3 pt-5" style={{ height: '250px' }}>
                    {this.renderGlassses()}
                </div>
            </section>
        )
    }
}
