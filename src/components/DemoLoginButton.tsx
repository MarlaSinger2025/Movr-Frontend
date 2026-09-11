import type { LoginInput } from "../types/User"
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DEMO_CREDENTIALS: LoginInput = { identifier: "DemoUser", password: "Password123"};

export default function DemoLogin() {

const {login} = useAuth();
const navigate = useNavigate();

const handleDemoLogin = async () => {
    try {
        await login(DEMO_CREDENTIALS);
        navigate("/");
    } catch(err) {
        console.error('Demo login failed', err);
    }
}; 

return (
<button
    type='button'
    onClick={handleDemoLogin}
    className="px-4 py-2 rounded-lg text-sm font-medium bg-[#6600ae] text-white hover:cursor-pointer hover:underline "
>
Demo Login
</button>

);
}