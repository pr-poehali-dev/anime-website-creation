import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AnimeCard from '@/components/AnimeCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { animeDatabase, genres, studios } from '@/data/animeData';

export default function Catalog() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Усі');
  const [selectedStudio, setSelectedStudio] = useState('Усі студії');
  const [selectedStatus, setSelectedStatus] = useState('Всі');
  const [sortBy, setSortBy] = useState('rating');

  let filteredAnime = animeDatabase.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'Усі' || anime.genre.includes(selectedGenre);
    const matchesStudio = selectedStudio === 'Усі студії' || anime.studio === selectedStudio;
    const matchesStatus = selectedStatus === 'Всі' || anime.status === selectedStatus;
    return matchesSearch && matchesGenre && matchesStudio && matchesStatus;
  });

  if (sortBy === 'rating') {
    filteredAnime = [...filteredAnime].sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'year') {
    filteredAnime = [...filteredAnime].sort((a, b) => b.year - a.year);
  } else if (sortBy === 'episodes') {
    filteredAnime = [...filteredAnime].sort((a, b) => b.episodes - a.episodes);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container text-center space-y-6 animate-scale-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Каталог аніме
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Досліджуйте {animeDatabase.length} найкращих аніме з різних жанрів та студій
          </p>
        </div>
      </section>

      <section className="container py-12">
        <div className="bg-card rounded-2xl p-6 space-y-6 shadow-xl border border-border animate-slide-up">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Пошук аніме за назвою..."
              className="pl-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-semibold mb-2 block">Жанр</label>
              <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {genres.map((genre) => (
                    <SelectItem key={genre} value={genre}>
                      {genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Студія</label>
              <Select value={selectedStudio} onValueChange={setSelectedStudio}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {studios.map((studio) => (
                    <SelectItem key={studio} value={studio}>
                      {studio}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Статус</label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Всі">Всі</SelectItem>
                  <SelectItem value="ongoing">Виходить</SelectItem>
                  <SelectItem value="completed">Завершено</SelectItem>
                  <SelectItem value="upcoming">Скоро</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-semibold mb-2 block">Сортувати</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">За рейтингом</SelectItem>
                  <SelectItem value="year">За роком</SelectItem>
                  <SelectItem value="episodes">За кількістю серій</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-border">
            <p className="text-muted-foreground">
              Знайдено: <span className="font-bold text-primary">{filteredAnime.length}</span> аніме
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('Усі');
                setSelectedStudio('Усі студії');
                setSelectedStatus('Всі');
                setSortBy('rating');
              }}
            >
              <Icon name="X" className="mr-2" size={16} />
              Скинути фільтри
            </Button>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        {filteredAnime.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAnime.map((anime, idx) => (
              <div 
                key={anime.id} 
                style={{ animationDelay: `${idx * 0.05}s` }}
                onClick={() => navigate(`/anime/${anime.id}`)}
              >
                <AnimeCard {...anime} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="SearchX" size={80} className="mx-auto text-muted-foreground mb-6" />
            <h3 className="text-3xl font-bold mb-4">Нічого не знайдено</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Спробуйте змінити фільтри або пошуковий запит
            </p>
            <Button 
              size="lg"
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('Усі');
                setSelectedStudio('Усі студії');
                setSelectedStatus('Всі');
              }}
            >
              Скинути фільтри
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
