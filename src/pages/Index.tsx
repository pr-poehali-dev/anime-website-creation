import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AnimeCard from '@/components/AnimeCard';
import FilterBar from '@/components/FilterBar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { animeDatabase } from '@/data/animeData';

const topAnime = animeDatabase.slice(0, 6);

export default function Index() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('Усі');

  const filteredAnime = topAnime.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = activeGenre === 'Усі' || anime.genre.includes(activeGenre);
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="relative container h-full flex flex-col justify-center items-center text-center space-y-6 animate-scale-in">
          <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
            AnimeHub
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Найкраща колекція аніме всіх часів. Відкрийте для себе нові світи японської анімації
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all">
              <Icon name="Play" className="mr-2" />
              Почати перегляд
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Icon name="TrendingUp" className="mr-2" />
              Топ аніме
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16 space-y-12">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Каталог аніме
          </h3>
          <p className="text-muted-foreground text-lg">
            Знайдіть ваше улюблене аніме серед тисяч варіантів
          </p>
        </div>

        <FilterBar
          onSearch={setSearchQuery}
          onGenreFilter={setActiveGenre}
          activeGenre={activeGenre}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAnime.map((anime, idx) => (
            <div key={anime.id} style={{ animationDelay: `${idx * 0.1}s` }} onClick={() => navigate(`/anime/${anime.id}`)}>
              <AnimeCard {...anime} />
            </div>
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">Нічого не знайдено</p>
          </div>
        )}
      </section>

      <section className="container py-16">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-12 text-center space-y-6">
          <h3 className="text-4xl font-bold">Приєднуйтесь до спільноти</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Обговорюйте улюблені аніме, діліться відгуками та отримуйте рекомендації від інших фанатів
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50">
            <Icon name="Users" className="mr-2" />
            Приєднатися зараз
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© 2024 AnimeHub. Всі права захищено</p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}