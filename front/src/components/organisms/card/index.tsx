import * as React from 'react';
import style from './style.module.css';
import { Box, Button } from '@mui/material';
export default function RecipeReviewCard() {
    return (
        <>
            <Box className={style.card}>
                <Box className={style.info}>
                    <Box className={style.sub}>For you</Box>
                    <Box className={style.title}>The title you always wanted, now you have it.</Box>
                    <Button className={style.btn}>Learn</Button>
                </Box>
                <Box className={style.image}>
                </Box>
            </Box>
        </>
    );
}
