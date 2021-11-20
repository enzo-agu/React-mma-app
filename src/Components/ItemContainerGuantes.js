import React from 'react';
import { ItemDetailGuantes } from './ItemDetailGuantes'
import { useEffect, useState } from "react";
import './Styles/Styles.css';
import { useParams } from 'react-router';
import { getFirestore } from '@firebase/firestore';
import { collection, getDocs } from '@firebase/firestore';

export const ItemContainerGuantes = () => {

    const { ID } = useParams()


    const [product, setProduct] = useState([])
    useEffect(() => {
        const db = getFirestore()
        getDocs(collection(db, "guantes")).then((snapshot) => {
            setProduct(snapshot.docs.map((doc) => doc.data()));

        })
    }, [ID])

    return (
        <>

            {product.length ? product.map((p) => <ItemDetailGuantes key={p.id} producto={p} />)
                : <span className="span1">Guantes en camino...</span>}


        </>
    )

}

