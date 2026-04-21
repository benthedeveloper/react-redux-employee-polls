import { useSelector } from 'react-redux';

const LoadingOverlay = () => {
  const isLoading = useSelector((state) => state.isLoading);

  if (!isLoading) return null;

  return (
    <div
      className="loading-overlay"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="spinner" aria-hidden="true"></div>
      <span className="sr-only">Loading content, please wait...</span>
    </div>
  );
};

export default LoadingOverlay;
