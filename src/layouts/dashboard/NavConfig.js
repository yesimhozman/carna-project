// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'courses',
    path: '/dashboard/courses',
    icon: getIcon('dashicons:welcome-learn-more'),
  },{
    title: 'review',
    path: '/dashboard/review',
    icon: getIcon('arcticons:studyplus'),
  },
  {
    title: 'Library',
    path: '/dashboard/library',
    icon: getIcon('fluent:library-16-filled'),
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon('fe:login'),
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon('eva:person-add-fill'),
  },
 
];

export default navConfig;
