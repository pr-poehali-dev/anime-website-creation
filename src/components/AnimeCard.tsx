import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface AnimeCardProps {
  id: number;
  title: string;
  image: string;
  rating: number;
  genre: string[];
  year: number;
  episodes: number;
}

export default function AnimeCard({ title, image, rating, genre, year, episodes }: AnimeCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [currentRating, setCurrentRating] = useState(rating);

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 backdrop-blur-sm"
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Icon 
            name={isBookmarked ? "Bookmark" : "BookmarkPlus"} 
            className={isBookmarked ? "fill-secondary text-secondary" : "text-white"}
          />
        </Button>

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
            <span className="text-white font-semibold">{currentRating.toFixed(1)}</span>
            <Button
              size="sm"
              variant="ghost"
              className="ml-auto text-white hover:text-secondary"
              onClick={() => setCurrentRating(Math.min(10, currentRating + 0.1))}
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>
          <div className="flex gap-2 text-xs text-gray-300">
            <span>{year}</span>
            <span>•</span>
            <span>{episodes} серій</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-3 line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {genre.slice(0, 3).map((g, idx) => (
            <Badge 
              key={idx} 
              variant="secondary" 
              className="bg-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
            >
              {g}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
