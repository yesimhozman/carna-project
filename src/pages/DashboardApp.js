import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import { Icon } from '@iconify/react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
// components
import Page from '../components/Page';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl" >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back Sam! <Icon icon="emojione:waving-hand" />
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#D1E9FC"}}>
      <CardMedia
        component="img"
        alt="courses"
        height="140"
        image="/static/illustrations/courses.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Courses
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Start learning new skills and improve your skills. Our courses will help you.
        </Typography>
      </CardContent>
      <CardActions style={{placeContent: "center"}}>
      <Button size="medium" href="/dashboard/courses" >Get Started</Button>
      </CardActions>
    </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#D0F2FF"}}>
      <CardMedia
        component="img"
        alt="reviews"
        height="140"
        image="/static/illustrations/review.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Review
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Review your mistakes and improve your skills. Review vocabulary and grammar.
        </Typography>
      </CardContent>
      <CardActions  style={{placeContent: "center"}}>
      <Button size="medium" href="/dashboard/review">Get Started</Button>
      </CardActions>
    </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: 345 }} style={{backgroundColor: "#FFE7D9"}}>
      <CardMedia
        component="img"
        alt="library"
        height="140"
        image="/static/illustrations/library.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Library
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Read and listen to audio books and videos. Your level of reading and listening will improve.
        
        </Typography>
      </CardContent>
      <CardActions  style={{placeContent: "center"}}>  
        <Button size="medium" href="/dashboard/library">Get Started</Button>
      </CardActions>
    </Card>
    
          </Grid>

         

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Your Progress"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Listening',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Reading',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Speaking',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Hours Spent"
              chartData={[
                { label: 'Listening', value: 4344 },
                { label: 'Writing', value: 5435 },
                { label: 'Speaking', value: 1443 },
                { label: 'Reading', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: "New Course Added",
                description:"Your Teacher has been uploaded a new course",
                image: `/static/mock-images/covers/cover_${index + 2}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Top 5 Scores of Class" 
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Sam Smith',
                  'Jade Evans',
                  'Alice Yang',
                  'Eylul Can',
                  'Ayse Doe',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            
            />
          </Grid>


          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Learn new words' },
                { id: '2', label: 'Pass A1 exam' },
                { id: '3', label: 'Meeting with the class' },
                { id: '4', label: 'Vocabulary study for A2' },
                { id: '5', label: 'Upload Assignment' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
