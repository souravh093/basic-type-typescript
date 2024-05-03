{
  // generic with alias or interface
  interface User {
    name: string;
    age: number;
  }

  type Generic<T> = [T];

  const user: Generic<User> = [
    {
      name: "Sourave Halder",
      age: 23,
    },
  ];

  interface Developer<T, K = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: K;
  }

  interface PoorWatch {
    brand: string;
    model: string;
    display: string;
  }

  const poorDeveloper: Developer<PoorWatch> = {
    name: "Sourave Halder",
    computer: {
      brand: "Samsung",
      model: "1392Ff",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Apple",
      model: "KE22",
      display: "nothing",
    },
  };

  type RichWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  interface RichBike {
    brand: "Honda" | "Apple" | "Suzuki" | "Hero";
    speed: 120 | 150 | 250 | 750;
  }

  const richDeveloper: Developer<RichWatch, RichBike> = {
    name: "Rich Halder",
    computer: {
      brand: "Apple",
      model: "1392Ff",
      releaseYear: 2024,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "KE22",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Apple",
      speed: 750,
    },
  };
}
