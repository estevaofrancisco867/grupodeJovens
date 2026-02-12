import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [player, setPlayer] = useState<any>(null);
  const [musicStarted, setMusicStarted] = useState(false);

  // ✅ Ao recarregar a página, volta ao topo e reseta o botão
  useEffect(() => {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (nav?.type === 'reload') {
      setMusicStarted(false);
      localStorage.setItem('musicPlaying', 'false');
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Carrega o player do YouTube
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    (window as any).onYouTubeIframeAPIReady = () => {
      const newPlayer = new (window as any).YT.Player('hidden-player', {
        height: '0',
        width: '0',
        videoId: 'f9VS9z3L9RQ',
        playerVars: {
          autoplay: 0,
          loop: 1,
          playlist: 'f9VS9z3L9RQ',
        },
        events: {
          onReady: (event: any) => {
            event.target.setVolume(100);
            setPlayer(event.target);
          },
        },
      });
    };
  }, []);

  // Sincroniza com localStorage (para continuidade entre páginas)
  useEffect(() => {
    const onStorageChange = (event: StorageEvent) => {
      if (event.key === 'musicPlaying') {
        if (player) {
          if (event.newValue === 'true') {
            player.playVideo();
            setMusicStarted(true);
          } else if (event.newValue === 'false') {
            player.pauseVideo();
            setMusicStarted(false);
          }
        }
      }
    };

    window.addEventListener('storage', onStorageChange);

    if (localStorage.getItem('musicPlaying') === 'true' && player) {
      player.playVideo();
      setMusicStarted(true);
    }

    return () => {
      window.removeEventListener('storage', onStorageChange);
    };
  }, [player]);

  const handlePlayMusic = () => {
    if (!musicStarted) {
      setMusicStarted(true);
      localStorage.setItem('musicPlaying', 'true');
      if (player) {
        player.playVideo();
      }
    } else {
      setMusicStarted(false);
      localStorage.setItem('musicPlaying', 'false');
      if (player) {
        player.pauseVideo();
      }
    }
  };

  return (
    <section className="relative h-screen w-full">
      {/* Player invisível */}
      <div id="hidden-player" style={{ display: 'none' }} />

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/paroquia.jpg')" }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl">
          <h1
            className="mb-6 tracking-wider text-white font-extrabold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '5.5rem',
              transform: 'skewY(-2deg)',
              textShadow:
                '4px 4px 12px rgba(0, 0, 0, 0.95), 0 0 10px rgba(0, 0, 0, 0.7)',
              fontStyle: 'normal',
              letterSpacing: '0.08em',
            }}
          >
            KERIGMA
          </h1>

          <p
            className="mb-8 font-light text-white"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '1.75rem',
              textShadow:
                '3px 3px 10px rgba(0, 0, 0, 0.85), 0 0 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            Grupo de Jovens – Vivendo a fé em comunidade
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={handlePlayMusic}
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-blue-500"
            >
              {musicStarted
                ? 'MÚSICA TOCANDO 🎵'
                : 'CLIQUE AQUI PARA OUVIR UMA MÚSICA'}
            </button>

            <a
              href="https://arquidioceselondrina.com.br/tag/paroquia-sao-rafael/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() => {
                  const element = document.getElementById('igreja');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors border border-blue-500"
              >
                PARÓQUIA SÃO RAFAEL
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
