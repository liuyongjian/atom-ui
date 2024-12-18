import { motion, AnimatePresence } from 'motion/react';
import { cn } from 'component/__utils';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
};

const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {/* 遮罩层 */}
                    <motion.div
                        className="fixed inset-0 bg-black"
                        variants={backdropVariants}
                        onClick={onClose}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3 }}
                    ></motion.div>

                    {/* Modal 内容 */}
                    <motion.div
                        className={cn(
                            'bg-white rounded-lg shadow-lg z-10 max-w-lg w-full mx-4'
                        )}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-4">
                            {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
                            <div>{children}</div>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={onClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
