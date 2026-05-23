import { Card, CardContent } from "@/components/ui/card";
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

export default function RedesSociaisSection() {
  const socialMedia = [
    {
      icon: <FaInstagram className="text-4xl" />,
      name: "Instagram",
      handle: "@kerigma_jovens",
      link: "https://www.instagram.com/kerigma_jovens?igsh=M3c5NmdxOHlycWx5",
      bgColor: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      icon: <FaFacebook className="text-4xl" />,
      name: "Facebook",
      handle: "Paróquia São Rafael",
      link: "https://www.facebook.com/share/16cFHfa1L5/",
      bgColor: "bg-blue-600"
    },
    {
      icon: <FaYoutube className="text-4xl" />,
      name: "YouTube",
      handle: "Paróquia São Rafael Ibiporã",
      link: "https://youtube.com/@paroquiasaorafaelibipora1903?si=iQlH8Yit9UewAwW0",
      bgColor: "bg-red-600"
    },
    {
      icon: <FaTiktok className="text-4xl" />,
      name: "TikTok",
      handle: "@kerigma.jovens",
      link: "https://www.tiktok.com/@kerigma.jovens?_t=ZM-8y9KM1qcuC0&_r=1",
      bgColor: "bg-gray-900"
    }
  ];

  return (
    <section className="py-20 bg-gray">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Redes Sociais</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Siga-nos nas redes sociais e acompanhe todos os momentos especiais do KERIGMA
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialMedia.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className={`${social.bgColor} text-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all text-center block`}
            >
              <div className="mb-3">{social.icon}</div>
              <h3 className="font-semibold mb-1">{social.name}</h3>
              <p className="text-sm opacity-90">{social.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
