type ItemCheck = {
  id?:number,
  name?:string,
  price?:number,
  imgUrl?:string,
  quantity: number
}

const itemsArray:ItemCheck[] = [
    {
      id: 1,
      name: "Micro-ondas",
      price: 232.99,
      imgUrl: '/images/micro.JPG',
      quantity:5
    },
    {
      id: 2,
      name: "Fogão",
      price: 293.19,
      imgUrl: '/images/fogão.JPG',
      quantity:0
    },
    {
      id: 3,
      name: "Liquidificador",
      price: 99.90,
      imgUrl: '/images/liquidificador.JPG',
      quantity:3
    },
    {
      id: 4,
      name: "Torradeira",
      price: 149.00,
      imgUrl: '/images/torradeira.JPG',
      quantity:2
    },
    {
      id: 5,
      name: "Geladeira",
      price: 789.90,
      imgUrl: '/images/geladeira.JPG',
      quantity:1
    },
    {
      id: 6,
      name: "Lavadoura",
      price: 425.94,
      imgUrl: '/images/lavadoura.JPG',
      quantity:0
    },
    {
      id: 7,
      name: "Mesa c/cadeiras",
      price: 499.90,
      imgUrl: '/images/mesa.JPG',
      quantity:9
    },
    {
      id: 8,
      name: "Sofa",
      price: 967.19,
      imgUrl: '/images/sofa.JPG',
      quantity:0
    },
    {
      id: 9,
      name: "Televisor",
      price: 2999.99,
      imgUrl: '/images/tv.JPG',
      quantity:0
    }
  ]

export default itemsArray 

