import { Card, CardContent } from "@/components/ui/card";

export default function VideosSection() {
  const videos = [
    {
      title: "O sétimo mandamento",
      description: "Conheça o que é o adultério para igreja.",
      embedUrl: "https://www.youtube.com/embed/kvvQFhsk-ak",
    },
    {
      title: "Mensagem Especial",
      description: "A declaração de Jesus Cristo no livro de João",
      embedUrl: "https://www.youtube.com/embed/PuTjzlNZ34Y",
    },
  ];

  return (
    <section className="py-20 bg-white-50" id="videos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nossos Vídeos
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Assista aos vídeos e acompanhe conteúdos especiais da Paróquia.
          </p>
        </div>

        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {videos.map((video, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-300 rounded-2xl bg-white"
            >
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Link Ver mais */}
        <div className="mt-10 text-center">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 underline underline-offset-4"
          >
            Ver mais
          </a>
        </div>
      </div>
    </section>
  );
}
