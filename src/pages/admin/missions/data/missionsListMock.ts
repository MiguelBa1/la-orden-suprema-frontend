import { MissionStatus } from '../models/index'

export const missionsListMock = [
  {
    id: '1',
    description: 'Matar al objetivo',
    status: MissionStatus.CREATED,
    createdBy: 'Jason Bourne',
    assignedTo: 'John Wick',
  },
  {
    id: '2',
    description: 'Obtener la información',
    status: MissionStatus.ASSIGNED,
    createdBy: 'Nick Fury',
    assignedTo: 'Jason Bourne',
  },
  {
    id: '3',
    description: 'Limpiar la zona',
    status: MissionStatus.COMPLETED,
    createdBy: 'Nathan Drake',
    assignedTo: 'Nikita Mears',
  },
  {
    id: '4',
    description: 'Robar el objeto',
    status: MissionStatus.PAID,
    createdBy: 'Kurt Sloan',
    assignedTo: 'Ethan Hunt',
  },
  {
    id: '5',
    description: 'Liberar al rehén',
    status: MissionStatus.PUBLISHED,
    createdBy: 'Admin',
    assignedTo: 'James Bond',
  },
  {
    id: '6',
    description: 'Negociar con el enemigo',
    status: MissionStatus.REJECTED,
    createdBy: 'Girona',
    assignedTo: 'Ava Faulkner',
  },
  {
    id: '7',
    description: 'Silenciar al testigo',
    status: MissionStatus.CREATED,
    createdBy: 'John Wick',
    assignedTo: 'Lorraine Broughton',
  },
]
