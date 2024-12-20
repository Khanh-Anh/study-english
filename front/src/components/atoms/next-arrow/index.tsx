import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box } from '@mui/material';

function NextArrow(props: { className: string, style?: React.CSSProperties, onClick?: () => void }) {
    const { className, style, onClick } = props;
    return (
        <Box className={className} style={{ ...style }} onClick={onClick}>
            <ArrowForwardIosIcon color="error" />
        </Box>
    );
}

export default NextArrow;
