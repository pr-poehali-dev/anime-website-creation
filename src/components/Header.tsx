import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: 'Головна', path: '/', icon: 'Home' },
    { label: 'Каталог', path: '/catalog', icon: 'Tv' },
    { label: 'Персонажі', path: '/characters', icon: 'Users' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="text-3xl">🎌</div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            AnimeHub
          </h1>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Button 
              key={item.path} 
              variant={location.pathname === item.path ? "default" : "ghost"}
              className={location.pathname === item.path 
                ? "bg-gradient-to-r from-primary to-secondary" 
                : "hover:text-primary transition-colors"}
              onClick={() => navigate(item.path)}
            >
              <Icon name={item.icon as any} className="mr-2" size={18} />
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Icon name="Bell" />
          </Button>
          <Button variant="ghost" size="icon">
            <Icon name="User" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </div>
    </header>
  );
}