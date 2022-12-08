import React, {useState} from "react";
import {IProduct} from "../models";

interface productProps {
    product: IProduct
}

export function Product(props:productProps) {
    const [details, setDetails] = useState(false)
    const btnBgClassName = details ? 'bg-green-200' : 'bg-blue-200'
    const btnClasses = ['mt-2 py-2 px-4 border', btnBgClassName]

    return (<div className= 'border py-2 px-4 rounded flex flex-col items-center mb-2'>
        <span className={"font-bold"}> {props.product.title}</span>
        <b>{props.product.price}</b><br/>
        <img src ={props.product.image} className={'w-1/6'} alt={'alt text'}/>

        <button className={btnClasses.join(' ')} onClick={() => setDetails(prev => !prev)}
        >{details ? 'Hide description' : 'Show description'}</button>

        {details && <div>
            <p className={"font-mono"}>{props.product.description}</p>
            <p>Rate: <span style={{fontWeight: "bold"}}>{props.product?.rating?.rate}</span> </p>
        </div>}
    </div>)
}