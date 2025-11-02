import { Moon } from 'lucide-react';

const MoonCard = () => {
  // Placeholder data - en producción calcularía la fase lunar real
  const moonPhases = [
    { phase: 'Luna Nueva', icon: '/icons/moon/moon-0.svg', date: '1 Nov', percentage: 0 },
    { phase: 'Cuarto Creciente', icon: '/icons/moon/moon-25.svg', date: '9 Nov', percentage: 25 },
    { phase: 'Luna Llena', icon: '/icons/moon/moon-100.svg', date: '15 Nov', percentage: 100 },
    { phase: 'Cuarto Menguante', icon: '/icons/moon/moon-75.svg', date: '23 Nov', percentage: 75 }
  ];

  const currentPhase = moonPhases[2]; // Luna Llena como ejemplo

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 p-6">
      <div className="flex items-center space-x-3">
        <Moon className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-bold">Fases Lunares</h2>
      </div>

      <div className="text-center space-y-4">
        <img 
          src={currentPhase.icon} 
          alt={currentPhase.phase}
          className="w-24 h-24 mx-auto icon-lg filter drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 0 12px hsl(var(--primary) / 0.5))' }}
        />
        <div>
          <div className="text-2xl font-bold text-primary">{currentPhase.phase}</div>
          <div className="text-sm text-muted-foreground">{currentPhase.date}</div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <h3 className="text-sm font-semibold text-muted-foreground text-center">
          Próximas fases
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {moonPhases.map((phase, index) => (
            <div 
              key={index}
              className={`text-center p-2 rounded-lg transition-colors ${
                phase.phase === currentPhase.phase 
                  ? 'bg-primary/20 border border-primary' 
                  : 'bg-muted/20'
              }`}
            >
              <img 
                src={phase.icon} 
                alt={phase.phase}
                className="w-8 h-8 mx-auto mb-1 icon"
              />
              <div className="text-xs text-muted-foreground">{phase.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoonCard;
