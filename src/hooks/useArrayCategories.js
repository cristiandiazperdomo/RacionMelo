import img from '../assets/banners/food.png';
import img2 from '../assets/banners/food2.png';
import img3 from '../assets/banners/food3.png';
import img4 from '../assets/banners/food4.png';

const useArrayCategories = () => {

    // {
    //     id: 6,
    //     img: img2,
    //     typeFood: "Gatos",
    //     description: "Cómida para Gatos adultos, jóvenes o crias",
    // }
    const animalCategories = [{
        id: 1,
        img: img,
        typeFood: 'Perros',
        description: 'Comida para perros',
    }, {
        id: 2,
        img: img2,
        typeFood: 'Gatos',
        description: 'Comida para gatos',
    }, {
        id: 3,
        img: img3,
        typeFood: 'Pájaros',
        description: 'Comida para pájaros',
    }, {
        id: 4,
        img: img4,
        typeFood: 'Peces',
        description: 'Comida para peces',
    }, {
        id: 5,
        img: img,
        typeFood: 'Caballos',
        description: 'Comida para caballos',
    }, {
        id: 6,
        img: img2,
        typeFood: 'Conejos',
        description: 'Comida para conejos',
    }, {
        id: 7,
        img: img3,
        typeFood: 'Hamsters',
        description: 'Comida para hamsters',
    }, {
        id: 8,
        img: img4,
        typeFood: 'Reptiles',
        description: 'Comida para reptiles',
    }, {
        id: 9,
        img: img,
        typeFood: 'Tortugas',
        description: 'Comida para tortugas',
    }];

    return {
        animalCategories,
    }
}
export default useArrayCategories;