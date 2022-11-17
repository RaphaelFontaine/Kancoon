import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: process.env.PUBLIC_URL + "/assets/accueil/Photo_Caroussel/pro-particulier.png",
    title: 'Particuliers et Professionnels',
    category: 'nature',
  },
  {
    image: process.env.PUBLIC_URL + "/assets/accueil/Photo_Caroussel/pergola.png",
    title: 'Pergolas',
    category: 'beach',
  },
  {
    image: process.env.PUBLIC_URL + "/assets/accueil/Photo_Caroussel/ext_blinds.jpg",
    title: 'Stores Extérieurs',
    category: 'nature',
  },
  {
    image: process.env.PUBLIC_URL + "/assets/accueil/Photo_Caroussel/terrace.jpg",
    title: 'Aurora in Norway: when to visit for best experience',
    category: 'nature',
  },
  {
    image: process.env.PUBLIC_URL + "/assets/accueil/Photo_Caroussel/parasols.jpg",
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image: process.env.PUBLIC_URL + "/assets/accueil/Photo_Caroussel/Voile-dombrage.jpg",
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export default function HomeCaroussel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}