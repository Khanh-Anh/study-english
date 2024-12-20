import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import FeedbackIcon from '@mui/icons-material/Feedback';
export default function CardMemory({className, onClick}: {className?: string, onClick?: () => void}) {
    return (
        <Box className={className} onClick={onClick}>
            <Box className="lg:mx-auto max-w-md cursor-pointer rounded-lg bg-[#111] p-6 text-white shadow-lg hover:bg-gray-950 group mx-2">
                <Box className="mb-4 flex items-center space-x-3">
                    <Image src={'https://sumit-portfolio-0.vercel.app/spiderman.jpg'} height={48} width={48} className="h-12 w-12 rounded-full border-2 border-blue-500" alt="Avatar"/>
                <Box>
                    <Typography variant='h6' className="font-bold">MsOlsonMTA</Typography>
                    <Typography variant='body2' className="text-sm text-zinc-400">@MsOlsonMTA</Typography>
                </Box>
                </Box>
                <Typography variant='h6' className="mb-2 text-xl font-semibold">Florida Civic Literacy Exam (FCLE) Study Guide</Typography>
                <Typography variant='body2' className="mb-4 text-zinc-300">Chủ đề không chỉ đơn giản là một câu mô tả, mà nó thể hiện sự quan tâm và nhận thức sâu sắc của tác giả đối với cuộc sống. </Typography>
                <Box className="relative">
                <Box className="overflow-hidden rounded-md">
                    <Image src={'https://www.frontendmentor.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdz209s6jk%2Fimage%2Fupload%2Fv1716303125%2FChallenges%2Fkq2vdzxiqeb3lxcd5vdl.jpg&w=384&q=75'} height={192} width={384} className="h-48 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105" alt="Project Screenshot" />
                </Box>
                <Box className="absolute bottom-2 right-2 rounded-full bg-black bg-opacity-60 p-2">
                    <FeedbackIcon />
                </Box>
                </Box>
            </Box>
        </Box>
    );
}
