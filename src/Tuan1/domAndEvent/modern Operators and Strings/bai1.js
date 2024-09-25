const game = {
    team1: 'Bayern Munich',
    team2: 'Borrusia Dortmund',
    players: [
      ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Coman', 'Lewandowski', 'Tolisso'],
      ['Burki', 'Piszczek', 'Hummels', 'Akanji', 'Schulz', 'Witsel', 'Bellingham', 'Brandt', 'Sancho', 'Reus', 'Haaland']
    ],
    score: '4:0',
    scored: ['Davies', 'Muller', 'Lewandowski', 'Kimmich'],
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5
    }
  };

  const [players1, players2] = game.players;

  const [gk, ...fieldPlayers] = players1;
  console.log(gk); // 'Neuer'
  console.log(fieldPlayers); // ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Coman', 'Lewandowski', 'Tolisso']
  
  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);
  
  const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
  console.log(players1Final);
  
  const { team1, draw, team2 } = game.odds;
  console.log(team1); // 1.33
  console.log(draw); // 3.25
  console.log(team2); // 6.5
  
  const printGoals = function(...players) {
      console.log(`${players.length} goals were scored.`);
      players.forEach(player => console.log(player));
  };
  
  printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
  
  printGoals(...game.scored);

  const mostLikelyTeam = Object.entries(game.odds)
      .sort((a, b) => a[1] - b[1])[0][0]; 
  
  console.log(`${game[mostLikelyTeam]} is more likely to win.`);
  