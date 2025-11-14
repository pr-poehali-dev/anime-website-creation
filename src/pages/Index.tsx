import { useState } from 'react';
import Header from '@/components/Header';
import AnimeCard from '@/components/AnimeCard';
import FilterBar from '@/components/FilterBar';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const animeData = [
  {
    id: 1,
    title: 'Небесні воїни',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg',
    rating: 9.2,
    genre: ['Екшн', 'Фентезі', 'Пригоди'],
    year: 2024,
    episodes: 24
  },
  {
    id: 2,
    title: 'Магічний світанок',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/e1f48676-9ad2-4573-8cc6-b37954ce17d8.jpg',
    rating: 8.7,
    genre: ['Фентезі', 'Романтика', 'Драма'],
    year: 2023,
    episodes: 12
  },
  {
    id: 3,
    title: 'Легенда про героя',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/69ef0d8c-506e-4c56-abd4-128e338744e6.jpg',
    rating: 9.5,
    genre: ['Екшн', 'Пригоди', 'Комедія'],
    year: 2024,
    episodes: 36
  },
  {
    id: 4,
    title: 'Темна сторона місяця',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/427f73f8-a7a7-472f-8206-2da76182a97a.jpg',
    rating: 8.9,
    genre: ['Драма', 'Жахи', 'Фентезі'],
    year: 2023,
    episodes: 13
  },
  {
    id: 5,
    title: 'Школа магії',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/e1f48676-9ad2-4573-8cc6-b37954ce17d8.jpg',
    rating: 8.4,
    genre: ['Комедія', 'Романтика', 'Фентезі'],
    year: 2024,
    episodes: 24
  },
  {
    id: 6,
    title: 'Самурай без меча',
    image: 'https://cdn.poehali.dev/projects/b659df73-2f23-40e0-8bbe-fa254e2a45d9/files/69ef0d8c-506e-4c56-abd4-128e338744e6.jpg',
    rating: 9.1,
    genre: ['Екшн', 'Драма', 'Пригоди'],
    year: 2023,
    episodes: 26
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGenre, setActiveGenre] = useState('Усі');

  const filteredAnime = animeData.filter((anime) => {
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
            <div key={anime.id} style={{ animationDelay: `${idx * 0.1}s` }}>
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
