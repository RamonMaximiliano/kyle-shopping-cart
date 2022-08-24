type ItemCheck = {
  id?:number,
  name?:string,
  price?:number,
  imgUrl?:string 
}

const itemsArray:ItemCheck[] = [
    {
      id: 1,
      name: "Book",
      price: 10.99,
      imgUrl: '/images/micro.JPG'
    },
    {
      id: 2,
      name: "Computer",
      price: 1199,
      imgUrl: '/images/fogão.JPG'
    },
    {
      id: 3,
      name: "Banana",
      price: 1.05,
      imgUrl: '/images/liquidificador.JPG'
    },
    {
      id: 4,
      name: "Car",
      price: 14000,
      imgUrl: '/images/torradeira.JPG'
    }
  ]

export default itemsArray 

/*

http://localhost:3000/images/micro.JPG 

ler com calma:
https://daveceddia.com/react-image-tag/#commento-login-box-container



*/