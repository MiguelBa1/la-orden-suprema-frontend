import { MissionStatus } from '@models/enums'
import { MissionsList } from '@pages/admin'

export const missionsListMock: MissionsList = [
  {
    id: 1,
    createdBy: 'John Wick',
    assignedTo: 'Jason Bourne',
    description: 'Eliminación de objetivo de alto perfil',
    status: MissionStatus.ASSIGNED,
  },
  {
    id: 2,
    createdBy: 'Jason Bourne',
    assignedTo: null,
    description: 'Recuperación de documento secreto',
    status: MissionStatus.CREATED,
  },
  {
    id: 3,
    createdBy: 'John Wick',
    assignedTo: 'Ava Faulkner',
    description: 'Infiltración en edificio gubernamental',
    status: MissionStatus.PAID,
  },
  {
    id: 4,
    createdBy: 'James Bond',
    assignedTo: 'Ava Faulkner',
    description: 'Protección de testigo',
    status: MissionStatus.COMPLETED,
  },
  {
    id: 5,
    createdBy: 'Ava Faulkner',
    assignedTo: null,
    description: 'Neutralización de amenaza biológica',
    status: MissionStatus.CREATED,
  },
  {
    id: 6,
    createdBy: 'James Bond',
    assignedTo: 'Jason Bourne',
    description: 'Intercepción de envío de armas',
    status: MissionStatus.ASSIGNED,
  },
  {
    id: 7,
    createdBy: 'John Wick',
    assignedTo: 'Lorraine Broughton',
    description: 'Vigilancia de objetivo sospechoso',
    status: MissionStatus.PAID,
  },
  {
    id: 8,
    createdBy: 'Jason Bourne',
    assignedTo: 'James Bond',
    description: 'Rescate de rehén',
    status: MissionStatus.ASSIGNED,
  },
  {
    id: 9,
    createdBy: 'Ethan Hunt',
    assignedTo: null,
    description: 'Desactivación de bomba',
    status: MissionStatus.CREATED,
  },
  {
    id: 10,
    createdBy: 'Ava Faulkner',
    assignedTo: 'John Wick',
    description: 'Robo de información clasificada',
    status: MissionStatus.PAID,
  },
]
