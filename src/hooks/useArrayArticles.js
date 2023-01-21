import img from '../assets/banners/food.png';
import img2 from '../assets/banners/food2.png';
import img3 from '../assets/banners/food3.png';
import img4 from '../assets/banners/food4.png';

const useArrayArticles = () => {

    const obj = [{
        id: 1,
        img: img,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Comida para Perros adultos, jóvenes o crias",
    }, {
        id: 2,
        img: img2,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Gatos adultos, jóvenes o crias",
    }, {
        id: 3,
        img: img3,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Caballos adultos, jóvenes o crias",
    }, {
        id: 4,
        img: img4,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Cocodrilos adultos, jóvenes o crias",
    }, {
        id: 5,
        img: img,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Comida para Perros adultos, jóvenes o crias",
    }, {
        id: 6,
        img: img2,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Gatos adultos, jóvenes o crias",
    }, {
        id: 7,
        img: img3,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Caballos adultos, jóvenes o crias",
    }, {
        id: 8,
        img: img4,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Cocodrilos adultos, jóvenes o crias",
    }, {
        id: 9,
        img: img,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Comida para Perros adultos, jóvenes o crias",
    }, {
        id: 10,
        img: img2,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Gatos adultos, jóvenes o crias",
    }, {
        id: 11,
        img: img3,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Caballos adultos, jóvenes o crias",
    }, {
        id: 12,
        img: img4,
        price: Math.floor((Math.random() * (1000 - 0 + 1)) + 0),
        description: "Cómida para Cocodrilos adultos, jóvenes o crias",
    }];

    return {
        obj,
    }

}

export default useArrayArticles;