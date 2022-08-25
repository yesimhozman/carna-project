// ----------------------------------------------------------------------

export default function IconButton(theme) {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: 'default' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover, borderRadius: '5%' },
          },
        },
        {
          props: { color: 'inherit' },
          style: {
            '&:hover': { backgroundColor: theme.palette.action.hover, borderRadius: '5%' },
          },
        },
      ],
    },
  };
}
