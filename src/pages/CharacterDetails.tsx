import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AnimeCard from '@/components/AnimeCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { charactersDatabase, animeDatabase } from '@/data/animeData';

export default function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = charactersDatabase.find(c => c.id === Number(id));

  if (!character) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Персонаж не знайдено</h1>
          <Button onClick={() => navigate('/')}>Повернутися на головну</Button>
        </div>
      </div>
    );
  }

  const characterAnime = animeDatabase.filter(a => character.anime.includes(a.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover blur-sm scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-background/50" />
        </div>

        <div className="relative container h-full flex items-end pb-12">
          <div className="flex flex-col md:flex-row gap-8 w-full animate-scale-in">
            <img
              src={character.image}
              alt={character.name}
              className="w-80 h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-primary/30"
            />
            
            <div className="flex-1 space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                {character.name}
              </h1>

              <div className="space-y-3">
                <Badge className="bg-primary text-lg px-4 py-2">
                  <Icon name="User" className="mr-2" size={18} />
                  {character.role}
                </Badge>
                
                <div className="flex items-center gap-3 text-xl">
                  <Icon name="Mic" className="text-secondary" size={24} />
                  <span className="text-muted-foreground">Актор озвучення:</span>
                  <span className="font-semibold text-secondary">{character.voiceActor}</span>
                </div>

                <div className="flex items-center gap-3 text-xl">
                  <Icon name="Film" className="text-accent" size={24} />
                  <span className="text-muted-foreground">Участь у</span>
                  <span className="font-bold text-accent">{character.anime.length} аніме</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed max-w-3xl bg-card/50 p-6 rounded-xl border border-border">
                {character.description}
              </p>

              <Button size="lg" variant="outline" onClick={() => navigate(-1)} className="border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="ArrowLeft" className="mr-2" />
                Назад
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Icon name="Tv" className="text-primary" size={36} />
          Аніме з участю {character.name}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {characterAnime.map((anime) => (
            <div key={anime.id} onClick={() => navigate(`/anime/${anime.id}`)}>
              <AnimeCard {...anime} />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl p-12 text-center space-y-6">
          <h3 className="text-4xl font-bold">Подобається персонаж?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Додайте {character.name} до списку улюблених персонажів та отримуйте сповіщення про нові аніме з їхньою участю
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50">
            <Icon name="Heart" className="mr-2" />
            Додати до улюблених
          </Button>
        </div>
      </section>
    </div>
  );
}
