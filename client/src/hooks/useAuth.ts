import { useAppSelector } from "../store/hooks"

export const useAuth = () : boolean=> {
    const useAuth = useAppSelector((state) => state.user.isAuth);
     return useAuth;
}