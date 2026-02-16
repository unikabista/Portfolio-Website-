import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Unika Bista</span>
            <span className="text-gray-600">·</span>
            <span className="text-sm text-gray-500">CS Student</span>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> using React & Tailwind
          </p>
          
          <p className="text-sm text-gray-600">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
