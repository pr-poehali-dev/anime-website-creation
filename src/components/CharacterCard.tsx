import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  role: string;
  voiceActor: string;
  onClick?: () => void;
}

export default function CharacterCard({ name, image, role, voiceActor, onClick }: CharacterCardProps) {
  return (
    <Card 
      className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-secondary/50 cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-96">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
          <Badge className="bg-secondary/90 text-white mb-2">
            <Icon name="Mic" size={14} className="mr-1" />
            {voiceActor}
          </Badge>
          <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors">
            {name}
          </h3>
          <p className="text-gray-300 flex items-center gap-2">
            <Icon name="User" size={16} />
            {role}
          </p>
        </div>
      </div>
    </Card>
  );
}
