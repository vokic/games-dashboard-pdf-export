import { BoardGame } from '../models/board-game.model';

export const BOARD_GAMES: BoardGame[] = [
  {
    name: 'Catan',
    description:
      'Build settlements, trade resources, control the island of Catan. Strategy and negotiation are key to victory.',
    numberOfPlayers: '3-4 players',
    playtime: '60-120 minutes',
    recommendedAge: '10+',
    category: 'Strategy',
    difficulty: 'Medium',
    website: 'https://www.catan.com/',
    rating: 4,
  },
  {
    name: 'Ticket to Ride',
    description:
      'Collect train cards to claim railway routes across North America. Simple to learn, yet packed with strategic depth.',
    numberOfPlayers: '2-5 players',
    playtime: '30-60 minutes',
    recommendedAge: '8+',
    category: 'Family',
    difficulty: 'Easy',
    website: 'https://www.daysofwonder.com/tickettoride/en/',
    rating: 1,
  },
  {
    name: 'Gloomhaven',
    description:
      'A massive tactical combat campaign in a fantasy world. Every choice matters in this deep, story-driven experience.',
    numberOfPlayers: '1-4 players',
    playtime: '60-120 minutes',
    recommendedAge: '14+',
    category: 'Adventure',
    difficulty: 'Hard',
    website: 'https://www.cephalofair.com/gloomhaven',
    rating: 2,
  },
  {
    name: 'Carcassonne',
    description:
      'Place tiles to build cities, roads, and fields in medieval France. A calm but clever game of spatial strategy.',
    numberOfPlayers: '2-5 players',
    playtime: '30-45 minutes',
    recommendedAge: '7+',
    category: 'Family',
    difficulty: 'Easy',
    website: 'https://www.zmangames.com/en/games/carcassonne/',
    rating: 4,
  },
  {
    name: 'Pandemic',
    description:
      'Rebuild a post-war Europe through asymmetric factions. Stunning visuals and sharp strategy combined.',
    numberOfPlayers: '2-4 players',
    playtime: '45 minutes',
    recommendedAge: '8+',
    category: 'Cooperative',
    difficulty: 'Medium',
    website: 'https://www.zmangames.com/en/games/pandemic/',
    rating: 4,
  },
  {
    name: 'TerraforMars',
    description:
      'Draft colorful tiles to decorate the royal palace walls. A beautiful game with elegant, abstract strategy.',
    numberOfPlayers: '1-5 players',
    playtime: '120 minutes',
    recommendedAge: '12+',
    category: 'Strategy',
    difficulty: 'Hard',
    website: 'https://strongholdgames.com/collections/terraforming-mars',
    rating: 3,
  },
];
