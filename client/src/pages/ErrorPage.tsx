import { FC } from 'react'
import { Link } from 'react-router-dom'
const ErrorPage: FC = () => {
    return (
        <div className='min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10'>
            <Link to="/" className='bg-sky500 rounded-md px-6 py-2 hover:bg-sky-600'> Back</Link>
        </div>
    )
}

export default ErrorPage