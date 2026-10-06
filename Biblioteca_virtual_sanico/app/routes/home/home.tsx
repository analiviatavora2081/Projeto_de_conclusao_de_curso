import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import type { Route } from "../+types/home";

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

const departamentos = [
  { id: "romance", nome: "Romance clichê", img: contentImage, link: "/romance" },
  { id: "fantasia", nome: "Fantasia", img: contentImage, link: "/fantasia" },
  { id: "kids", nome: "KIDS", img: contentImage, link: "/kids" },
  { id: "suspense", nome: "Suspense", img: contentImage, link: "/suspense" },
  { id: "aventura", nome: "Aventura", img: contentImage, link: "/aventura" },
  { id: "terror", nome: "Terror", img: contentImage, link: "/terror" },
];

const livrosRecentes = [
  {
    id: 1,
    titulo: "A Rainha Vermelha",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre Vermelhos e Prateados...",
    img: contentImage,
  },
  {
    id: 2,
    titulo: "O Hobbit",
    descricao:
      "Bilbo Bolseiro vive uma vida calma até ser convocado por Gandalf para uma grande aventura com treze anões...",
    img: contentImage,
  },
  {
    id: 3,
    titulo: "Harry Potter",
    descricao:
      "A história de um jovem que descobre seus poderes mágicos e ingressa em uma escola de magia...",
    img: contentImage,
  },
];

export default function Home() {
  // Estados para gerir a pesquisa na Home
  const [termo, setTermo] = useState("");
  const [focado, setFocado] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Lista de sugestões baseada no termo digitado
  const sugestoes = livrosRecentes.filter((livro) =>
    livro.titulo.toLowerCase().includes(termo.toLowerCase())
  );

  // Fecha as sugestões ao clicar fora da barra de pesquisa
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setFocado(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Envia a pesquisa
  const handleBuscar = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (termo.trim().length > 0) {
      setFocado(false);
      navigate(`/pesquisa?q=${encodeURIComponent(termo)}`);
    }
  };

  const handleSelecionarSugestao = (titulo: string) => {
    setTermo(titulo);
    setFocado(false);
    navigate(`/pesquisa?q=${encodeURIComponent(titulo)}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER PRINCIPAL */}
      <header className="border-b border-gray-800 bg-[#333333] px-6 py-3 relative z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* LOGO E NOME */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-500 bg-white">
              <img
                src={logoImage}
                alt="Logo Sanico Teles"
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-sm font-serif tracking-wide">
              Biblioteca Virtual Sanico Teles
            </span>
          </Link>

          {/* BARRA DE PESQUISA FUNCIONAL */}
          <div ref={searchRef} className="relative flex-1 max-w-md">
            <form onSubmit={handleBuscar} className="relative flex items-center z-30">
              <input
                type="text"
                value={termo}
                onChange={(e) => {
                  setTermo(e.target.value);
                  setFocado(true);
                }}
                onFocus={() => setFocado(true)}
                placeholder="Pesquisa de livros"
                className="w-full rounded-full bg-white pl-9 pr-4 py-1.5 text-sm text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600 font-sans"
              />
              <button
                type="submit"
                aria-label="Pesquisar"
                className="absolute left-3 top-2 text-gray-500 hover:text-black"
              >
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>

            {/* CAIXA SUSPENSA DE SUGESTÕES (DROPDOWN) */}
            {focado && termo.trim().length > 0 && (
              <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden rounded-3xl bg-white pt-10 pb-2 text-black shadow-2xl">
                <div className="flex flex-col border-t border-gray-200">
                  {sugestoes.length > 0 ? (
                    sugestoes.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelecionarSugestao(item.titulo)}
                        className="px-6 py-2 text-center uppercase tracking-wider text-xs hover:bg-gray-100 font-serif transition-colors"
                      >
                        {item.titulo}
                      </button>
                    ))
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleBuscar()}
                      className="px-4 py-2 text-center text-xs text-gray-600 font-sans hover:bg-gray-100"
                    >
                      Pesquisar por "{termo}"
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ÁREA DO USUÁRIO */}
          <div className="flex items-center gap-3 text-xs">
            <Link
              to="/login"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 hover:bg-gray-500 transition-colors cursor-pointer"
              title="Ir para o Login"
            >
              <svg
                className="h-5 w-5 text-white"
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
              <p className="text-gray-300">Olá, visitante</p>
              <Link to="/login" className="font-bold hover:underline">
                Entre ou Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SUB-HEADER / CATEGORIAS */}
      <nav className="border-b border-gray-900 bg-black px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 text-sm font-serif">
          <Link to="/" className="flex items-center gap-2 text-red-500 hover:text-red-400">
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
          </Link>
          <Link to="/capa-dura" className="hover:text-red-500">
            Capa dura
          </Link>
          <Link to="/fantasia" className="hover:text-red-500">
            Fantasia
          </Link>
          <Link to="/romance" className="hover:text-red-500">
            Romance
          </Link>
          <Link to="/kids" className="hover:text-red-500">
            KIDS
          </Link>
          <Link to="/suspense" className="hover:text-red-500">
            Suspense
          </Link>
          <Link to="/aventura" className="hover:text-red-500">
            Aventura
          </Link>
          <Link to="/terror" className="hover:text-red-500">
            Terror
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        {/* SEÇÃO NAVEGUE POR DEPARTAMENTOS */}
        <section className="mb-16 text-center">
          <h2 className="mb-10 font-serif text-3xl font-light tracking-wide">
            Navegue por Departamentos
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {departamentos.map((dept) => (
              <Link
                key={dept.id}
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
                <span className="mt-3 text-sm font-serif group-hover:text-red-500">
                  {dept.nome}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* SEÇÃO ACABOU DE CHEGAR */}
        <section className="text-center">
          <h2 className="mb-10 font-serif text-3xl font-light tracking-wide">
            Acabou de chegar
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {livrosRecentes.map((livro) => (
              <div
                key={livro.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#121118] p-4 text-left shadow-2xl"
              >
                <div className="mb-2 flex justify-end">
                  <button type="button" aria-label="Mais opções" className="text-gray-400 hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>

                <div className="mb-4 flex h-52 w-full items-center justify-center overflow-hidden rounded bg-[#2a2a2a]">
                  <img
                    src={livro.img}
                    alt={livro.titulo}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mb-6 flex-1 text-xs leading-relaxed text-gray-300 font-serif">
                  {livro.descricao}
                </p>

                <button type="button" className="w-full rounded bg-[#a2234e] py-2 text-xs font-semibold text-white transition-colors hover:bg-[#851b3f]">
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