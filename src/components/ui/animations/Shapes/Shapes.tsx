import { motion } from 'framer-motion';

export default function Shapes() {
    return (
        <div className="shapes">
            <motion.div
                initial={{x: '-100%', y: '-100%'}}
                animate={{x: 0, y: 0}}
                className="shapes__item-container shapes__item-container--donut"
                transition={{duration: 0.8, ease: [0.76, 0, 0.24, 1.15]}}
            >
                <svg className="shapes__item shapes__item--donut" viewBox="146 146 508 508" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <radialGradient  id="donut-gradient" className="shapes__item-gradient" cx="60%" cy="60%" r="110%" fx="50%" fy="50%">
                            <stop offset="30%" stopColor="var(--shape-shadow-color)" />
                            <stop offset="70%" stopColor="var(--shape-color)" />
                        </radialGradient>
                    </defs>
                    <circle 
                        cx="400" 
                        cy="400" 
                        fill="none"
                        r="164"
                        stroke="url(#donut-gradient)" 
                        strokeWidth="180" 
                        strokeDasharray="720 1400"
                        strokeLinecap="round"
                        strokeDashoffset="-260" />
                </svg>
            </motion.div>
            <motion.div
                initial={{x: '100%', y: '100%'}}
                animate={{x: 0, y: 0}} 
                className="shapes__item-container shapes__item-container--curve"
                transition={{duration: 0.8, ease: [0.76, 0, 0.24, 1.15]}}
            >
                <svg className="shapes__item shapes__item--curve" viewBox="0 0 365 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="curve-gradient" className="shapes__item-gradient" gradientTransform="rotate(45)">
                            <stop offset="5%" stopColor="var(--shape-shadow-color)" />
                            <stop offset="95%" stopColor="var(--shape-color)" />
                        </linearGradient>
                    </defs>
                    <path 
                        d="M46.4619 118.322C52.7475 112 71.8666 91.4167 86.6177 84.2418C92.4956 81.3828 107.049 74.7829 124.477 76.17C150.519 79 159.656 87.5 176.763 91.4167C197.557 96.1773 215.198 97.0549 236.587 94.1073C257.977 91.1596 271.553 85.5333 287.397 76.17C303.241 66.8068 314.08 52.5 318.538 45.6768" 
                        fill="none" 
                        stroke="url(#curve-gradient)"
                        strokeWidth="91" 
                        strokeLinecap="round"
                        strokeDasharray="0 0"
                    />
                </svg>
            </motion.div>
        </div>
    )
}