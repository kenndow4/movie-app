import { Auth } from "../../../types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const auth = async(data:Auth) =>{
    try {
		console.log(data);
		const res = await fetch(`${API_URL}/auth`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})

        
        const authUser = await res.json()
        console.log(authUser);
       
		return authUser
        
        // return userData;
        

	} catch (error) {
		console.log(['SERVER ERROR AUTH'])
	}
};