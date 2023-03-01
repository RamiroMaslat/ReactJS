import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainter = () => {
  const [singleProduct, setSingleProduct] = useState({});

  const { id } = useParams();

  const getProduct = () =>{
    const db = getFirestore();
    const querySnapshot = doc(db, 'items', id);

    getDoc(querySnapshot)
    .then((response)=>{      
      setSingleProduct({id: response.id, ...response.data()});
      console.log(singleProduct)
    })
    .catch((error)=>{console.log(error)})
  }

  // const getProduct = fetch(`https://fakestoreapi.com/products/${id}`, {
  //   method: 'GET',
  // });

  useEffect(() => {
    getProduct()
      
  }, []);




  return (
    <div>
      <ItemDetail product={singleProduct} />
    </div>
  )
}

export default ItemDetailContainter