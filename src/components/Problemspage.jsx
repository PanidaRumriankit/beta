import Container from '@mui/material/Container';
import Navbars from './Navbars';
import NavProblem from './NavDay';
import Footer from './Footer';
import IMAGES from '../assets/images'
import Box from '@mui/material/Box';


export default function Problempage() {
  const current_page = "/Problemspage";

  return (
  <Box
    id="problem"
    sx={() => ({
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
      overflow: 'hidden'
    })}
    className="pt-16"
  >
    <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      >
        <source src={IMAGES.starburst} type="video/mp4" />
      </video>
    <Navbars page={ current_page }/>
    <Container
        sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: { xs: 4, sm: 8 },
        pb: { xs: 4, sm: 8 },
        }}
    >
      <NavProblem />
    </Container>
    <Footer />
  </Box>
  )
}