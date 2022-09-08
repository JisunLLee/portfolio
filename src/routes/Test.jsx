import HomeLoading from '../components/loading/home';

export default function Test() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 129px)',
      }}
    >
      <HomeLoading />
    </div>
  );
}
