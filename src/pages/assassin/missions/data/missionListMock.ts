import { MissionStatus } from '@models/enums'
import { MissionList } from '@pages/assassin'

export const missionListMock: MissionList = [
  {
    id: 1,
    created_by: {
      id: 1,
      name: 'John Wick',
    },
    assigned_to: {
      id: 2,
      name: 'Jason Bourne',
    },
    description: 'Eliminación de objetivo de alto perfil',
    status: MissionStatus.ASSIGNED,
  },
  {
    id: 2,
    created_by: {
      id: 2,
      name: 'Jason Bourne',
    },
    assigned_to: null,
    description: 'Recuperación de documento secreto',
    status: MissionStatus.CREATED,
  },
  {
    id: 3,
    created_by: {
      id: 1,
      name: 'John Wick',
    },
    assigned_to: {
      id: 6,
      name: 'Ava Faulkner',
    },
    description: 'Infiltración en edificio gubernamental',
    status: MissionStatus.PAID,
  },
  {
    id: 4,
    created_by: {
      id: 5,
      name: 'James Bond',
    },
    assigned_to: {
      id: 6,
      name: 'Ava Faulkner',
    },
    description: 'Protección de testigo',
    status: MissionStatus.COMPLETED,
  },
  {
    id: 5,
    created_by: {
      id: 6,
      name: 'Ava Faulkner',
    },
    assigned_to: null,
    description: 'Neutralización de amenaza biológica',
    status: MissionStatus.CREATED,
  },
  {
    id: 6,
    created_by: {
      id: 5,
      name: 'James Bond',
    },
    assigned_to: {
      id: 2,
      name: 'Jason Bourne',
    },
    description: 'Intercepción de envío de armas',
    status: MissionStatus.ASSIGNED,
  },
  {
    id: 7,
    created_by: {
      id: 1,
      name: 'John Wick',
    },
    assigned_to: {
      id: 7,
      name: 'Lorraine Broughton',
    },
    description: 'Vigilancia de objetivo sospechoso',
    status: MissionStatus.PAID,
  },
  {
    id: 8,
    created_by: {
      id: 2,
      name: 'Jason Bourne',
    },
    assigned_to: {
      id: 5,
      name: 'James Bond',
    },
    description: 'Rescate de rehén',
    status: MissionStatus.ASSIGNED,
  },
  {
    id: 9,
    created_by: {
      id: 4,
      name: 'Ethan Hunt',
    },
    assigned_to: null,
    description: 'Desactivación de bomba',
    status: MissionStatus.CREATED,
  },
  {
    id: 10,
    created_by: {
      id: 6,
      name: 'Ava Faulkner',
    },
    assigned_to: {
      id: 1,
      name: 'John Wick',
    },
    description: 'Robo de información clasificada',
    status: MissionStatus.PAID,
  },
  {
    id: 11,
    created_by: {
      id: 1,
      name: 'John Wick',
    },
    assigned_to: null,
    description: 'Eliminación de objetivo de alto perfil',
    status: MissionStatus.PUBLISHED,
  },
  {
    id: 12,
    created_by: {
      id: 1,
      name: 'John Wick',
    },
    assigned_to: null,
    description: 'Recuperación de documento secreto',
    status: MissionStatus.PUBLISHED,
  }
]
