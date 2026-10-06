import { useState } from "react";
import { Link } from "react-router";
import type { Route } from "../../+types/pesquisa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pesquisa - Biblioteca Virtual Sanico Teles" },
    { name: "description", content: "Pesquise livros na Biblioteca Virtual Sanico Teles." },
  ];
}

const logoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WQGkk_VfPS_e3Nmeilj9g3MXf5cEIHZvCO3CPi8x7i5a674E1rj1Oxw&s=10";

// Banco de dados simulado de livros
const livrosMock = [
  {
    id: "1",
    titulo: "A Rainha Vermelha",
    autora: "Victoria Aveyard",
    descricao:
      "A Rainha Vermelha conta a história de Mare Barrow, uma garota pobre que vive em um mundo dividido entre Vermelhos e Prateados...",
    capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9IctVB20ko_5Wt7d1T4IbE0EnitIezWYPBeZHAJipKDD5ir2rIGJpxr&s=10",
    destaque: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9IctVB20ko_5Wt7d1T4IbE0EnitIezWYPBeZHAJipKDD5ir2rIGJpxr&s=10",
  },
  {
    id: "2",
    titulo: "A de Amor",
    autora: "Autora Exemplo",
    descricao: "Um romance encantador sobre encontros e desencontros da vida.",
    capa: "https://via.placeholder.com/300x400",
    destaque: "https://via.placeholder.com/100x400",
  },
];

export default function Pesquisa() {
  const [termo, setTermo] = useState("");
  const [focado, setFocado] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState<typeof livrosMock[0] | null>(null);

  // Filtra os livros conforme o utilizador digita
  const sugestoes = livrosMock.filter((l) =>
    l.titulo.toLowerCase().includes(termo.toLowerCase())
  );

  const handleSelecionarLivro = (livro: typeof livrosMock[0]) => {
    setLivroSelecionado(livro);
    setTermo(livro.titulo);
    setFocado(false);
  };

  return (
    <div className="min-h-screen bg-[#222222] text-white font-serif">
      {/* HEADER / BARRA SUPERIOR DA BIBLIOTECA */}
      <header className="border-b border-gray-800 bg-[#333333] px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-gray-500 bg-white">
              <img src={logoImage} alt="Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-lg font-serif tracking-wide text-white">
              Biblioteca Virtual Sanico Teles
            </span>
          </Link>
        </div>
      </header>

      {/* ÁREA DE PESQUISA */}
      <main className="mx-auto max-w-4xl px-6 py-10 flex flex-col items-center">
        
        {/* BARRA DE PESQUISA E AUTO-COMPLETE (WIRE FRAME 1) */}
        <div className="relative w-full max-w-xl mb-12">
          <div className="relative flex items-center">
            <svg
              className="absolute left-4 h-5 w-5 text-black z-10"
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

            <input
              type="text"
              value={termo}
              onChange={(e) => setTermo(e.target.value)}
              onFocus={() => setFocado(true)}
              placeholder="Pesquisa de livros"
              className="w-full rounded-full bg-white py-2.5 pl-12 pr-4 text-black placeholder-gray-600 outline-none shadow-md font-sans"
            />
          </div>

          {/* LISTA DE SUGESTÕES (DROPDOWN) */}
          {focado && termo.length > 0 && (
            <div className="absolute top-0 left-0 right-0 z-20 overflow-hidden rounded-3xl bg-white pt-12 pb-4 text-black shadow-2xl">
              <div className="flex flex-col border-t border-gray-200">
                {sugestoes.length > 0 ? (
                  sugestoes.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelecionarLivro(item)}
                      className="px-6 py-2 text-center uppercase tracking-wider text-sm hover:bg-gray-100 font-serif"
                    >
                      {item.titulo}
                    </button>
                  ))
                ) : (
                  <p className="px-6 py-3 text-center text-sm text-gray-500 font-sans">
                    Nenhum livro encontrado
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* DETALHES DO LIVRO PESQUISADO (WIRE FRAME 2) */}
        {livroSelecionado ? (
          <div className="w-full flex flex-col md:flex-row gap-6 items-start justify-center mt-4">
            
            {/* CAPA DO LIVRO */}
            <div className="w-full md:w-80 h-80 rounded-3xl bg-[#e2e2e2] overflow-hidden flex items-center justify-center p-4 shadow-lg">
              <img
                src={livroSelecionado.capa}
                alt={livroSelecionado.titulo}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>

            {/* BANNER VERTICAL / DESTAQUE */}
            <div className="hidden md:flex w-20 h-80 rounded-3xl bg-[#e2e2e2] overflow-hidden items-center justify-center shadow-lg">
              <img
                src={livroSelecionado.destaque}
                alt="Destaque"
                className="h-full w-full object-cover"
              />
            </div>

            {/* INFORMAÇÕES DO LIVRO */}
            <div className="flex-1 flex flex-col justify-between h-80 py-2">
              <div className="space-y-3 font-serif text-lg">
                <p>
                  <span className="font-semibold">Autora:</span>{" "}
                  <span className="border-b border-dashed border-gray-500 pb-0.5">{livroSelecionado.autora}</span>
                </p>
                <p>
                  <span className="font-semibold">Livro:</span>{" "}
                  <span className="border-b border-dashed border-gray-500 pb-0.5">{livroSelecionado.titulo}</span>
                </p>
                <p className="leading-relaxed">
                  <span className="font-semibold">Descrição:</span>{" "}
                  <span className="text-sm font-sans text-gray-300">{livroSelecionado.descricao}</span>
                </p>
              </div>

              {/* BOTÃO ADICIONAR */}
              <div className="mt-6">
                <button
                  type="button"
                  className="rounded bg-[#e0e0e0] px-6 py-2 text-sm font-sans text-black hover:bg-white transition-colors"
                >
                  adicione seu livro
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* MENSAGEM INICIAL */
          <div className="text-center text-gray-400 font-sans mt-12">
            <p>Digite o nome de um livro na barra acima para pesquisar.</p>
          </div>
        )}

      </main>
    </div>
  );
}