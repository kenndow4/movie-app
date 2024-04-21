import { Auth } from "../../../types/auth";
import { Upload } from "../../../types/upload";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const deleteApi = async(id:string) =>{
    try {
        console.log(id);
		
		const res = await fetch(`${API_URL}/delete`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id}),
		})

        
        const data = await res.json()
        
       
		return data
        
        // return userData;
        

	} catch (error) {
		console.log(['SERVER ERROR AUTH'])
	}
};