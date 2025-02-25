import Link from 'next/link';
import Heading from "../components/Heading";
import Image from 'next/image';
import { Container, Typography, Button } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const data = [
  {
    img: '/backer/cake1.jpg'
  },
  {
    img: '/backer/honey.jpg'
  },
  {
    img: '/backer/cake5.jpg'
  },

]

function Home() {
  return <>
    <Container
      sx={{
        mt: '1rem'
      }}>
      <Heading text="Iris Backer" />
      <Link href='galleries'><Button variant="contained">Все торты</Button></Link>
      <Image src="/backer/chef2.jpg" width={250} height={250} alt="chef" />
      <Typography
        variant="h3"
        component="span"
        sx={{
          flexGrow: 2,
          fontFamily: "Roboto",
          color: "red"
        }}
       >ТОРТЫ НА ЛЮБОЙ ВКУС
      </Typography>
      <ImageList sx={{ width: 1100, height: 600 }} ariant="woven" cols={3} gap={9}>
        {data.map((item) => (
          <ImageListItem key={item.img}>

            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  </>

}
export default Home;