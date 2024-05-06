import React from "react";

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {
    return (
        <Card className="products">
            <ProductItem
            title={props.items[0].title}
            amount={props[0].amount}
            date={props.items[0].date}
            />
            <ProductItem
            title={props.items[1].title}
            amount={props[1].amount}
            date={props.items[1].date}
            />
            <ProductItem
            title={props.items[2].title}
            amount={props[2].amount}
            date={props.items[2].date}
            />
            <ProductItem
            title={props.items[3].title}
            amount={props[3].amount}
            date={props.items[3].date}
            />
        </Card>
    );
}

export default Products;