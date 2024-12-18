import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from 'component/__utils';
import { HiMenu, HiX } from 'react-icons/hi';

interface Link {
    name: string;
    href: string;
}

interface SidebarProps {
    links: Link[]; // 将 links 作为必需的 props
    logo?: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ links, logo }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen((prev) => !prev);
        // 禁止或允许背景滚动
        document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
    };

    return (
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        {logo ? logo : <span className="text-xl font-bold">MyLogo</span>}
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        'px-3 py-2 rounded-md text-sm font-medium',
                                        'text-gray-700 hover:text-blue-500',
                                    )}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-md text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                            aria-label="Toggle menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="h-6 w-6" />
                            ) : (
                                <HiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        id="mobile-menu"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        'block px-3 py-2 rounded-md text-base font-medium',
                                        'text-gray-700 hover:text-blue-500 hover:bg-gray-50',
                                    )}
                                    onClick={() => setMobileMenuOpen(false)} // 点击链接后关闭菜单
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Sidebar;
