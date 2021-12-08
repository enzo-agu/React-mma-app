import React from 'react';
import { ItemDetail } from '../Components/ItemDetail'
import { useEffect, useState } from "react";
import './Styles/Styles.css';
import { useParams } from 'react-router';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs } from '@firebase/firestore';

export const ItemDetailContainer = () => {

    const { ID } = useParams()
    const [product, setProduct] = useState([])
    useEffect(() => {

        const db = getFirestore()
        getDocs(collection(db, "items")).then((snapshot) => {
            setProduct(snapshot.docs.map((doc) => doc.data()));

        })

    }, [ID])

    return (
        <>

            {product.length ? product.map((p) => <ItemDetail key={p.id} producto={p} />)
                : <span className="span1">Productos en stock...</span>}


        </>
    )

}

