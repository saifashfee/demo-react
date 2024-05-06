import React from "react";

import ProductDate from './ProductItem';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
    return (
        <Card className="product-item">
            <ProductDate date={props.date} />
            <div className='product-item_description'>
                <h2>{props.title}</h2>
            </div>
        </Card>
    );
}

export default ProductItem;