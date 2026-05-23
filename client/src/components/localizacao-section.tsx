import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Route, ExternalLink } from "lucide-react";

export default function LocalizacaoSection() {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/Par%C3%B3quia+S%C3%A3o+Rafael+-+Ibipor%C3%A3/@-23.2799951,-51.0759082,17z/data=!3m1!4b1!4m6!3m5!1s0x94eb46c995436f29:0x3db58b21054db757!8m2!3d-23.28!4d-51.0733333!16s%2Fg%2F1tc_57s0?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D', '_blank');
  };

  return (
    <section className="py-20 bg-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Localização</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-lg mx-auto space-y-6">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Endereço da Igreja</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rua Jaguapita, 40<br />
                    Bairro San Rafael<br />
                    Ibiporã - PR<br />
                    CEP: 86200-000
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Route className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Informações adicionais</h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Igreja:</strong> Paróquia São Rafael<br />
                    <strong>Religião:</strong> Igreja católica<br />
                    <strong>Bispo:</strong> Dom Geremias Steinmetz, Arcebispo Metropolitano da Arquidiocese.<br />
                    <strong>Pároco:</strong> Padre Pedro (Desde 2025)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="text-center">
            <Button
              onClick={handleMapClick}
              className="bg-primary text-white hover:bg-primary/90"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Ver no Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
