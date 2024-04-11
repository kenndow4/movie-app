import LoginForm from "@/components/form/logForm"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: 'Login',
	description: 'inicia sesion en gestix',
}

export default function LoginPage() {
	
	
	
	return (
		<LoginForm/>
	)
}