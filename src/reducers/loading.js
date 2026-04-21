export default function isLoading(state = false, action) {
  const { type } = action;

  switch (type) {
    case 'SHOW_LOADING':
      return true;
    case 'HIDE_LOADING':
      return false;
    default:
      return state;
  }
}
