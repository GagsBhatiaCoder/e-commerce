import Zoom from "../Assets/Images/zoom.jpg";
import Zoom2 from "../Assets/Images/img1.png";
import Zoom3 from "../Assets/Images/img2.jpg";
import Zoom4 from "../Assets/Images/img3.jpg";
import Watch from "../Assets/Images/watch.jpg";
import Iphone from '../Assets/Images/iphone.jpg';
import Pullover from '../Assets/Images/pullover.jpg';
import Reebok from '../Assets/Images/reebok.jpg';
import Vans from '../Assets/Images/vans.jpg';
import Samsung from '../Assets/Images/samsung.jpg';
import Air1 from '../Assets/Images/airmax1.png';
import Air2 from '../Assets/Images/airmax2.jpg';
import Air3 from '../Assets/Images/airmax-3.png';
import Air4 from '../Assets/Images/airmax4.png';


const productData = [
  {
    id: 1,
    name: "Reebok ",
    star: 4.4,
    reviews: "23",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Reebok, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock: 10,
    size: [7, 8, 9, 10],
    company: "Reebok",
  },
  {
    id: 2,
    name: "Smart Watch",
    star: 4.2,
    reviews: "23 ",
    price: 300,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Watch, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Assesories",
    featured: true,
    stock: 0,
    size: ["S", "M", "L"],
    company: "Apple",
  },
  {
    id: 3,
    name: "Nike Zoom",
    star: 4.2,
    reviews: "23 ",
    price: 2700,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Zoom, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock: 10,
    size: [7, 8, 9, 10],
    company: "Nike",
  },
  {
    id: 4,
    name: "Nike Air Max 97 SE",
    star: 4.2,
    reviews: "23 ",
    price: 16995,
    colors: ["#f9393a", "#000", "#fff800 "],
    img: [Air1, Air2, Air3, Air4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: false,
    stock: 10,
    size: [7, 8, 9, 10],
    company: "Nike",
  },
  {
    id: 5,
    name: "Vans",
    star: 3.5,
    reviews: "23 ",
    price: 2700,
    colors: ["#f9393a", "#fff800 "],
    img: [Vans, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Shoes",
    featured: true,
    stock: 10,
    size: [7, 8, 9, 10],
    company: "Vans",
  },
  {
    id: 6,
    name: "Samsung",
    star: 3.5,
    reviews: "23 ",
    price: 2700,
    colors: ["#f9393a", "#fff800 "],
    img: [Samsung, Zoom2, Zoom3, Zoom4],
    discription: "This is a sports shoes which is best for running",
    category: "Mobile",
    featured: true,
    stock: 10,
    company: "Samsung",
  },
  {
    id: 7,
    name: "I-Phone",
    star: 3.5,
    reviews: "23 ",
    price: 60000,
    colors: ["#525ceb", "#000", "#fff800 "],
    img: [Iphone, Zoom2, Zoom3, Zoom4],
    discription:
      "This is a sports shoes which is best for running these are few more words to check the slice method",
    category: "Mobile",
    featured: true,
    stock: 10,
    company: "Apple",
  },
  {
    id: 8,
    name: "Pullover",
    star: 3.5,
    reviews: "23 ",
    price: 2500,
    colors: ["#525ceb", "#000", "#fff800 "],
    img: [Pullover, Zoom2, Zoom3, Zoom4],
    discription:
      "This is a sports shoes which is best for running these are few more words to check the slice method",
    category: "Clothes",
    featured: true,
    size:["S", "M" , "L"],
    stock: 10,
    company: "Max",
  },
];

export default productData;
