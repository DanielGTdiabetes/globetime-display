import { Sprout } from 'lucide-react';

const HarvestCard = () => {
  // Data de ejemplo - varía según el mes
  const monthlyHarvest = {
    month: 'Octubre',
    vegetables: [
      { name: 'Calabazas', icon: '/icons/harvest/pumpkin.svg' },
      { name: 'Remolachas', icon: '/icons/harvest/beet.svg' },
      { name: 'Acelgas', icon: '/icons/harvest/chard.svg' },
      { name: 'Brócoli', icon: '/icons/harvest/broccoli.svg' }
    ],
    fruits: [
      { name: 'Manzanas', icon: '/icons/harvest/apple.svg' },
      { name: 'Peras', icon: '/icons/harvest/pear.svg' },
      { name: 'Uvas', icon: '/icons/harvest/grapes.svg' },
      { name: 'Granadas', icon: '/icons/harvest/cherry.svg' }
    ]
  };

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Sprout className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold">Cosecha de {monthlyHarvest.month}</h2>
      </div>

      <div className="flex-1 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Verduras y Hortalizas</h3>
          <div className="grid grid-cols-2 gap-3">
            {monthlyHarvest.vegetables.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-muted/20 rounded-lg p-3 border border-border/50 hover:bg-muted/30 transition-colors"
              >
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-10 h-10 icon"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-secondary mb-3">Frutas de Temporada</h3>
          <div className="grid grid-cols-2 gap-3">
            {monthlyHarvest.fruits.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-muted/20 rounded-lg p-3 border border-border/50 hover:bg-muted/30 transition-colors"
              >
                <img 
                  src={item.icon} 
                  alt={item.name}
                  className="w-10 h-10 icon"
                />
                <span className="text-sm font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvestCard;
