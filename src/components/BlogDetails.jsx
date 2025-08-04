import { motion } from 'framer-motion'
import OrangeCard from './OrangeCard';
import { useLocation } from 'react-router-dom';
import PointSection from './PointSection';
import BlogSection from './BlogSection';

const BlogDetails = () => {
    const location = useLocation();
    const points = location.state?.points;
    const blogs = location.state?.blogs;

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i = 1) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <div>
            {points && <PointSection points={points} textVariants={textVariants} />}
            {blogs && <BlogSection blogs={blogs} textVariants={textVariants} />}
        </div>
    )
}

export default BlogDetails