import { AssassinDetails } from '@pages/admin'
import { MissionStatus } from '@models/enums'

export const assassinsDetailsMock: AssassinDetails[] = [
  {
    id: 1,
    name: 'John Wick',
    email: 'john@mail.com',
    alias: 'Baba Yaga',
    address: 'Calle de la Rosa, 123',
    status: 'active',
    country: 'colombia',
    coins: 100,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 1,
        description: 'Misión 1',
        status: MissionStatus.COMPLETED,
        createdBy: 'Lorraine Broughton',
      },
      {
        id: 2,
        description: 'Misión 2',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 3,
        description: 'Misión 3',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 4,
        description: 'Misión 4',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 1,
        assignedTo: {
          id: 1,
          name: 'Jason Bourne',
        },
        mission: 'Misión 1',
      },
      {
        id: 2,
        assignedTo: {
          id: 2,
          name: 'Nikita Mears',
        },
        mission: 'Misión 2',
      },
      {
        id: 3,
        assignedTo: {
          id: 3,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 3',
      },
      {
        id: 4,
        assignedTo: {
          id: 4,
          name: 'James Bond',
        },
        mission: 'Misión 4',
      },
    ],
    debsToCollect: [
      {
        id: 1,
        createdBy: {
          id: 1,
          name: 'Jason Bourne',
        },
        mission: 'Misión 1',
      },
      {
        id: 2,
        createdBy: {
          id: 2,
          name: 'Nikita Mears',
        },
        mission: 'Misión 2',
      },
      {
        id: 3,
        createdBy: {
          id: 3,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 3',
      },
      {
        id: 4,
        createdBy: {
          id: 4,
          name: 'James Bond',
        },
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
    status: 'inactive',
    country: 'colombia',
    coins: 150,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 5,
        description: 'Misión 5',
        status: MissionStatus.COMPLETED,
        createdBy: 'John Wick',
      },
      {
        id: 6,
        description: 'Misión 6',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 7,
        description: 'Misión 7',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 8,
        description: 'Misión 8',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 5,
        assignedTo: {
          id: 5,
          name: 'John Wick',
        },
        mission: 'Misión 5',
      },
      {
        id: 6,
        assignedTo: {
          id: 6,
          name: 'Nikita Mears',
        },
        mission: 'Misión 6',
      },
      {
        id: 7,
        assignedTo: {
          id: 7,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 7',
      },
      {
        id: 8,
        assignedTo: {
          id: 8,
          name: 'James Bond',
        },
        mission: 'Misión 8',
      },
    ],
    debsToCollect: [
      {
        id: 5,
        createdBy: {
          id: 5,
          name: 'John Wick',
        },
        mission: 'Misión 5',
      },
      {
        id: 6,
        createdBy: {
          id: 6,
          name: 'Nikita Mears',
        },
        mission: 'Misión 6',
      },
      {
        id: 7,
        createdBy: {
          id: 7,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 7',
      },
      {
        id: 8,
        createdBy: {
          id: 8,
          name: 'James Bond',
        },
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
    status: 'active',
    country: 'colombia',
    coins: 200,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 9,
        description: 'Misión 9',
        status: MissionStatus.COMPLETED,
        createdBy: 'John Wick',
      },
      {
        id: 10,
        description: 'Misión 10',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 11,
        description: 'Misión 11',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 12,
        description: 'Misión 12',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 9,
        assignedTo: {
          id: 9,
          name: 'John Wick',
        },
        mission: 'Misión 9',
      },
      {
        id: 10,
        assignedTo: {
          id: 10,
          name: 'Nikita Mears',
        },
        mission: 'Misión 10',
      },
      {
        id: 11,
        assignedTo: {
          id: 11,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 11',
      },
      {
        id: 12,
        assignedTo: {
          id: 12,
          name: 'James Bond',
        },
        mission: 'Misión 12',
      },
    ],
    debsToCollect: [
      {
        id: 9,
        createdBy: {
          id: 9,
          name: 'John Wick',
        },
        mission: 'Misión 9',
      },
      {
        id: 10,
        createdBy: {
          id: 10,
          name: 'Nikita Mears',
        },
        mission: 'Misión 10',
      },
      {
        id: 11,
        createdBy: {
          id: 11,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 11',
      },
      {
        id: 12,
        createdBy: {
          id: 12,
          name: 'James Bond',
        },
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
    status: 'active',
    country: 'colombia',
    coins: 250,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 13,
        description: 'Misión 13',
        status: MissionStatus.COMPLETED,
        createdBy: 'John Wick',
      },
      {
        id: 14,
        description: 'Misión 14',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 15,
        description: 'Misión 15',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 16,
        description: 'Misión 16',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 13,
        assignedTo: {
          id: 13,
          name: 'John Wick',
        },
        mission: 'Misión 13',
      },
      {
        id: 14,
        assignedTo: {
          id: 14,
          name: 'Nikita Mears',
        },
        mission: 'Misión 14',
      },
      {
        id: 15,
        assignedTo: {
          id: 15,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 15',
      },
      {
        id: 16,
        assignedTo: {
          id: 16,
          name: 'James Bond',
        },
        mission: 'Misión 16',
      },
    ],
    debsToCollect: [
      {
        id: 13,
        createdBy: {
          id: 13,
          name: 'John Wick',
        },
        mission: 'Misión 13',
      },
      {
        id: 14,
        createdBy: {
          id: 14,
          name: 'Nikita Mears',
        },
        mission: 'Misión 14',
      },
      {
        id: 15,
        createdBy: {
          id: 15,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 15',
      },
      {
        id: 16,
        createdBy: {
          id: 16,
          name: 'James Bond',
        },
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
    status: 'active',
    country: 'colombia',
    coins: 300,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 17,
        description: 'Misión 17',
        status: MissionStatus.COMPLETED,
        createdBy: 'John Wick',
      },
      {
        id: 18,
        description: 'Misión 18',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 19,
        description: 'Misión 19',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 20,
        description: 'Misión 20',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 17,
        assignedTo: {
          id: 17,
          name: 'John Wick',
        },
        mission: 'Misión 17',
      },
      {
        id: 18,
        assignedTo: {
          id: 18,
          name: 'Nikita Mears',
        },
        mission: 'Misión 18',
      },
      {
        id: 19,
        assignedTo: {
          id: 19,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 19',
      },
      {
        id: 20,
        assignedTo: {
          id: 20,
          name: 'James Bond',
        },
        mission: 'Misión 20',
      },
    ],
    debsToCollect: [
      {
        id: 17,
        createdBy: {
          id: 17,
          name: 'John Wick',
        },
        mission: 'Misión 17',
      },
      {
        id: 18,
        createdBy: {
          id: 18,
          name: 'Nikita Mears',
        },
        mission: 'Misión 18',
      },
      {
        id: 19,
        createdBy: {
          id: 19,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 19',
      },
      {
        id: 20,
        createdBy: {
          id: 20,
          name: 'James Bond',
        },
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
    status: 'inactive',
    country: 'colombia',
    coins: 350,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 21,
        description: 'Misión 21',
        status: MissionStatus.COMPLETED,
        createdBy: 'John Wick',
      },
      {
        id: 22,
        description: 'Misión 22',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 23,
        description: 'Misión 23',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 24,
        description: 'Misión 24',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 21,
        assignedTo: {
          id: 21,
          name: 'John Wick',
        },
        mission: 'Misión 21',
      },
      {
        id: 22,
        assignedTo: {
          id: 22,
          name: 'Nikita Mears',
        },
        mission: 'Misión 22',
      },
      {
        id: 23,
        assignedTo: {
          id: 23,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 23',
      },
      {
        id: 24,
        assignedTo: {
          id: 24,
          name: 'James Bond',
        },
        mission: 'Misión 24',
      },
    ],
    debsToCollect: [
      {
        id: 21,
        createdBy: {
          id: 21,
          name: 'John Wick',
        },
        mission: 'Misión 21',
      },
      {
        id: 22,
        createdBy: {
          id: 22,
          name: 'Nikita Mears',
        },
        mission: 'Misión 22',
      },
      {
        id: 23,
        createdBy: {
          id: 23,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 23',
      },
      {
        id: 24,
        createdBy: {
          id: 24,
          name: 'James Bond',
        },
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
    status: 'active',
    country: 'colombia',
    coins: 400,
    photoUrl: '/images/john-wick.jpg',
    missionsHistory: [
      {
        id: 25,
        description: 'Misión 25',
        status: MissionStatus.COMPLETED,
        createdBy: 'John Wick',
      },
      {
        id: 26,
        description: 'Misión 26',
        status: MissionStatus.REJECTED,
        createdBy: 'James Bond',
      },
      {
        id: 27,
        description: 'Misión 27',
        status: MissionStatus.ASSIGNED,
        createdBy: 'Nikita Mears',
      },
      {
        id: 28,
        description: 'Misión 28',
        status: MissionStatus.PAID,
        createdBy: 'Ethan Hunt',
      },
    ],
    debsToPay: [
      {
        id: 25,
        assignedTo: {
          id: 25,
          name: 'John Wick',
        },
        mission: 'Misión 25',
      },
      {
        id: 26,
        assignedTo: {
          id: 26,
          name: 'Nikita Mears',
        },
        mission: 'Misión 26',
      },
      {
        id: 27,
        assignedTo: {
          id: 27,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 27',
      },
      {
        id: 28,
        assignedTo: {
          id: 28,
          name: 'James Bond',
        },
        mission: 'Misión 28',
      },
    ],
    debsToCollect: [
      {
        id: 25,
        createdBy: {
          id: 25,
          name: 'John Wick',
        },
        mission: 'Misión 25',
      },
      {
        id: 26,
        createdBy: {
          id: 26,
          name: 'Nikita Mears',
        },
        mission: 'Misión 26',
      },
      {
        id: 27,
        createdBy: {
          id: 27,
          name: 'Ethan Hunt',
        },
        mission: 'Misión 27',
      },
      {
        id: 28,
        createdBy: {
          id: 28,
          name: 'James Bond',
        },
        mission: 'Misión 28',
      },
    ],
  },
]
