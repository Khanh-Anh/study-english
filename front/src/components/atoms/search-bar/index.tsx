'use client';
import { Box, Button, Typography } from '@mui/material';
import style from './style.module.css';
import ControlledInput from '../input';
import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar() {
    const { control } = useForm();

    return (
        <Box className="w-full">
            <ControlledInput variant='standard' placeholder="Search here..." id='fullWidth' control={control} formField="search" className='w-full'
                slotProps={{
                    input: {
                        endAdornment: <SearchIcon />,
                    },
                }} />
        </Box>
    );
}
