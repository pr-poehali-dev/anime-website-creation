import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CharacterCard from '@/components/CharacterCard';
import AnimeCard from '@/components/AnimeCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { animeDatabase, charactersDatabase } from '@/data/animeData';

export default function AnimeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const anime = animeDatabase.find(a => a.id === Number(id));
  const [userRating, setUserRating] = useState(0);
  const [review, setReview] = useState('');
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!anime) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Аніме не знайдено</h1>
          <Button onClick={() => navigate('/')}>Повернутися на головну</Button>
        </div>
      </div>
    );
  }

  const animeCharacters = charactersDatabase.filter(c => anime.characters?.includes(c.id));
  const relatedAnime = animeDatabase.filter(a => 
    a.id !== anime.id && 
    a.genre.some(g => anime.genre.includes(g))
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={anime.image}
            alt={anime.title}
            className="w-full h-full object-cover blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>

        <div className="relative container h-full flex items-end pb-12">
          <div className="flex flex-col md:flex-row gap-8 w-full animate-scale-in">
            <img
              src={anime.image}
              alt={anime.title}
              className="w-64 h-96 object-cover rounded-2xl shadow-2xl"
            />
            
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    {anime.title}
                  </h1>
                  <p className="text-muted-foreground text-lg">{anime.studio} • {anime.year}</p>
                </div>
                <Button
                  size="lg"
                  variant={isBookmarked ? "default" : "outline"}
                  className={isBookmarked ? "bg-secondary" : ""}
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  <Icon name={isBookmarked ? "Bookmark" : "BookmarkPlus"} className="mr-2" />
                  {isBookmarked ? "Збережено" : "Зберегти"}
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {anime.genre.map((g, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-primary/30 text-primary">
                    {g}
                  </Badge>
                ))}
                <Badge className={
                  anime.status === 'ongoing' ? 'bg-accent' : 
                  anime.status === 'completed' ? 'bg-green-600' : 
                  'bg-yellow-600'
                }>
                  {anime.status === 'ongoing' ? 'Виходить' : 
                   anime.status === 'completed' ? 'Завершено' : 
                   'Скоро'}
                </Badge>
              </div>

              <div className="flex items-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-yellow-400 fill-yellow-400" />
                  <span className="font-bold">{anime.rating.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Film" className="text-primary" />
                  <span>{anime.episodes} серій</span>
                </div>
              </div>

              <p className="text-lg leading-relaxed max-w-3xl">
                {anime.description}
              </p>

              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50">
                  <Icon name="Play" className="mr-2" />
                  Дивитися зараз
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                  <Icon name="Youtube" className="mr-2" />
                  Трейлер
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {animeCharacters.length > 0 && (
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="Users" className="text-primary" />
            Персонажі
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {animeCharacters.map((character) => (
              <CharacterCard
                key={character.id}
                {...character}
                onClick={() => navigate(`/character/${character.id}`)}
              />
            ))}
          </div>
        </section>
      )}

      <section className="container py-16">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <Icon name="MessageSquare" className="text-secondary" />
          Ваш відгук
        </h2>
        
        <div className="max-w-3xl space-y-6 bg-card p-8 rounded-2xl">
          <div>
            <p className="text-lg mb-4 font-semibold">Ваша оцінка:</p>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                <Button
                  key={rating}
                  variant={userRating >= rating ? "default" : "outline"}
                  className={userRating >= rating ? "bg-gradient-to-r from-primary to-secondary" : ""}
                  onClick={() => setUserRating(rating)}
                >
                  {rating}
                </Button>
              ))}
            </div>
            {userRating > 0 && (
              <Progress value={userRating * 10} className="mt-4 h-2" />
            )}
          </div>

          <div>
            <p className="text-lg mb-4 font-semibold">Ваш коментар:</p>
            <Textarea
              placeholder="Поділіться своїми враженнями від аніме..."
              className="min-h-32 text-base"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>

          <Button 
            size="lg" 
            className="w-full bg-gradient-to-r from-primary to-secondary"
            disabled={!userRating || !review}
          >
            <Icon name="Send" className="mr-2" />
            Опублікувати відгук
          </Button>
        </div>
      </section>

      {relatedAnime.length > 0 && (
        <section className="container py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Icon name="Sparkles" className="text-accent" />
            Схожі аніме
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedAnime.map((relatedItem) => (
              <div key={relatedItem.id} onClick={() => navigate(`/anime/${relatedItem.id}`)}>
                <AnimeCard {...relatedItem} />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
