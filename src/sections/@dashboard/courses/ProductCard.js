import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
// material
import { Box, Card, Button, Grid, Link, Typography, Stack } from '@mui/material';

// components
import Label from '../../../components/Label';


// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, status } = product;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'A2 Elementary' && 'error' || status === 'A1 Beginner' && 'success' || status === 'B2 Upper' && 'warning') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} style={{ paddingTop: "44px" }} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }} style={{backgroundColor:"#ffecda"}}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack sm={12} md={12} direction="row" alignSelf="center" justifyContent="space-between">
          <Button href="/dashboard/exercise/"  variant="contained">
            Continue
          </Button>
        </Stack>
        <Grid item  >
          <CardMedia
            component="img"
            alt="progress"
            height="40"
            image="/static/illustrations/progressBar.png"
          />
        </Grid>

      </Stack>
    </Card>
  );
}
