import img from '../assets/banners/food.png';
import img2 from '../assets/banners/food2.png';
import img3 from '../assets/banners/food3.png';
import img4 from '../assets/banners/food4.png';

const useArrayCategories = () => {

    const obj = [{
        id: 1,
        img: img,
        typeFood: "Perros",
        description: "Comida para Perros adultos, jóvenes o crias",
    }, {
        id: 2,
        img: img2,
        typeFood: "Gatos",
        description: "Cómida para Gatos adultos, jóvenes o crias",
    }, {
        id: 3,
        img: img3,
        typeFood: "Caballos",
        description: "Cómida para Caballos adultos, jóvenes o crias",
    }, {
        id: 4,
        img: img4,
        typeFood: "Cocodrilos",
        description: "Cómida para Cocodrilos adultos, jóvenes o crias",
    }, ];

    return {
        obj,
    }

}

export default useArrayCategories;