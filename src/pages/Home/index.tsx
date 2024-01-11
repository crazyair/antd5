import Guide from '@/components/Guide/Guide';
import { Outlet } from '@umijs/max';

const HomePage: React.FC = () => {
  return (
    <>
      <Outlet />
      <Guide />
    </>
  );
};

export default HomePage;
