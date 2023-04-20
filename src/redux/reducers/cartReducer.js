import dog3 from '../../assets/feed/young_dog2.png';

const initialPetFoodState = {
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
};


const calculateCartTotal = (cart) => {
    let sum = 0;
    cart.map(item => {
        sum = sum + (item.price * item.amount);
    });
    return {
        total: Math.round(sum),
        totalPlusShipping: Math.round(sum + (cart.length > 0 ? 40 : 0)),    // 40 = shipping
    }
};

const addToCart = (state, product) => {
    const newState = {...state};  // Creating a copy of the state
    //  Checking if the product was already added to cart
    const isProductAlreadyInCart = state.cart.some(item => item.id === product.id);
    if(isProductAlreadyInCart) {    // If it's true amount will be increased.
        const updatedCart = state.cart.map(item => { 
            if (item.id === product.id) {
                return { 
                    ...item, 
                    amount: item.amount + 1,
                };
            }
            return item;
        });
        newState.cart = updatedCart;
    } else {    // If it's not true it will add the product.
        newState.cart = [
            ...newState.cart,
            {
                ...product,
                amount: 1,
            },
        ]
    }
    return {
        ...newState,
    };
};

const removeFromCart = (state, id) => {
    const newState = {...state};
    const itemToRemove = newState.cart.find(item => item.id === id); // get the item which will be removed
    if (itemToRemove.amount === 1) { // if amount is equal to 1 it'll be removed.
        newState.cart = state.cart.filter(item => item.id !== id);
    } else { // if the amount is not equal to 1 amount you will receive a decrease of 1.
        const updatedCart = state.cart.map(item => {
            if (item.id === id) {
                return {
                    ...item, 
                    amount: item.amount - 1,
                };
            }
            return item;
        });
        newState.cart = updatedCart;
    }
    return {
        ...newState,
    };
};

export const cartReducer = (state = initialPetFoodState, action) => {
	switch (action.type) {
	case 'ADD_TO_CART': {
        return {
            ...state,
            cart: addToCart(state, action.payload).cart,
        }
	}
    case 'REMOVE_FROM_CART': {
        return {
            ...state,
            cart: removeFromCart(state, action.payload).cart,
        }
    }
    case 'CALCULATE_CART_TOTAL': {
        return {
            ...state,
            total: calculateCartTotal(state.cart).total,
            totalPlusShipping: calculateCartTotal(state.cart).totalPlusShipping,
        }
    }
    case 'DELIVERY_INFO': {
            return {
                ...state,
                deliveryInfo: action.payload,
            }
        }
	default: 
		return state;
	}
};