'use client';
import RecipeReviewCard from '@/components/organisms/card';
import SwipeToSlide from '@/components/organisms/swipe-to-slide';
import { Box, Typography } from '@mui/material';

export default function HomePage() {
    return (
        <Box>
            <Typography variant="h5">Gần đây</Typography>
            <Box sx={{ marginBottom: "10px" }}><RecipeReviewCard isDate={false} /></Box>
            <Typography variant="h5">Bộ thẻ ghi nhớ phổ biến</Typography>
            <Box sx={{ marginBottom: "10px" }}>
                <SwipeToSlide>
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                    <RecipeReviewCard isDate={false} />
                </SwipeToSlide>
            </Box>

        </Box>
    );
}

