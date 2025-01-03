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
    activePath?: string;
    onClick?: (href: string) => void;
}

// 单独封装的 SidebarItem 组件
const SidebarItem: React.FC<SidebarItemProps> = ({ link, activePath, onClick }) => {
    const [isExpanded, setExpanded] = useState(
        link.children?.some(child => child.href === activePath) || false // 初始化为展开状态
    );

    return (
        <div>
            <div
                className={cn(
                    'flex items-center justify-between px-4 py-2 cursor-pointer rounded-md',
                    activePath === link.href ? 'bg-gray-200 text-blue-500' : 'hover:bg-gray-100 hover:text-blue-500'
                )}
                onClick={() => {
                    if (link.children) {
                        setExpanded(!isExpanded); // 有子项时展开或折叠
                    } else if (onClick && link.href) {
                        onClick(link.href); // 无子项时执行跳转
                    }
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
                            activePath={activePath} // 子项激活逻辑
                            onClick={onClick} // 点击子项时跳转
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
    const [currentActivePath, setCurrentActivePath] = useState(activePath);

    const handleLinkClick = (href: string) => {
        setCurrentActivePath(href); // 更新激活路径
        onLinkClick?.(href); // 调用外部传入的回调
    };

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
                        activePath={currentActivePath}
                        onClick={handleLinkClick}
                    />
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;
