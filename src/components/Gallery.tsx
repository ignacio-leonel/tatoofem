import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Using placeholder images from Pexels
  const tattooImages = [
    {
      url: "/images/mangafloral.png",
      category: "Manga",
      description: "Manga floral blackwork"
    },
    {
      url: "/images/minimalista.jpg",
      category: "Fine Line",
      description: "Diseño minimalista"
    },
    {
      url: "/images/femreal.jpeg",
      category: "Realismo",
      description: "Retrato realista"
    },
    {
      url: "/images/mandala.jpeg",
      category: "Ornamental",
      description: "Mandala detallado"
    },
    {
      url: "/images/geometric.jpeg",
      category: "Blackwork",
      description: "Geometric blackwork"
    },
    {
      url: "/images/coverup.jpeg",
      category: "Cover-up",
      description: "Transformación completa"
    },
    {
      url: "/images/femenino.jpeg",
      category: "Femenino",
      description: "Diseño delicado"
    },
    {
      url: "/images/manga.jpg",
      category: "Manga",
      description: "Manga completa artística"
    },
    {
      url: "/images/fineline.png",
      category: "Fine Line",
      description: "Líneas finas elegantes"
    }
  ];

  const categories = ["Todos", "Manga", "Fine Line", "Realismo", "Ornamental", "Blackwork", "Cover-up", "Femenino"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredImages = activeCategory === "Todos" 
    ? tattooImages 
    : tattooImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Galería
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Una muestra de los trabajos realizados. Cada pieza única, cada historia diferente.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-purple-900/20 text-purple-300 hover:bg-purple-800/30 border border-purple-500/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.url}
                  alt={image.description}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedImage !== null && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-400 transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>

              <div className="max-w-4xl max-h-full">
                <img
                  src={filteredImages[selectedImage].url}
                  alt={filteredImages[selectedImage].description}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                <div className="text-center mt-4">
                  <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full mr-4">
                    {filteredImages[selectedImage].category}
                  </span>
                  <p className="text-white text-lg font-medium">
                    {filteredImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;