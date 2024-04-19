

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const search = async(search:string) =>{
    try {
		
		const res = await fetch(`${API_URL}/auth`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(search),
		})

        
        const authUser = await res.json()
        console.log(authUser);
       
		return authUser
        
        // return userData;
        

	} catch (error) {
		console.log(['SERVER ERROR AUTH'])
	}
};