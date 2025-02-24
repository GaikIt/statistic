import { FC } from "react";
import { NavLink } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="min-h-screen   flex flex-col items-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-900">Добро пожаловать!</h1>
        <p className="text-gray-600 mt-2">
          Управляйте своими финансами с легкостью. Просматривайте транзакции,
          управляйте категориями и следите за своими расходами.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <NavLink
            to="/transactions"
            className="block p-4 bg-blue-500 text-white text-center rounded-lg shadow-md hover:bg-blue-600"
          >
            Транзакции
          </NavLink>
          <NavLink
            to="/categories"
            className="block p-4 bg-green-500 text-white text-center rounded-lg shadow-md hover:bg-green-600"
          >
            Категории
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
