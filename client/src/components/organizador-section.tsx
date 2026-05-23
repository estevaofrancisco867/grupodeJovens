import { Card, CardContent } from "@/components/ui/card";

export default function OrganizadorSection() {
  const leaders = [
    {
      name: "Ingrid da Rick",
      role: "Auxiliar",
      description: (
        <>
          “Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados, porque o Senhor teu Deus vai com vocês, Ele nunca os deixará, nunca os abandonará.”{" "}
          <span
            className="inline-block bg-primary text-white italic font-semibold text-[0.65rem] px-2 py-0.5 rounded-md mt-1"
          >
            Deuteronômio 31:6
          </span>
        </>
      ),
      phone: "Desde 2025",
      image: "/ing.jpg",
    },
    {
      name: "Irmã Marcela",
      role: "Coordenadora",
      description: (
        <>
          “Eu mesmo buscarei as minhas ovelhas e as reunirei de onde foram espalhadas no dia de nuvens e escuridão; como um pastor no meio do rebanho disperso, eu irei ao encontro delas.”{" "}
          <span
            className="inline-block bg-primary text-white italic font-semibold text-[0.65rem] px-2 py-0.5 rounded-md mt-1"
          >
            Ezequiel 34:12
          </span>
        </>
      ),
      phone: "Desde de 2015",
      image: "/irma.jpg",
    },
    {
      name: "Rosana",
      role: "Coordenadora",
      description: (
        <>
          “O amor é paciente e bondoso. Não inveja, nem se orgulha. Não busca interesses próprios. Alegra-se com a verdade. Tudo crê, espera e suporta.”{" "}
          <span
            className="inline-block bg-primary text-white italic font-semibold text-[0.65rem] px-2 py-0.5 rounded-md mt-1"
          >
            1 Coríntios 13:4-7
          </span>
        </>
      ),
      phone: "Desde 2025",
      image: "/cord.jpg",
    },
  ];

  return (
    <section id="organizador" className="py-20 bg-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lideranças</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card
              key={index}
              className="bg-blue-50 border-blue-200 shadow-md text-center"
            >
              <CardContent className="p-6 min-h-[320px] flex flex-col justify-between">
                <div>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                  <p className="text-primary font-medium mb-2">{leader.role}</p>
                </div>
                <blockquote
                  className="italic font-serif text-sm mb-4 px-4 border-l-2 border-r-2"
                  style={{ borderColor: "hsl(213, 84%, 58%)" }}
                >
                  {leader.description}
                </blockquote>
                <div className="mt-4">
                  <span className="text-primary">{leader.phone}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}



