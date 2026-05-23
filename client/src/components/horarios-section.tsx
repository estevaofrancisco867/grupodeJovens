import { Card, CardContent } from "@/components/ui/card";
import { Calendar, BookOpen, Music, Heart } from "lucide-react";
import { FaPray } from "react-icons/fa";

export default function HorariosSection() {
  const activities = [
    {
      icon: <BookOpen className="text-2xl text-primary" />,
      title: "Estudo Bíblico",
      description: "Aprofundamento na Palavra"
    },
    {
      icon: <Music className="text-2xl text-primary" />,
      title: "Louvor e Adoração",
      description: "Momentos de exaltação a Deus"
    },
    {
      icon: <FaPray className="text-2xl text-primary" />,
      title: "Oração",
      description: "Intercessão e comunhão"
    },
    {
      icon: <Heart className="text-2xl text-primary" />,
      title: "Comunhão",
      description: "Compartilhamento e amizade"
    }
  ];

  return (
    <section className="py-20 bg-white-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Horários dos Encontros</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="bg-primary text-white p-6 rounded-lg mb-6">
                <Calendar className="text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Reunião Semanal</h3>
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Quartas-feiras</p>
                  <p className="text-lg">19:00 às 20:00</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <Card key={index} className="bg-blue-50 border-blue-200">
                    <CardContent className="p-4 text-center">
                      <div className="mb-2">{activity.icon}</div>
                      <h4 className="font-semibold mb-1">{activity.title}</h4>
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
