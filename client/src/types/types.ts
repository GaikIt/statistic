export interface IUser {
   
    id: number
    email: string
     token: string
}

export interface IUserData{
    email: string,
    password: string
}

export interface IResponseUser {
    email: string 
    id: number
    createdAt: string 
    updatedAt: string
    password: string 
}

export interface IResponseUserData{
    token: string
    user: IResponseUser
}

export interface ITransaction{
    amount: number
    type: string
    id: number
    createdAt: string 
    updatedAt: string
    title: string 
    category: ICategory

}
export interface ICategory{
    id: number
    createdAt: string 
    updatedAt: string
    title: string 
    transactions?: []
}

export interface IResponseTransactionLoader{
    categories: ICategory[]
    transactions: ITransaction[]
    totalIncome: number
    totalExpense: number
}