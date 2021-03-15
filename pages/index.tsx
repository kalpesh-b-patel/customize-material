import { Box, Button, Container, Icon, makeStyles, Paper, Typography } from '@material-ui/core'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  paperPadding: {
    padding: '1rem',
    // margin: theme.spacing(1),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Typography variant="h1">Heading 1</Typography>

        <Box m={1}>
          <Paper className={classes.paperPadding}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aliquid amet, mollitia consequuntur esse obcaecati expedita.
              Perspiciatis minus nemo aliquid quae tempora. Consequuntur soluta ea veritatis minima voluptatum dignissimos earum.
          </Typography>
          </Paper>
        </Box>

        <Box m={1}>
          <Paper className={classes.paperPadding}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis aliquid amet, mollitia consequuntur esse obcaecati expedita.
              Perspiciatis minus nemo aliquid quae tempora. Consequuntur soluta ea veritatis minima voluptatum dignissimos earum.
          </Typography>
          </Paper>
        </Box>
        <Button>Contact Us</Button>
      </Container >
    </>
  )
}
