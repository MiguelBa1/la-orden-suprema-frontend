import { AssassinDetails } from '@pages/admin'

export const assassinsDetailsMock: AssassinDetails[] = [
  {
    id: 1,
    name: 'John Wick',
    email: 'john@mail.com',
    alias: 'Baba Yaga',
    address: 'Calle de la Rosa, 123',
    phone: '1234567890',
    status: 'active',
    country: 'colombia',
    coins: 100,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 1,
        description: 'Misión 1',
        status: 'completed',
        creator: 'Lorraine Broughton',
      },
      {
        id: 2,
        description: 'Misión 2',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 3,
        description: 'Misión 3',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 4,
        description: 'Misión 4',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 1,
        creditor: 'Jason Bourne',
        mission: 'Misión 5',
      },
      {
        id: 2,
        creditor: 'Nikita Mears',
        mission: 'Misión 6',
      },
      {
        id: 3,
        creditor: 'Ethan Hunt',
        mission: 'Misión 7',
      },
      {
        id: 4,
        creditor: 'James Bond',
        mission: 'Misión 8',
      },
    ],
    debsToCollect: [
      {
        id: 1,
        debtor: 'Jason Bourne',
        mission: 'Misión 1',
      },
      {
        id: 2,
        debtor: 'Nikita Mears',
        mission: 'Misión 2',
      },
      {
        id: 3,
        debtor: 'Ethan Hunt',
        mission: 'Misión 3',
      },
      {
        id: 4,
        debtor: 'James Bond',
        mission: 'Misión 4',
      },
    ],
  },
  {
    id: 2,
    name: 'Jason Bourne',
    email: 'jason@mail.com',
    alias: 'David Webb',
    address: 'Calle de la Flor, 456',
    phone: '0987654321',
    status: 'inactive',
    country: 'colombia',
    coins: 150,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 5,
        description: 'Misión 5',
        status: 'completed',
        creator: 'John Wick',
      },
      {
        id: 6,
        description: 'Misión 6',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 7,
        description: 'Misión 7',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 8,
        description: 'Misión 8',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 5,
        creditor: 'John Wick',
        mission: 'Misión 1',
      },
      {
        id: 6,
        creditor: 'Nikita Mears',
        mission: 'Misión 2',
      },
      {
        id: 7,
        creditor: 'Ethan Hunt',
        mission: 'Misión 3',
      },
      {
        id: 8,
        creditor: 'James Bond',
        mission: 'Misión 4',
      },
    ],
    debsToCollect: [
      {
        id: 5,
        debtor: 'John Wick',
        mission: 'Misión 5',
      },
      {
        id: 6,
        debtor: 'Nikita Mears',
        mission: 'Misión 6',
      },
      {
        id: 7,
        debtor: 'Ethan Hunt',
        mission: 'Misión 7',
      },
      {
        id: 8,
        debtor: 'James Bond',
        mission: 'Misión 8',
      },
    ],
  },
  {
    id: 3,
    name: 'Nikita Mears',
    email: 'nikita@mail.com',
    alias: 'Josephine',
    address: 'Calle de la Luz, 789',
    phone: '9876543210',
    status: 'active',
    country: 'colombia',
    coins: 200,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 9,
        description: 'Misión 9',
        status: 'completed',
        creator: 'John Wick',
      },
      {
        id: 10,
        description: 'Misión 10',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 11,
        description: 'Misión 11',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 12,
        description: 'Misión 12',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 9,
        creditor: 'John Wick',
        mission: 'Misión 9',
      },
      {
        id: 10,
        creditor: 'Nikita Mears',
        mission: 'Misión 10',
      },
      {
        id: 11,
        creditor: 'Ethan Hunt',
        mission: 'Misión 11',
      },
      {
        id: 12,
        creditor: 'James Bond',
        mission: 'Misión 12',
      },
    ],
    debsToCollect: [
      {
        id: 9,
        debtor: 'John Wick',
        mission: 'Misión 9',
      },
      {
        id: 10,
        debtor: 'Nikita Mears',
        mission: 'Misión 10',
      },
      {
        id: 11,
        debtor: 'Ethan Hunt',
        mission: 'Misión 11',
      },
      {
        id: 12,
        debtor: 'James Bond',
        mission: 'Misión 12',
      },
    ],
  },
  {
    id: 4,
    name: 'Ethan Hunt',
    email: 'ethan@mail.com',
    alias: 'Dmitri',
    address: 'Calle de la Sombra, 101',
    phone: '8765432109',
    status: 'active',
    country: 'colombia',
    coins: 250,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 13,
        description: 'Misión 13',
        status: 'completed',
        creator: 'John Wick',
      },
      {
        id: 14,
        description: 'Misión 14',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 15,
        description: 'Misión 15',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 16,
        description: 'Misión 16',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 13,
        creditor: 'John Wick',
        mission: 'Misión 13',
      },
      {
        id: 14,
        creditor: 'Nikita Mears',
        mission: 'Misión 14',
      },
      {
        id: 15,
        creditor: 'Ethan Hunt',
        mission: 'Misión 15',
      },
      {
        id: 16,
        creditor: 'James Bond',
        mission: 'Misión 16',
      },
    ],
    debsToCollect: [
      {
        id: 13,
        debtor: 'John Wick',
        mission: 'Misión 13',
      },
      {
        id: 14,
        debtor: 'Nikita Mears',
        mission: 'Misión 14',
      },
      {
        id: 15,
        debtor: 'Ethan Hunt',
        mission: 'Misión 15',
      },
      {
        id: 16,
        debtor: 'James Bond',
        mission: 'Misión 16',
      },
    ],
  },
  {
    id: 5,
    name: 'James Bond',
    email: 'james@mail.com',
    alias: '007',
    address: 'Calle del Espía, 112',
    phone: '7654321098',
    status: 'active',
    country: 'colombia',
    coins: 300,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 17,
        description: 'Misión 17',
        status: 'completed',
        creator: 'John Wick',
      },
      {
        id: 18,
        description: 'Misión 18',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 19,
        description: 'Misión 19',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 20,
        description: 'Misión 20',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 17,
        creditor: 'John Wick',
        mission: 'Misión 17',
      },
      {
        id: 18,
        creditor: 'Nikita Mears',
        mission: 'Misión 18',
      },
      {
        id: 19,
        creditor: 'Ethan Hunt',
        mission: 'Misión 19',
      },
      {
        id: 20,
        creditor: 'James Bond',
        mission: 'Misión 20',
      },
    ],
    debsToCollect: [
      {
        id: 17,
        debtor: 'John Wick',
        mission: 'Misión 17',
      },
      {
        id: 18,
        debtor: 'Nikita Mears',
        mission: 'Misión 18',
      },
      {
        id: 19,
        debtor: 'Ethan Hunt',
        mission: 'Misión 19',
      },
      {
        id: 20,
        debtor: 'James Bond',
        mission: 'Misión 20',
      },
    ],
  },
  {
    id: 6,
    name: 'Ava Faulkner',
    email: 'ava@mail.com',
    alias: 'Madam X',
    address: 'Calle de la Rosa, 321',
    phone: '6543210987',
    status: 'inactive',
    country: 'colombia',
    coins: 350,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 21,
        description: 'Misión 21',
        status: 'completed',
        creator: 'John Wick',
      },
      {
        id: 22,
        description: 'Misión 22',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 23,
        description: 'Misión 23',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 24,
        description: 'Misión 24',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 21,
        creditor: 'John Wick',
        mission: 'Misión 21',
      },
      {
        id: 22,
        creditor: 'Nikita Mears',
        mission: 'Misión 22',
      },
      {
        id: 23,
        creditor: 'Ethan Hunt',
        mission: 'Misión 23',
      },
      {
        id: 24,
        creditor: 'James Bond',
        mission: 'Misión 24',
      },
    ],
    debsToCollect: [
      {
        id: 21,
        debtor: 'John Wick',
        mission: 'Misión 21',
      },
      {
        id: 22,
        debtor: 'Nikita Mears',
        mission: 'Misión 22',
      },
      {
        id: 23,
        debtor: 'Ethan Hunt',
        mission: 'Misión 23',
      },
      {
        id: 24,
        debtor: 'James Bond',
        mission: 'Misión 24',
      },
    ],
  },
  {
    id: 7,
    name: 'Lorraine Broughton',
    email: 'lorraine@mail.com',
    alias: 'Sable',
    address: 'Calle de la Noche, 432',
    phone: '5432109876',
    status: 'active',
    country: 'colombia',
    coins: 400,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 25,
        description: 'Misión 25',
        status: 'completed',
        creator: 'John Wick',
      },
      {
        id: 26,
        description: 'Misión 26',
        status: 'failed',
        creator: 'James Bond',
      },
      {
        id: 27,
        description: 'Misión 27',
        status: 'assigned',
        creator: 'Nikita Mears',
      },
      {
        id: 28,
        description: 'Misión 28',
        status: 'paid',
        creator: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 25,
        creditor: 'John Wick',
        mission: 'Misión 25',
      },
      {
        id: 26,
        creditor: 'Nikita Mears',
        mission: 'Misión 26',
      },
      {
        id: 27,
        creditor: 'Ethan Hunt',
        mission: 'Misión 27',
      },
      {
        id: 28,
        creditor: 'James Bond',
        mission: 'Misión 28',
      },
    ],
    debsToCollect: [
      {
        id: 25,
        debtor: 'John Wick',
        mission: 'Misión 25',
      },
      {
        id: 26,
        debtor: 'Nikita Mears',
        mission: 'Misión 26',
      },
      {
        id: 27,
        debtor: 'Ethan Hunt',
        mission: 'Misión 27',
      },
      {
        id: 28,
        debtor: 'James Bond',
        mission: 'Misión 28',
      },
    ],
  },
]
