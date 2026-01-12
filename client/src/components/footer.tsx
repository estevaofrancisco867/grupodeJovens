import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">KERIGMA</h3>
            <p className="text-blue-100 leading-relaxed">
              Grupo de Jovens comprometido em viver a fé em comunidade, transformando vidas através do amor de Cristo.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('historia')}
                  className="text-blue-100 hover:text-white transition-colors text-left"
                >
                  História
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fotos')}
                  className="text-blue-100 hover:text-white transition-colors text-left"
                >
                  Fotos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experiencias')}
                  className="text-blue-100 hover:text-white transition-colors text-left"
                >
                  Experiências
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('formulario')}
                  className="text-blue-100 hover:text-white transition-colors text-left"
                >
                  Formulário
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-blue-100">
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Paróquia São Rafael
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />

                psaorafaelibipora@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Ibiporã - PR
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-400 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            &copy; 2025 KERIGMA - Estêvão Francisco. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
