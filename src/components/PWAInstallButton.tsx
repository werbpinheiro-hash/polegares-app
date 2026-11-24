import { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export function PWAInstallButton() {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  const handleClick = async () => {
    if (isInstallable) {
      await install();
      return;
    }
    setShowGuide(true);
  };

  return (
    <>
      <button
        type="button"
        className="pwa-install-btn"
        onClick={handleClick}
      >
        <svg
          className="pwa-install-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Instalar aplicativo
      </button>

      {showGuide && (
        <div
          className="pwa-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pwa-modal-title"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="pwa-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="pwa-modal-title" className="pwa-modal-title">
              {isIOS
                ? 'Instalar no iPhone / iPad'
                : 'Instalar o aplicativo Polegares'}
            </h3>

            {isIOS ? (
              <p className="pwa-modal-text">
                1. Toque no botão <strong>Compartilhar</strong> na barra do
                Safari.
                <br />
                2. Role para baixo e toque em{' '}
                <strong>Adicionar à Tela de Início</strong>.
              </p>
            ) : (
              <div className="pwa-modal-text">
                <p>
                  <strong>No Android ou computador (Chrome / Edge):</strong>{' '}
                  abra este endereço diretamente em uma aba do navegador e
                  clique no ícone de instalação na barra de endereços ou em{' '}
                  <strong>Instalar aplicativo</strong> no menu do navegador.
                </p>
                <p>
                  <strong>No iPhone / iPad (Safari):</strong> toque em{' '}
                  <strong>Compartilhar</strong> e selecione{' '}
                  <strong>Adicionar à Tela de Início</strong>.
                </p>
              </div>
            )}

            <button
              type="button"
              className="pwa-modal-close"
              onClick={() => setShowGuide(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
