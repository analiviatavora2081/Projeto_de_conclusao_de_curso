import { Link } from "react-router";

const logoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WQGkk_VfPS_e3Nmeilj9g3MXf5cEIHZvCO3CPi8x7i5a674E1rj1Oxw&s=10";

const contentImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9IctVB20ko_5Wt7d1T4IbE0EnitIezWYPBeZHAJipKDD5ir2rIGJpxr&s=10";

const livrosTerror = [
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

export default function Terror() {
  return (
    <div className="min-h-screen bg-black text-white font-serif">
      {/* HEADER PRINCIPAL */}
      <header className="border-b border-gray-800 bg-[#333333] px-6 py-3 font-sans">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* LOGO E NOME */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-500 bg-white">
              <img src={logoImage} alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-sm font-serif tracking-wide text-white">
              Biblioteca Virtual Sanico Teles
            </span>
          </Link>

          {/* BARRA DE PESQUISA */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Pesquisa de livros"
              className="w-full rounded-full bg-white px-9 py-1 text-sm text-black placeholder-gray-500 outline-none focus:ring-2 focus:ring-red-600"
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
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-500 transition-colors"
              title="Ir para o Login"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="leading-tight">
              <p className="text-gray-300">Olá, visitantes</p>
              <Link to="/login" className="font-bold hover:underline">
                Entre ou Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* SUB-HEADER / CATEGORIAS */}
      <nav className="border-b border-gray-900 bg-black px-6 py-3 font-serif">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 text-sm">
          <Link to="/" className="flex items-center gap-2 hover:text-red-500">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Todas as categorias
          </Link>
          <a href="#" className="hover:text-red-500">Capa dura</a>
          <Link to="/fantasia" className="hover:text-red-500">Fantasia</Link>
          <Link to="/romance" className="hover:text-red-500">Romance</Link>
          <Link to="/kids" className="hover:text-red-500">KIDS</Link>
          <Link to="/suspense" className="hover:text-red-500">Suspense</Link>
          <Link to="/aventura" className="hover:text-red-500">Aventura</Link>
          <Link to="/terror" className="text-white hover:text-red-400 font-semibold">Terror</Link>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-14 text-center text-4xl tracking-wide">
          Livros Terror
        </h1>

        <div className="flex flex-col gap-16">
          {livrosTerror.map((livro) => (
            <div key={livro.id} className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              
              {/* CARD DA ESQUERDA (IMAGEM + TÍTULO) */}
              <div className="w-full max-w-xs rounded-xl border border-gray-800 bg-[#17171c] p-4 text-center shadow-2xl">
                <div className="mb-2 flex justify-end">
                  <button className="text-gray-400 hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <div className="mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded bg-[#2b2b36]">
                  <img src={livro.img} alt={livro.titulo} className="h-full w-full object-cover" />
                </div>
                <h3 className="mb-2 text-xl tracking-wide text-white">{livro.titulo}</h3>
              </div>

              {/* LADO DIREITO (BALÃO AZUL CLARO + BOTÃO CINZA CLARO) */}
              <div className="flex flex-1 flex-col justify-between self-stretch pt-2">
                <div className="relative rounded-sm bg-[#d0e3ff] p-6 text-black shadow-md">
                  {/* PONTEIRO DO BALÃO DE FALA */}
                  <div className="absolute left-[-10px] top-8 hidden h-0 w-0 border-y-[8px] border-r-[10px] border-y-transparent border-r-[#d0e3ff] md:block"></div>
                  <p className="text-xs leading-relaxed text-black font-sans font-medium">
                    {livro.descricao}
                  </p>
                </div>

                <div className="mt-8 flex justify-center md:justify-end">
                  <button className="w-full rounded bg-[#e2e2e2] py-2 text-xs font-serif text-black hover:bg-white transition-colors md:w-56 shadow">
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