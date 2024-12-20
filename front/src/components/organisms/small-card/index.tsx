import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import FeedbackIcon from '@mui/icons-material/Feedback';
import style from './style.module.css';
export default function SmallCard({className}: {className?: string}) {
    return (
    <Box className={`${style['card-holder']} ${className}`}>
      <a href="#" className={style['card']}>
        <Box className={style['logo']} style={{
              background: 'linear-gradient(135deg, #52c234 0%, #061700 100%)'
            }}>
          <Image src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" width={74} height={74} alt="minecraft" />
        </Box>
        <Box className={style['content-container']}>
          <Box className={`${style['content']} ${style['content-1']}`}>
            <h3>Minecraft</h3>
            <p>Description of Example Card</p>
          </Box>
          <Box className={`${style['content']} ${style['content-2']}`}>
            <h3>Sub Heading</h3>
            <p>Test Here</p>
          </Box>
        </Box>
      </a>
    </Box>
    );
}
