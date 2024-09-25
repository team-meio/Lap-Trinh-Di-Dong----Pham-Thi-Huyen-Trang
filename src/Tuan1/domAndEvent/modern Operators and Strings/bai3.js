const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [21, '🔁 Substitution'],
    [37, '🟡 Yellow card'],
    [45, '⚽ GOAL'],
    [64, '🟡 Yellow card'],
    [75, '🔁 Substitution'],
    [80, '🔴 Red card'],
    [90, '⚽ GOAL']
  ]);
  
  // Task 1: Create an array of different game events
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  // Task 2: Remove the event from minute 64
  gameEvents.delete(64);
  console.log(gameEvents);
  
  // Task 3: Compute and log the average time between events
  const numberOfEvents = gameEvents.size;
  const averageTime = 90 / numberOfEvents;
  console.log(`An event happened, on average, every ${averageTime.toFixed(2)} minutes`);
  
  // Task 4: Log events with half-time information
  for (const [minute, event] of gameEvents) {
      const period = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
      console.log(`[${period}] ${minute}: ${event}`);
  }
  