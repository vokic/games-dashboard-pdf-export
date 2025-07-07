export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface BoardGame {
  name: string;
  description: string;
  numberOfPlayers: string; // for example: "2-4 players"
  playtime: string; // for example: "30-60 minutes"
  recommendedAge: string; // for example: "8+"
  category: string; // for example: "Strategy", "Family"
  difficulty: DifficultyLevel; // 'Easy' | 'Medium' | 'Hard'
  website: string; // URL string
  rating: number; // for example: 4.5 (out of 5)
}

// Tooltips
export const difficultyTooltips: Record<DifficultyLevel, string> = {
  Easy: 'Easy to learn and play - perfect for beginners and casual game nights.',
  Medium:
    'Some strategy involved - good for players who enjoy thinking a few moves ahead.',
  Hard: 'Deep strategy and complex rules - ideal for experienced gamers.',
};
