type ItemCheck = {
  id?:number,
  name?:string,
  price?:number,
  imgUrl?:string 
}

const itemsArray:ItemCheck[] = [
    {
      id: 1,
      name: "Micro-ondas",
      price: 232.99,
      imgUrl: '/images/micro.JPG'
    },
    {
      id: 2,
      name: "Fogão",
      price: 293.19,
      imgUrl: '/images/fogão.JPG'
    },
    {
      id: 3,
      name: "Liquidificador",
      price: 99.90,
      imgUrl: '/images/liquidificador.JPG'
    },
    {
      id: 4,
      name: "Torradeira",
      price: 149.00,
      imgUrl: '/images/torradeira.JPG'
    },
    {
      id: 5,
      name: "Geladeira",
      price: 789.90,
      imgUrl: '/images/geladeira.JPG'
    },
    {
      id: 6,
      name: "Lavadoura",
      price: 425.94,
      imgUrl: '/images/lavadoura.JPG'
    },
    {
      id: 7,
      name: "Mesa c/cadeiras",
      price: 499.90,
      imgUrl: '/images/mesa.JPG'
    },
    {
      id: 8,
      name: "Sofa",
      price: 967.19,
      imgUrl: '/images/sofa.JPG'
    },
    {
      id: 9,
      name: "Televisor",
      price: 2999.99,
      imgUrl: '/images/tv.JPG'
    }
  ]

export default itemsArray 

