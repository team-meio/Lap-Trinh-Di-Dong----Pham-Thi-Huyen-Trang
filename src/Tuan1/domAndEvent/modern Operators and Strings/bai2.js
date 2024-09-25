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
  
  for (let i = 0; i < game.scored.length; i++) {
      console.log(`Goal ${i + 1}: ${game.scored[i]}`);
  }

  const odds = game.odds;
  const averageOdd = (odds.team1 + odds.draw + odds.team2) / 3;
  console.log(`Average Odd: ${averageOdd}`);

  const { team1, team2 } = game;
  console.log(`Odd of victory ${team1}: ${odds.team1}`);
  console.log(`Odd of draw: ${odds.draw}`);
  console.log(`Odd of victory ${team2}: ${odds.team2}`);

  const scorers = {};
  for (const player of game.scored) {
      if (scorers[player]) {
          scorers[player] += 1;
      } else {
          scorers[player] = 1;
      }
  }
  console.log(scorers);
  