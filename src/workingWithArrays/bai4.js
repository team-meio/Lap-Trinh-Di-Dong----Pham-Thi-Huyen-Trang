const dogs = [
    { weight: 22, foodPortion: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, foodPortion: 200, owners: ['Sarah'] },
    { weight: 13, foodPortion: 275, owners: ['Michael', 'John'] },
    { weight: 32, foodPortion: 340, owners: ['John', 'Sarah'] },
    { weight: 15, foodPortion: 275, owners: ['Matilda'] },
  ];
  
  // Task 1
  dogs.forEach(dog => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
  
  // Task 2
  dogs.forEach(dog => {
    if (dog.owners.includes('Sarah')) {
      if (dog.foodPortion > dog.recommendedFood * 1.10) {
        console.log('Sarah\'s dog is eating too much!');
      } else if (dog.foodPortion < dog.recommendedFood * 0.90) {
        console.log('Sarah\'s dog is eating too little!');
      } else {
        console.log('Sarah\'s dog is eating an okay amount!');
      }
    }
  });
  
  // Task 3
  const ownersEatTooMuch = [];
  const ownersEatTooLittle = [];
  
  dogs.forEach(dog => {
    if (dog.foodPortion > dog.recommendedFood * 1.10) {
      ownersEatTooMuch.push(...dog.owners);
    } else if (dog.foodPortion < dog.recommendedFood * 0.90) {
      ownersEatTooLittle.push(...dog.owners);
    }
  });
  
  // Task 4
  const uniqueOwnersEatTooMuch = [...new Set(ownersEatTooMuch)];
  const uniqueOwnersEatTooLittle = [...new Set(ownersEatTooLittle)];
  
  console.log(`${uniqueOwnersEatTooMuch.join(' and ')}'s dogs eat too much!`);
  console.log(`${uniqueOwnersEatTooLittle.join(' and ')}'s dogs eat too little!`);
  
  // Task 5
  const isEatingExactlyRecommended = dogs.some(dog => dog.foodPortion === dog.recommendedFood);
  console.log(isEatingExactlyRecommended);
  
  // Task 6
  const isEatingOkayAmount = dogs.some(dog =>
    dog.foodPortion >= dog.recommendedFood * 0.90 &&
    dog.foodPortion <= dog.recommendedFood * 1.10
  );
  console.log(isEatingOkayAmount);
  
  // Task 7
  const dogsEatingOkayAmount = dogs.filter(dog =>
    dog.foodPortion >= dog.recommendedFood * 0.90 &&
    dog.foodPortion <= dog.recommendedFood * 1.10
  );
  console.log(dogsEatingOkayAmount);
  
  // Task 8
  const dogsSortedByRecommendedFood = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSortedByRecommendedFood);
  