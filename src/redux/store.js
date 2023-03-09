import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';

import reducer from './reducers/index.js';

import img_default from '../assets/logos/dog-empty-shopping-cart2.png';
import dog from '../assets/feed/young_dog.png';
import dog2 from '../assets/feed/young_dog1.png';
import dog3 from '../assets/feed/young_dog2.png';
import cat from '../assets/feed/young_cat.png';
import cat2 from '../assets/feed/young_cat1.png';
import fish from '../assets/feed/young_fish.png';
import fish2 from '../assets/feed/young_fish2.png';
import horse from '../assets/feed/young_horse.png';
import horse2 from '../assets/feed/young-horse2.png';
import bird from '../assets/banners/bird.png';

const initialPetFood = {
    total: 0,
    totalPlusShipping: 0,
    deliveryInfo: {
        userName: 'Cristian Díaz',
        address: 'Calle Evergreen Terrace 742',
        city: 'Springfield',
        postalCode: '65453',
        phoneNumber: '898 787 676',
        email: 'email.amazon@gmail.com',
    },
    categories: [
        {
            id: 1,
            img: dog,
            typeFood: 'Perros',
            description: 'Comida para perros',
        }, {
            id: 2,
            img: cat,
            typeFood: 'Gatos',
            description: 'Comida para gatos',
        }, {
            id: 3,
            img: bird,
            typeFood: 'Pájaros',
            description: 'Comida para pájaros',
        }, {
            id: 4,
            img: fish,
            typeFood: 'Peces',
            description: 'Comida para peces',
        }, {
            id: 5,
            img: horse,
            typeFood: 'Caballos',
            description: 'Comida para caballos',
        }, {
            id: 6,
            img: img_default,
            typeFood: 'Conejos',
            description: 'Comida para conejos',
        }, {
            id: 7,
            img: img_default,
            typeFood: 'Hamsters',
            description: 'Comida para hamsters',
        }, {
            id: 8,
            img: img_default,
            typeFood: 'Reptiles',
            description: 'Comida para reptiles',
        }, {
            id: 9,
            img: img_default,
            typeFood: 'Tortugas',
            description: 'Comida para tortugas',
        }
    ],
    cart: [
        {
            id: 2,
            name: "Alimento para perros Adultos",
            urlImage: dog3,
            easyDescription: "Alimento completo para perros con sabor a carne.",
            complexDescription: "Este alimento para perros adultos es una fuente completa de proteínas de alta calidad, vitaminas y minerales necesarios para mantener una salud óptima y una actividad física sana. Con sabor a carne, se asegura que los perros encuentren el sabor irresistible. Además, incluye prebióticos para un sistema digestivo saludable y ácidos grasos Omega-3 y Omega-6 para una piel y pelaje saludables.",
            price: 35.99,
            amount: 1,
        }
    ],
    articles: [
        {
            id: 1,
            name: "Alimento para gatos Premium",
            urlImage: cat2,
            easyDescription: "Alimento completo para gatos con sabor a pollo.",
            complexDescription: "Este alimento premium para gatos contiene una combinación perfecta de proteínas de alta calidad, vitaminas y minerales para mantener una salud óptima y un pelaje brillante. Con sabor a pollo, aseguramos que los gatos encuentren el sabor irresistible. Además, incluye antioxidantes para una digestión saludable y prebióticos para un sistema digestivo fuerte.",
            price: 25.99,
            amount: 1,
        },
        {
            id: 2,
            name: "Alimento para perros Adultos",
            urlImage: dog3,
            easyDescription: "Alimento completo para perros con sabor a carne.",
            complexDescription: "Este alimento para perros adultos es una fuente completa de proteínas de alta calidad, vitaminas y minerales necesarios para mantener una salud óptima y una actividad física sana. Con sabor a carne, se asegura que los perros encuentren el sabor irresistible. Además, incluye prebióticos para un sistema digestivo saludable y ácidos grasos Omega-3 y Omega-6 para una piel y pelaje saludables.",
            price: 35.99,
            amount: 1,
        },
        {
            id: 3,
            name: "Alimento para aves de corral",
            urlImage: bird,
            easyDescription: "Alimento completo para aves de corral con semillas y granos.",
            complexDescription: "Este alimento para aves de corral contiene una combinación de semillas y granos de alta calidad para una nutrición completa. Incluye vitaminas y minerales esenciales para un crecimiento saludable y un sistema inmunológico fuerte. Además, incluye prebióticos para un sistema digestivo saludable y ácidos grasos Omega-3 y Omega-6 para un pelaje brillante.",
            price: 19.99,
            amount: 1,
        },
        {
            id: 7,
            name: "Alimento para peces",
            urlImage: fish2,
            easyDescription: "Alimento completo para peces con alimentos naturales.",
            complexDescription: "Este alimento para peces es una combinación perfecta de alimentos naturales como el plancton, gambas y algas, que proporcionan los nutrientes esenciales para un crecimiento saludable y una piel radiante. Además, está diseñado para mantener la salud de su sistema digestivo y ayudar a prevenir enfermedades.",
            price: 25.99,
            amount: 1,
        },
        {
            id: 5,
            name: "Alimento para roedores",
            urlImage: img_default,
            easyDescription: "Alimento completo para roedores con frutas y semillas.",
            complexDescription: "Este alimento para roedores está formulado con una combinación óptima de frutas y semillas para proporcionar una dieta equilibrada y una nutrición completa. Contiene vitaminas y minerales esenciales para mantener una buena salud y un sistema inmunológico fuerte. Además, su bajo contenido de grasas ayuda a mantener un peso saludable y prevenir problemas de salud relacionados con la obesidad.",
            price: 12.99,
            amount: 1,
        },
        {
            id: 4,
            name: "Alimento para conejos",
            urlImage: img_default,
            easyDescription: "Alimento completo para conejos con hierbas y verduras.",
            complexDescription: "Este alimento para conejos está formulado con una combinación óptima de hierbas y verduras para asegurar una dieta equilibrada y un crecimiento saludable. Contiene vitaminas y minerales esenciales para mantener una buena salud y un pelaje brillante. Además, su textura crunchy ayuda a mantener limpios los dientes y prevenir problemas dentales.",
            price: 15.99,
            amount: 1,
        },
        {
            id: 6,
            name: "Alimento para tortugas",
            urlImage: img_default,
            easyDescription: "Alimento completo para tortugas con hojas y frutas.",
            complexDescription: "Este alimento para tortugas está formulado con una combinación óptima de hojas y frutas para proporcionar una dieta equilibrada y una nutrición completa. Contiene vitaminas y minerales esenciales para mantener una buena salud y un sistema inmunológico fuerte. Además, su alto contenido de calcio ayuda a mantener un esqueleto saludable y prevenir problemas de salud relacionados con la osteoporosis.",
            price: 17.99,
            amount: 1,
        },
        {
            id: 8,
            name: "Alimento para reptiles",
            urlImage: img_default,
            easyDescription: "Alimento completo para reptiles con vitaminas y proteínas.",
            complexDescription: "Este alimento para reptiles está formulado específicamente para proporcionar una dieta equilibrada y completa para reptiles como serpientes, lagartos y tortugas. Contiene una combinación de proteínas de alta calidad, vitaminas y minerales para apoyar el crecimiento y la salud de los reptiles.",
            price: 35.99,
            amount: 1,
        },
        {
            id: 9,
            name: "Alimento para aves exóticas",
            urlImage: img_default,
            easyDescription: "Alimento completo para aves exóticas con frutas y semillas.",
            complexDescription: "Este alimento para aves exóticas está diseñado para satisfacer las necesidades nutricionales únicas de aves exóticas como loros, pericos y guacamayos. Contiene una mezcla de frutas, semillas y granos que proporcionan los nutrientes esenciales para mantener una buena salud y fortalecer el sistema inmunológico de las aves.",
            price: 12.99,
            amount: 1,
        },
        {
            id: 10,
            name: "Alimento para loros",
            urlImage: img_default,
            easyDescription: "Alimento completo para loros con frutas y semillas.",
            complexDescription: "Este alimento para loros es una fuente completa de nutrientes esenciales para mantener la salud y el bienestar de su ave. Contiene una combinación equilibrada de frutas y semillas naturales, así como vitaminas y minerales esenciales para una dieta saludable. Además, es fácil de digerir y ayuda a mantener un sistema digestivo saludable.",
            price: 13.99,
            amount: 1,
        },
    ]
};

const composedEnhansers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const store = createStore(reducer, initialPetFood, composedEnhansers);

export default store;