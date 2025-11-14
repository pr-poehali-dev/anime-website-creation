import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface FilterBarProps {
  onSearch: (query: string) => void;
  onGenreFilter: (genre: string) => void;
  activeGenre: string;
}

const genres = ['Усі', 'Екшн', 'Фентезі', 'Романтика', 'Комедія', 'Драма', 'Жахи', 'Пригоди'];

export default function FilterBar({ onSearch, onGenreFilter, activeGenre }: FilterBarProps) {
  return (
    <div className="space-y-6 animate-slide-up">
      <div className="relative max-w-2xl mx-auto">
        <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          type="text"
          placeholder="Пошук аніме за назвою..."
          className="pl-12 h-14 text-lg bg-card border-border focus:border-primary transition-colors"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {genres.map((genre) => (
          <Button
            key={genre}
            variant={activeGenre === genre ? "default" : "outline"}
            className={`transition-all duration-300 ${
              activeGenre === genre 
                ? 'bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/50' 
                : 'hover:border-primary hover:text-primary'
            }`}
            onClick={() => onGenreFilter(genre)}
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
}
