import { FC, useState } from "react";
import { AuthService } from "../services/auth.service";
import { toast } from "react-toastify";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";

const Auth: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLogin, setLogin] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const logInHandler = async (e :React.FormEvent<HTMLFormElement>) => {
        try {
            
            e.preventDefault();
            const data = await AuthService.login({email, password});
            if(data){
                setTokenToLocalStorage('token', data.token);
                dispatch(login(data))
                toast.success('You logged in');
                navigate('/');
            }
        } catch (err: any) {
        const error = err.response?.data.message;
        toast.error(error.toString());
        
        }
    }
    const registrationHandler = async (e :React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.registration({email, password});
            if(data){
                toast.success('Account has been created');
                setLogin(!isLogin);
            }
        } catch (err: any) {
        const error = err.response?.data.message;
        toast.error(error.toString());
        
        }
    }

    return (
        <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
            <h1 className="mb-10 text-center text-xl">
                {
                    isLogin ? 'Login' : 'Registration'
                }
            </h1>
            <form onSubmit={isLogin ? logInHandler : registrationHandler} className="flex w-1/3 flex-col mx-auto gap-5" >
                        <input onChange={(e) => setEmail(e.target.value)} type="text" className="input" placeholder="Email" />
                        <input onChange={(e) => setPassword(e.target.value)} type="text" className="input" placeholder="Password" />
                    <button className="btn btn-green mx-auto">Submit</button>
            </form>
            
            <div className="mt-5 flex justify-center">

                {
                    isLogin ? (
                        <button onClick={() => setLogin(!isLogin)}  className="text-slate-300 hover:text-white">
                            You don`t have an account?
                        </button>
                    ):(
                        <button onClick={() => setLogin(!isLogin)} className="text-slate-300 hover:text-white">
                            Already have an account?
                        </button>

                    )
                }

            </div>
        </div>
    )
}

export default Auth;