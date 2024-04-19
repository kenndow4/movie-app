import { Auth } from "../../../types/auth";
import { Upload } from "../../../types/upload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const upload = async(data:Upload) =>{
    try {
		console.log(data);
		const res = await fetch(`${API_URL}/upload`, {
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