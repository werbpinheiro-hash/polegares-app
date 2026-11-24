import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div className="pwa-offline-banner" role="status">
      <span className="pwa-offline-dot" aria-hidden="true" />
      Modo offline — catálogo disponível para consulta.
    </div>
  );
}
