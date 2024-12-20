'use client';
import RecipeReviewCard from '@/components/organisms/card';
import CardMemory from '@/components/organisms/card-memory';
import SmallCard from '@/components/organisms/small-card';
import SwipeToSlide from '@/components/organisms/swipe-to-slide';
import { Box, Typography } from '@mui/material';
import { useRouter } from "next/navigation";
export default function HomePage() {
    const router = useRouter();
    return (
        <Box>
            <Typography variant="h5">Gần đây</Typography>
            <Box sx={{ margin: "10px 0px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr));", gap: "40px" }}>
                <SmallCard />
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </Box>
            <Typography variant="h5">Bộ thẻ ghi nhớ phổ biến</Typography>
                <SwipeToSlide>
                    <CardMemory className="m-2" onClick={() => router.push('/home/learn-english')}/>
                    <CardMemory className="m-2" />
                    <CardMemory className="m-2" />
                    <CardMemory className="m-2" />
                    <CardMemory className="m-2" />
                    <CardMemory className="m-2" />
                </SwipeToSlide>
        </Box>
    );
}
