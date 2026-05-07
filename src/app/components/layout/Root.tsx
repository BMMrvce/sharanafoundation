import { Outlet } from 'react-router';
import Navbar from './Navbar';

export default function Root() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
