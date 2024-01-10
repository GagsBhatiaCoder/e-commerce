import Zoom from "../Assets/Images/zoom.jpg";
import Zoom2 from "../Assets/Images/img1.png";
import Zoom3 from "../Assets/Images/img2.jpg";
import Zoom4 from "../Assets/Images/img3.jpg";
import Watch from "../Assets/Images/watch.jpg"
const productData = [
  {
    id: 1,
    name: "Reebok ",
    star: 4.4,
    reviews:"23",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock:10,
    brand: "Reebok"
  },
  {
    id: 2,
    name: "Smart Watch",
    star: 4.2,
    reviews:"23 ",
    price: 300,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Watch, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Assesories",
    featured: true,
    stock:0,
    brand: "Apple"
  },
  {
    id: 3,
    name: "Nike Zoom",
    star: 4.2 ,
    reviews:"23 ",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock:10,
    brand: "Nike"
  },
  {
    id: 4,
    name: "Nike ZoomX",
    star: 4.2,
    reviews:"23 ",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: false,
    stock:10,
    brand: "Nike"
  },
  {
    id: 5,
    name: "Adidas",
    star: 3.5,
    reviews:"23 ",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock:10,
    brand: "Nike"
  },
  {
    id: 6,
    name: "Samsung",
    star: 3.5,
    reviews:"23 ",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock:10,
    brand: "Nike"
  },
  {
    id: 7,
    name: "I-Phone",
    star: 3.5,
    reviews:"23 ",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running these are few more words to check the slice method",
    category: "Shoes",
    featured: true,
    stock:10,
    brand: "Nike"
  },
];

export default productData;
