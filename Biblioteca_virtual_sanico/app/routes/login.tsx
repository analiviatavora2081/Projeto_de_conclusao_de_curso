import { useState } from "react";
import { Link } from "react-router";



const logoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9WQGkk_VfPS_e3Nmeilj9g3MXf5cEIHZvCO3CPi8x7i5a674E1rj1Oxw&s=10";

const contentImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVu9IctVB20ko_5Wt7d1T4IbE0EnitIezWYPBeZHAJipKDD5ir2rIGJpxr&s=10";

export default function Login() {
  // Estados para o formulário de Login
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Estados para o formulário de Cadastro
  const [cadEmail, setCadEmail] = useState("");
  const [cadPassword, setCadPassword] = useState("");

  // Estado para mensagem de feedback
  const [mensagem, setMensagem] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUser || !loginPassword) {
      setMensagem("Por favor, preencha todos os campos do Login!");
      return;
    }
    setMensagem(`Bem-vindo de volta, ${loginUser}! Login realizado com sucesso.`);
    setLoginUser("");
    setLoginPassword("");
  };

  const handleCadastroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cadEmail || !cadPassword) {
      setMensagem("Por favor, preencha todos os campos do Cadastro!");
      return;
    }
    setMensagem(`Conta criada com sucesso para ${cadEmail}!`);
    setCadEmail("");
    setCadPassword("");
  };

  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white">
      {/* CABEÇALHO */}
      <header className="border-b border-gray-800 bg-[#2b2b2b] px-6 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
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
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="mx-auto max-w-6xl px-6 py-10">
        
        {/* BANNER DE NOTIFICAÇÃO / MENSAGEM */}
        {mensagem && (
          <div className="mb-6 rounded-lg bg-red-600 p-4 text-center text-sm font-medium text-white shadow-lg">
            {mensagem}
          </div>
        )}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* COLUNA DA ESQUERDA: FORMULÁRIOS */}
          <div className="flex flex-col space-y-12">
            
            {/* SEÇÃO ENTRAR */}
            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Entrar
              </h2>

              <form className="space-y-4 max-w-md" onSubmit={handleLoginSubmit}>
                <input
                  type="text"
                  placeholder="Usuário ou E-mail"
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                  className="w-full rounded-xl bg-[#6e6e6e] px-4 py-3 text-sm text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                  type="password"
                  placeholder="Senha"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full rounded-xl bg-[#6e6e6e] px-4 py-3 text-sm text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
                />

                <div className="flex items-center justify-between text-xs text-gray-300">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded bg-[#6e6e6e] border-none"
                    />
                    Lembrar-me
                  </label>
                  <a href="#" className="hover:underline">
                    Esqueceu sua Senha?
                  </a>
                </div>

                <button
                  type="submit"
                  className="rounded-lg bg-[#b0b0b0] px-8 py-2 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Entrar
                </button>
              </form>
            </section>

            {/* SEÇÃO CADASTRAR */}
            <section className="space-y-4">
              <h2 className="font-serif text-3xl font-light tracking-wide">
                Cadastrar
              </h2>

              <form className="space-y-4 max-w-md" onSubmit={handleCadastroSubmit}>
                <input
                  type="email"
                  placeholder="E-mail"
                  value={cadEmail}
                  onChange={(e) => setCadEmail(e.target.value)}
                  className="w-full rounded-xl bg-[#6e6e6e] px-4 py-3 text-sm text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
                />

                <input
                  type="password"
                  placeholder="Criar Senha"
                  value={cadPassword}
                  onChange={(e) => setCadPassword(e.target.value)}
                  className="w-full rounded-xl bg-[#6e6e6e] px-4 py-3 text-sm text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-red-600"
                />

                <button
                  type="submit"
                  className="rounded-lg bg-[#b0b0b0] px-8 py-2 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Cadastrar
                </button>
              </form>
            </section>

          </div>

          {/* COLUNA DA DIREITA: PAINEL DE IMAGENS */}
          <div className="flex flex-col space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-44 flex-1 overflow-hidden rounded-3xl bg-[#dedede]">
                  <img
                    src={contentImage}
                    alt="Destaque"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="h-44 w-12 overflow-hidden rounded-3xl bg-[#dedede]">
                  <img
                    src={contentImage}
                    alt="Preview próximo"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}