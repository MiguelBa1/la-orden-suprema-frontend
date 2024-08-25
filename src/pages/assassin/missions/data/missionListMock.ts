import { MissionStatus } from '@models/enums'
import { MissionsList } from '@pages/assassin'

export const missionListMock: MissionsList = [
  {
    id: 1,
    description: "Recuperar el microchip del laboratorio",
    status: MissionStatus.PUBLISHED,
    createdBy: "Administrador de la orden",
    assignedTo: null
  },
  {
    id: 2,
    description: "Eliminar al objetivo en París",
    status: MissionStatus.PUBLISHED,
    createdBy: "Jason Bourne",
    assignedTo: null
  },
  {
    id: 3,
    description: "Infiltrarse en la sede de la organización rival",
    status: MissionStatus.PUBLISHED,
    createdBy: "Nikita Mears",
    assignedTo: null,
  },
  {
    id: 4,
    description: "Extraer información del servidor seguro",
    status: MissionStatus.PUBLISHED,
    createdBy: "James Bond",
    assignedTo: null,
  },
  {
    id: 5,
    description: "Proteger al testigo clave en el juicio",
    status: MissionStatus.PUBLISHED,
    createdBy: "Administrador de la orden",
    assignedTo: null
  },
  {
    id: 6,
    description: "Recuperar el microchip del laboratorio",
    status: MissionStatus.ASSIGNED,
    createdBy: "John Wick",
    assignedTo: "Jason Bourne",
  },
  {
    id: 7,
    description: "Eliminar al objetivo en París",
    status: MissionStatus.COMPLETED,
    createdBy: "Administrador de la orden",
    assignedTo: "Jason Bourne",
  },
  {
    id: 8,
    description: "Infiltrarse en la sede de la organización rival",
    status: MissionStatus.PAID,
    createdBy: "Administrador de la orden",
    assignedTo: "Jason Bourne",
  },
  {
    id: 9,
    description: "Extraer información del servidor seguro",
    status: MissionStatus.ASSIGNED,
    createdBy: "James Bond",
    assignedTo: "Jason Bourne",
  },
  {
    id: 10,
    description: "Proteger al testigo clave en el juicio",
    status: MissionStatus.COMPLETED,
    createdBy: "Ava Faulkner",
    assignedTo: "Jason Bourne",
  },
  {
    id: 11,
    description: "Recuperar el microchip del laboratorio",
    status: MissionStatus.CREATED,
    createdBy: "Jason Bourne",
    assignedTo: null
  },
  {
    id: 12,
    description: "Eliminar al objetivo en París",
    status: MissionStatus.PUBLISHED,
    createdBy: "Jason Bourne",
    assignedTo: null
  },
  {
    id: 13,
    description: "Infiltrarse en la sede de la organización rival",
    status: MissionStatus.REJECTED,
    createdBy: "Jason Bourne",
    assignedTo: null
  },
  {
    id: 14,
    description: "Extraer información del servidor seguro",
    status: MissionStatus.ASSIGNED,
    createdBy: "Jason Bourne",
    assignedTo: "John Wick",
  },
  {
    id: 15,
    description: "Proteger al testigo clave en el juicio",
    status: MissionStatus.COMPLETED,
    createdBy: "Jason Bourne",
    assignedTo: "Nikita Mears",
  },
  {
    id: 16,
    description: "Sabotear las operaciones del enemigo",
    status: MissionStatus.PAID,
    createdBy: "Jason Bourne",
    assignedTo: "Ethan Hunt",
  },
  {
    id: 17,
    description: "Rescatar al rehén de alto perfil",
    status: MissionStatus.PUBLISHED,
    createdBy: "Jason Bourne",
    assignedTo: null
  }
]
