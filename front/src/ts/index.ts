interface IAninal {
  animalName: string;
};

interface IAninalData {
  getAnimalData(): IAninal;
};

// class FakeAnimalData implements IAninalData {
//   getCatData(): IAnimal {
//     return {animalName: 'Goody'};
//   };
// };

// class ServerAnimalData implements IAninalData {
//   getCatData(): IAnimal {
//     return {animalName: 'Boody'};
//   };
// };

// const animalGetter = new FakeAnimalData();
// const animal = animalGetter.getAnimalData();