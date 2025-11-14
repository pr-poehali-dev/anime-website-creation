import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import CharacterCard from '@/components/CharacterCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { charactersDatabase } from '@/data/animeData';

export default function Characters() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('Всі');

  const roles = ['Всі', 'Головний герой', 'Чарівниця', 'Антигерой', 'Учениця', 'Комік', 'Майстер меча', 'Мудрець', 'Цілителька'];

  const filteredCharacters = charactersDatabase.filter((character) => {
    const matchesSearch = character.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         character.voiceActor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'Всі' || character.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-to-b from-secondary/10 to-background py-20">
        <div className="container text-center space-y-6 animate-scale-in">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent">
            Персонажі
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Познайомтеся з {charactersDatabase.length} улюбленими персонажами аніме
          </p>
        </div>
      </section>

      <section className="container py-12 space-y-8">
        <div className="bg-card rounded-2xl p-6 space-y-6 shadow-xl border border-border animate-slide-up">
          <div className="relative">
            <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <Input
              type="text"
              placeholder="Пошук персонажів або акторів озвучення..."
              className="pl-12 h-14 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <p className="text-sm font-semibold mb-3">Фільтр за роллю:</p>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <Button
                  key={role}
                  variant={selectedRole === role ? "default" : "outline"}
                  className={selectedRole === role ? "bg-gradient-to-r from-secondary to-primary" : ""}
                  onClick={() => setSelectedRole(role)}
                >
                  {role}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-border">
            <p className="text-muted-foreground">
              Знайдено: <span className="font-bold text-secondary">{filteredCharacters.length}</span> персонажів
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('Всі');
              }}
            >
              <Icon name="X" className="mr-2" size={16} />
              Скинути фільтри
            </Button>
          </div>
        </div>

        {filteredCharacters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCharacters.map((character, idx) => (
              <div key={character.id} style={{ animationDelay: `${idx * 0.05}s` }}>
                <CharacterCard 
                  {...character} 
                  onClick={() => navigate(`/character/${character.id}`)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <Icon name="UserX" size={80} className="mx-auto text-muted-foreground mb-6" />
            <h3 className="text-3xl font-bold mb-4">Персонажів не знайдено</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Спробуйте змінити пошуковий запит або фільтр
            </p>
            <Button 
              size="lg"
              onClick={() => {
                setSearchQuery('');
                setSelectedRole('Всі');
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
