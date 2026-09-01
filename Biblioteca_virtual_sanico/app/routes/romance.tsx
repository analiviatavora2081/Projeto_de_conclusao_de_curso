import { Link } from "react-router";

const logoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WQGkk_VfPS_e3Nmeilj9g3MXf5cEIHZvCO3CPi8x7i5a674E1rj1Oxw&s=10";

const contentImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9IctVB20ko_5Wt7d1T4IbE0EnitIezWYPBeZHAJipKDD5ir2rIGJpxr&s=10";

const livrosRomance = [
  {
    id: 1,
    titulo: "A rainha vermelha",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre Vermelhos e Prateados. Mesmo sendo Vermelha, ela descobre possuir poderes especiais e passa a viver entre a elite, entrando em um perigoso jogo de segredos, traições e luta pelo poder.",
    img: contentImage,
  },
  {
    id: 2,
    titulo: "A rainha vermelha",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre Vermelhos e Prateados. Mesmo sendo Vermelha, ela descobre possuir poderes especiais e passa a viver entre a elite, entrando em um perigoso jogo de segredos, traições e luta pelo poder.",
    img: contentImage,
  },
];

export default function Romance() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* HEADER PRINCIPAL */}
      <header className="border-b border-gray-800 bg-[#171717] px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-600 bg-white">
              <img src={logoImage} alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-semibold tracking-wide">
              Biblioteca Virtual Sanico Teles
            </span>
          </Link>

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
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-700 transition-colors hover:bg-gray-600 cursor-pointer"
              title="Ir para o Login"
            >
              <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
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
          <Link to="/" className="flex items-center gap-2 hover:text-red-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Todas as categorias
          </Link>
          <a href="#" className="hover:text-red-500">Capa dura</a>
          <a href="#" className="hover:text-red-500">Fantasia</a>
          <a href="#" className="hover:text-red-500 text-red-500 font-bold">Romance</a>
          <a href="#" className="hover:text-red-500">Suspense</a>
          <a href="#" className="hover:text-red-500">Terror</a>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mx-auto max-w-4xl px-6 py-10">
        <h1 className="mb-12 text-center font-serif text-4xl tracking-wide">
          Livros Romance
        </h1>

        <div className="flex flex-col gap-12">
          {livrosRomance.map((livro) => (
            <div key={livro.id} className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              {/* CARD DA ESQUERDA (IMAGEM + TÍTULO) */}
              <div className="w-full max-w-xs rounded-xl border border-gray-800 bg-[#242424] p-4 text-center shadow-lg">
                <div className="mb-2 flex justify-end">
                  <button className="text-gray-400 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <div className="mb-4 flex h-52 w-full items-center justify-center overflow-hidden rounded bg-[#1f1f1f]">
                  <img src={livro.img} alt={livro.titulo} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-serif text-lg tracking-wide text-white">{livro.titulo}</h3>
              </div>

              {/* LADO DIREITO (BALÃO DE TEXTO + BOTÃO) */}
              <div className="flex flex-1 flex-col justify-between self-stretch pt-2">
                <div className="relative rounded-lg bg-[#fce8e8] p-5 text-black shadow-md">
                  <div className="absolute left-[-8px] top-6 hidden h-0 w-0 border-y-8 border-r-8 border-y-transparent border-r-[#fce8e8] md:block"></div>
                  <p className="font-serif text-xs leading-relaxed text-gray-900">
                    {livro.descricao}
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="w-full rounded bg-[#a2234e] py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#851b3f] md:w-64">
                    adicione seu livro
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}