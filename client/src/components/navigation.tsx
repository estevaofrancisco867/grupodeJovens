import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ color: 'var(--primary-blue)' }}>
              KERIGMA
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('historia')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-base font-medium"
              >
                História
              </button>
              <button
                onClick={() => scrollToSection('fotos')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-base font-medium"
              >
                Fotos
              </button>
              <button
                onClick={() => scrollToSection('experiencias')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-base font-medium"
              >
                Experiências
              </button>
              <button
                onClick={() => scrollToSection('formulario')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-base font-medium"
              >
                Formulário
              </button>
              <button
                onClick={() => scrollToSection('organizador')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-base font-medium"
              >
                Organizador
              </button>
                     <button
                onClick={() => scrollToSection('videos')}
                className="text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-md text-base font-medium"
              >
                Vídeos
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('historia')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium w-full text-left"
              >
                História
              </button>
              <button
                onClick={() => scrollToSection('fotos')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium w-full text-left"
              >
                Fotos
              </button>
              <button
                onClick={() => scrollToSection('experiencias')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium w-full text-left"
              >
                Experiências
              </button>
              <button
                onClick={() => scrollToSection('formulario')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium w-full text-left"
              >
                Formulário
              </button>
              <button
                onClick={() => scrollToSection('organizador')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium w-full text-left"
              >
                Organizador
              </button>
                 <button
                onClick={() => scrollToSection('videos')}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-lg font-medium w-full text-left"
              >
                Videos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
