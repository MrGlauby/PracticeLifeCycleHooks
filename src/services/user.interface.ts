// user.interface.ts
export interface User {
  name: string;
  age: number;
  gender: string;
  address: string;
}

// Hockey

export interface HockeyTeams {
  teamname: string;
}

export interface Players {
  name: string;
  shirtNumber: number;
  position: string;
};


// Kanzlei!

export interface Client {
  name: string;
  address: string;
  cases: Case[];
}

export interface Case {
  caseId: number;
  caseDescription: string;
  caseStatus: 'open' | 'closed' | 'in-progress';
}