import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Biblioteca Virtual Sanico Teles" },
    { name: "description", content: "Biblioteca Virtual Escolar" },
  ];
}

const logoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WQGkk_VfPS_e3Nmeilj9g3MXf5cEIHZvCO3CPi8x7i5a674E1rj1Oxw&s=10";

const contentImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9IctVB20ko_5Wt7d1T4IbE0EnitIezWYPBeZHAJipKDD5ir2rIGJpxr&s=10";

// Adicionado o campo 'link' para cada departamento
const departamentos = [
  { nome: "Romance clichê", img: contentImage, link: "/romance" },
  { nome: "Fantasia", img: contentImage, link: "#" },
  { nome: "KIDS", img: contentImage, link: "#" },
  { nome: "Suspense", img: contentImage, link: "#" },
  { nome: "Aventura", img: contentImage, link: "#" },
  { nome: "Terror", img: contentImage, link: "#" },
];

const livrosRecentes = [
  {
    id: 1,
    titulo: "A Rainha Vermelha",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre",
    img: contentImage,
  },
  {
    id: 2,
    titulo: "A Rainha Vermelha",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre",
    img: contentImage,
  },
  {
    id: 3,
    titulo: "A Rainha Vermelha",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre",
    img: contentImage,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      {/* HEADER PRINCIPAL */}
      <header className="border-b border-gray-800 bg-[#171717] px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* LOGO E NOME */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-600 bg-white">
              <img
                src={logoImage}
                alt="Logo Sanico Teles"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-semibold tracking-wide">
              Biblioteca Virtual Sanico Teles
            </span>
          </div>

          {/* BARRA DE PESQUISA */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Pesquisa de livros"
              className="w-full rounded-full bg-white px-9 py-1.5 text-sm text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600"
            />
            <svg
              className="absolute left-3 top-2.5 h-4 w-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* ÁREA DO USUÁRIO */}
          <div className="flex items-center gap-3 text-xs">
            <Link
              to="/login"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"
            >
              <svg
                className="h-5 w-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <div className="leading-tight">
              <p className="text-gray-400">Olá, visitante</p>
              <Link to="/login" className="font-bold hover:underline">
                Entre ou Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SUB-HEADER / CATEGORIAS */}
      <nav className="border-b border-gray-800 bg-[#121212] px-6 py-2">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 text-sm font-medium">
          <button className="flex items-center gap-2 hover:text-red-500">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Todas as categorias
          </button>
          <a href="#" className="hover:text-red-500">
            Capa dura
          </a>
          <a href="#" className="hover:text-red-500">
            Fantasia
          </a>
          <Link to="/romance" className="hover:text-red-500">
            Romance
          </Link>
          <a href="#" className="hover:text-red-500">
            Suspense
          </a>
          <a href="#" className="hover:text-red-500">
            Terror
          </a>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* SEÇÃO NAVEGUE POR DEPARTAMENTOS */}
        <section className="mb-14 text-center">
          <h2 className="mb-8 font-serif text-3xl font-light tracking-wide">
            Navegue por Departamentos
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {departamentos.map((dept, index) => (
              <Link
                key={index}
                to={dept.link}
                className="group flex flex-col items-center cursor-pointer"
              >
                <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-transparent transition-all group-hover:scale-105 group-hover:border-red-600">
                  <img
                    src={dept.img}
                    alt={dept.nome}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="mt-3 text-sm font-medium group-hover:text-red-500">
                  {dept.nome}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SEÇÃO ACABOU DE CHEGAR */}
        <section className="text-center">
          <h2 className="mb-8 font-serif text-3xl font-light tracking-wide">
            Acabou de chegar
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {livrosRecentes.map((livro) => (
              <div
                key={livro.id}
                className="flex flex-col overflow-hidden rounded-lg bg-[#242424] p-4 text-left shadow-lg border border-gray-800"
              >
                <div className="mb-2 flex justify-end">
                  <button className="text-gray-400 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                <div className="mb-4 flex h-60 w-full items-center justify-center overflow-hidden rounded bg-[#1f1f1f]">
                  <img
                    src={livro.img}
                    alt={livro.titulo}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mb-6 flex-1 text-xs leading-relaxed text-gray-300">
                  {livro.descricao}
                </p>

                <button className="w-full rounded bg-[#a2234e] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#851b3f]">
                  adicione seu livro
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}