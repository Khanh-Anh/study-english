import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box } from '@mui/material';

function PrevArrow(props: { className?: string, style?: React.CSSProperties, onClick?: () => void }) {
    const { className, style, onClick } = props;
    return (
        <Box className={className} style={{ ...style }} onClick={onClick}>
            <ArrowBackIosNewIcon color="error" />
        </Box>
    );
}

export default PrevArrow;
