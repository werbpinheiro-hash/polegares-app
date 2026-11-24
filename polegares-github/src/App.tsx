import { useState, useEffect } from 'react';
import { livros, normalizar, type Livro } from './data/livros';

type TabKey = 'pesquisar' | 'catalogo' | 'reflexao';

function Expander({
  title,
  defaultExpanded = false,
  children,
}: {
  title: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultExpanded);

  return (
    <div className="st-expander">
      <button
        type="button"
        className="st-expander-summary"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <span className={`st-expander-chevron ${open ? 'open' : ''}`}>▼</span>
      </button>
      {open && <div className="st-expander-body">{children}</div>}
    </div>
  );
}

export function App() {
  const [installEvent, setInstallEvent] = useState<(Event & { prompt: () => Promise<void> }) | null>(null);
  useEffect(() => {
    const handler = (event: Event) => { event.preventDefault(); setInstallEvent(event as Event & { prompt: () => Promise<void> }); };
    const installed = () => setInstallEvent(null);
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', installed);
    return () => { window.removeEventListener('beforeinstallprompt', handler); window.removeEventListener('appinstalled', installed); };
  }, []);
  const install = async () => {
    if (installEvent) { await installEvent.prompt(); setInstallEvent(null); }
    else alert('No Chrome ou Edge, procure Instalar aplicativo no menu. No iPhone, abra no Safari, toque em Compartilhar e Adicionar à Tela de Início. Se já estiver instalado, abra pelo ícone.');
  };
  const [activeTab, setActiveTab] = useState<TabKey>('pesquisar');
  const [pesquisa, setPesquisa] = useState('');
  const [obraEscolhida, setObraEscolhida] = useState(livros[0].titulo);
  const [reflexao, setReflexao] = useState('');

  const pesquisaLimpa = pesquisa.trim();
  const termo = normalizar(pesquisa);

  const encontrados: Livro[] = pesquisaLimpa
    ? livros.filter((livro) => {
        const texto = normalizar(
          `${livro.titulo} ${livro.autor} ${livro.temas} ${livro.resumo}`
        );
        return texto.includes(termo);
      })
    : [];

  const livroEscolhido =
    livros.find((livro) => livro.titulo === obraEscolhida) ?? livros[0];

  const handleDownloadReflexao = () => {
    const conteudo =
      'FILOSOFIA EM REDE\n\n' +
      'Obra: ' +
      obraEscolhida +
      '\n\n' +
      'Problema: ' +
      livroEscolhido.problema +
      '\n\n' +
      'Reflexão:\n' +
      reflexao;

    const blob = new Blob([conteudo], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'reflexao_filosofica.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const scholarQuery = pesquisaLimpa
    ? new URLSearchParams({ q: pesquisa }).toString()
    : '';

  return (
    <>
      <header className="app-header-bar">
        <img
          src={`${import.meta.env.BASE_URL}icons/icon-192.png`}
          alt="Logo Polegares"
          className="app-header-logo"
        />
        <button type="button" className="install-app" onClick={install}>Instalar aplicativo</button>
      </header>

      <main className="main-container">
        <div className="logo-row">
          <div className="logo-center">
            <img src={`${import.meta.env.BASE_URL}icons/icon-512.png`} alt="Logomarca Polegares" />
          </div>
        </div>

        <div className="titulo-polegares">Polegares</div>

        <div className="citacao-serres">
          “Um pouco de ruído, o menor elemento do acaso, transforma um sistema
          ou ordem em outro.”
          <br />— Michel Serres
        </div>

        <div className="descricao-app">
          Letramento digital e aproximação com a leitura filosófica. Explore as
          obras disponíveis na biblioteca da escola Campos Brasil, conheça seus
          autores e investigue problemas filosóficos.
        </div>

        <hr className="st-divider" />

        <div className="st-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'pesquisar'}
            className={`st-tab-btn ${activeTab === 'pesquisar' ? 'active' : ''}`}
            onClick={() => setActiveTab('pesquisar')}
          >
            🔎 Pesquisar
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'catalogo'}
            className={`st-tab-btn ${activeTab === 'catalogo' ? 'active' : ''}`}
            onClick={() => setActiveTab('catalogo')}
          >
            📚 Catálogo completo
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'reflexao'}
            className={`st-tab-btn ${activeTab === 'reflexao' ? 'active' : ''}`}
            onClick={() => setActiveTab('reflexao')}
          >
            ✍️ Reflexão filosófica
          </button>
        </div>

        {activeTab === 'pesquisar' && (
          <section role="tabpanel">
            <h2 className="st-header">Pesquisar na biblioteca</h2>

            <label htmlFor="pesquisa_principal" className="st-field-label">
              Digite um tema, autor ou título:
            </label>
            <input
              id="pesquisa_principal"
              type="text"
              className="st-input"
              placeholder="Ex.: liberdade, poder, ética, Platão"
              value={pesquisa}
              onChange={(e) => setPesquisa(e.target.value)}
            />

            {pesquisaLimpa && (
              <>
                {encontrados.length > 0 ? (
                  <>
                    <div className="st-alert st-alert-success">
                      {encontrados.length} obra(s) encontrada(s).
                    </div>

                    {encontrados.map((livro) => (
                      <Expander
                        key={livro.titulo}
                        title={`📖 ${livro.titulo}`}
                        defaultExpanded={true}
                      >
                        <p>
                          <strong>Autor:</strong> {livro.autor}
                        </p>
                        <p>
                          <strong>Temas:</strong> {livro.temas}
                        </p>

                        <h3 className="st-subheader">Apresentação da obra</h3>
                        <p>{livro.resumo}</p>

                        <h3 className="st-subheader">Problema norteador</h3>
                        <div className="st-alert st-alert-info">
                          {livro.problema}
                        </div>

                        <h3 className="st-subheader">A palavra do professor</h3>
                        <p>
                          Espaço destinado à explicação e à orientação de leitura
                          do professor.
                        </p>

                        <p>
                          📍 Consulte esta obra na biblioteca física da escola.
                        </p>
                      </Expander>
                    ))}
                  </>
                ) : (
                  <div className="st-alert st-alert-warning">
                    Nenhuma obra encontrada. Experimente outro tema ou autor.
                  </div>
                )}
              </>
            )}

            <hr className="st-divider" />

            <h3 className="st-subheader">Aprofunde sua pesquisa</h3>
            <div className="st-link-list">
              {pesquisaLimpa && (
                <a
                  href={`https://scholar.google.com/scholar?${scholarQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="st-link"
                >
                  Pesquisar no Google Acadêmico
                </a>
              )}
              <a
                href="https://search.scielo.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="st-link"
              >
                Consultar a SciELO
              </a>
            </div>
          </section>
        )}

        {activeTab === 'catalogo' && (
          <section role="tabpanel">
            <h2 className="st-header">Catálogo da biblioteca</h2>
            <p>Total de obras cadastradas: {livros.length}</p>

            {livros.map((livro, index) => (
              <Expander
                key={livro.titulo}
                title={`${index + 1}. ${livro.titulo}`}
                defaultExpanded={false}
              >
                <p>
                  <strong>Autor:</strong> {livro.autor}
                </p>
                <p>
                  <strong>Temas:</strong> {livro.temas}
                </p>
                <p>
                  <strong>Apresentação:</strong> {livro.resumo}
                </p>
                <p>
                  <strong>Problema norteador:</strong> {livro.problema}
                </p>
              </Expander>
            ))}
          </section>
        )}

        {activeTab === 'reflexao' && (
          <section role="tabpanel">
            <h2 className="st-header">Diário de reflexão filosófica</h2>
            <p>
              Escolha uma obra da biblioteca e desenvolva uma reflexão a partir
              de sua leitura.
            </p>

            <label htmlFor="select_obra" className="st-field-label">
              Selecione a obra:
            </label>
            <select
              id="select_obra"
              className="st-select"
              value={obraEscolhida}
              onChange={(e) => setObraEscolhida(e.target.value)}
            >
              {livros.map((livro) => (
                <option key={livro.titulo} value={livro.titulo}>
                  {livro.titulo}
                </option>
              ))}
            </select>

            <div className="st-alert st-alert-info">
              {livroEscolhido.problema}
            </div>

            <label htmlFor="texto_reflexao" className="st-field-label">
              Escreva sua reflexão:
            </label>
            <textarea
              id="texto_reflexao"
              className="st-textarea"
              placeholder="Apresente sua ideia, desenvolva argumentos e relacione sua resposta à leitura."
              value={reflexao}
              onChange={(e) => setReflexao(e.target.value)}
            />

            {reflexao.trim() && (
              <button
                type="button"
                className="st-button"
                onClick={handleDownloadReflexao}
              >
                📥 Baixar minha reflexão
              </button>
            )}
          </section>
        )}

        <hr className="st-divider" />

        <h2 className="st-header">📂 Materiais digitais da biblioteca</h2>
        <p>Nenhum PDF disponível na pasta principal.</p>

        <hr className="st-divider" />

        <p className="st-caption">
          Filosofia em Rede | Biblioteca Filosófica Escolar | Da informação à
          investigação filosófica
        </p>
      </main>
    </>
  );
}

export default App;
