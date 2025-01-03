import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/components/__utils';
import { FaChevronRight } from 'react-icons/fa';

interface Link {
    name: string;
    href: string;
    children?: Link[];
}

interface SidebarProps {
    links: Link[]; // 导航链接
    activePath?: string; // 当前激活的路径
    onLinkClick?: (href: string) => void; // 链接点击回调
    logo?: React.ReactNode; // 可选的 Logo
    className?: string; // 容器样式
}

interface SidebarItemProps {
    link: Link;
    active?: boolean;
    onClick?: () => void;
}

// 单独封装的 SidebarItem 组件
const SidebarItem: React.FC<SidebarItemProps> = ({ link, active, onClick }) => {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <div>
            <div
                className={cn(
                    'flex items-center justify-between px-4 py-2 cursor-pointer rounded-md',
                    active ? 'bg-gray-200 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500'
                )}
                onClick={() => {
                    if (link.children) {
                        setExpanded(!isExpanded);
                    }
                    if (onClick) onClick();
                }}
            >
                <span>{link.name}</span>
                {link.children && (
                    <motion.span
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isExpanded ? 90 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-500"
                    >
                        <FaChevronRight className="w-4 h-4" />
                    </motion.span>
                )}
            </div>
            {link.children && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isExpanded ? 'auto' : 0 }}
                    className="overflow-hidden pl-4"
                >
                    {link.children.map((child) => (
                        <SidebarItem
                            key={child.name}
                            link={child}
                            active={false}
                            onClick={onClick}
                        />
                    ))}
                </motion.div>
            )}
        </div>
    );
};

const Sidebar: React.FC<SidebarProps> = ({
    links,
    activePath,
    onLinkClick,
    logo,
    className = '',
}) => {
    return (
        <div
            className={cn(
                'flex flex-col w-64 h-screen bg-gray-50 text-gray-800 border-r border-gray-200',
                className
            )}
        >
            {/* Logo 区域 */}
            <div className="flex items-center h-16 px-4 border-b border-gray-200">
                {logo ? logo : <span className="text-xl font-bold">MyLogo</span>}
            </div>

            {/* 导航菜单 */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
                {links.map((link) => (
                    <SidebarItem
                        key={link.name}
                        link={link}
                        active={activePath === link.href}
                        onClick={() => onLinkClick?.(link.href)}
                    />
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
