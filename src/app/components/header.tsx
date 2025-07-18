'use client';

import { Button } from "@/components/ui/button"
import { StarIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Cerrar el menú al cambiar el tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        // Agregar efecto de scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4'}`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xl font-semibold text-white">
                            corteNet
                        </span>
                    </div>

                    {/* Menú de navegación para desktop */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="/">Inicio</NavLink>
                        <NavLink href="/carreras">Explora Cortes</NavLink>
                        <NavLink href="/informacion">Guías y Consejos</NavLink>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button className="hidden md:flex bg-red-500 hover:bg-red-600 text-white">
                            <StarIcon className="w-4 h-4 mr-2" />
                            Favoritos
                        </Button>

                        {/* Botón del menú móvil */}
                        <button 
                            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Menú de navegación"
                        >
                            {isOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Menú móvil */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 animate-fade-in">
                        <div className="flex flex-col space-y-3">
                            <MobileNavLink href="/" onClick={() => setIsOpen(false)}>
                                Inicio
                            </MobileNavLink>
                            <MobileNavLink href="/carreras" onClick={() => setIsOpen(false)}>
                                Explora Cortes
                            </MobileNavLink>
                            <MobileNavLink href="/informacion" onClick={() => setIsOpen(false)}>
                                Guías y Consejos
                            </MobileNavLink>
                            <Button className="w-full bg-red-500 hover:bg-red-600 text-white mt-2" onClick={() => setIsOpen(false)}>
                                <StarIcon className="w-4 h-4 mr-2" />
                                Favoritos
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay para cerrar el menú */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-[-1] md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </header>
    )
}

// Componente para los enlaces de navegación
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link 
            href={href} 
            className="text-gray-300 hover:text-white transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
        </Link>
    );
}

// Componente para los enlaces del menú móvil
function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
    return (
        <Link 
            href={href} 
            className="block px-4 py-3 text-gray-200 hover:bg-slate-800 rounded-lg transition-colors"
            onClick={onClick}
        >
            {children}
        </Link>
    );
}

// Agregar estilos de animación globales
const styles = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.2s ease-out forwards;
    }
`;

// Agregar estilos al head
if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}