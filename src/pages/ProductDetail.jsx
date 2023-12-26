import React ,{useState,useEffect}from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../services/productService";

export default function ProductDetail() {

    let { name } = useParams()

    const [product, setProduct] = useState({
        id: 0,
        productName: "Chai",
        unitPrice: 18.0,
        unitsInStock: 39,
        quantityPerUnit: "10 boxes x 30 bags",
        category: {
            categoryId: 1,
            categoryName: "Beverages"}
        });

  useEffect(()=>{
    let productService = new ProductService();
    productService.getProductByName(name).then(result => setProduct(result.data.data))  
  })

  return (
    <div>
        
        <Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{product.productName}</Card.Header>
        <Card.Meta>{product.unitPrice}</Card.Meta>
        <Card.Description>
          {product.category.categoryName}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add To Cart
          </Button>

          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group></div>
  )
}
