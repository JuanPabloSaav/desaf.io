import { loadPlayerCards } from "./leaderboard/laberinto-player-card/leaderboard-player-card.js";
import { loadLeaderboard } from "./leaderboard/leaderboard.js";

await loadLeaderboard().then(async () => {
  await loadPlayerCards();
});

