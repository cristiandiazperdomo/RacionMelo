import { v4 as uuidv4 } from 'uuid';

const initialUserState =  {
	userInfo: {
	    user: "Cristian Díaz",
	    id: uuidv4(),
	}
}

export const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		default: {
			return state;
		}
	}
}