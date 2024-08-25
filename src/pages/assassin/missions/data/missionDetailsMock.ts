import { MissionDetails } from '@pages/assassin'
import { MissionPaymentType, MissionStatus } from '@models/enums'

export const missionDetailsMock: MissionDetails[] = [
  {
    id: 1,
    createdBy: {
      id: 1,
      name: "Administrador de la orden"
    },
    assignedTo: null,
    description: "Recuperar el microchip del laboratorio",
    details: "Se debe recuperar sin asesinar a nadie",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 500,
    imageUrl: null,
    createdAt: "2024-02-05",
    assignedAt: null
  },
  {
    id: 2,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: null,
    description: "Eliminar al objetivo en París",
    details: "El asesinato se debe realizar con un tenedor",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-05-21",
    assignedAt: null,
  },
  {
    id: 3,
    createdBy: {
      id: 3,
      name: "Nikita Mears"
    },
    assignedTo: null,
    description: "Infiltrarse en la sede de la organización rival",
    details: "Extraer los informes secretos sobre futuros robos",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 750,
    imageUrl: null,
    createdAt: "2024-08-15",
    assignedAt: null,
  },
  {
    id: 4,
    createdBy: {
      id: 5,
      name: "James Bond"
    },
    assignedTo: null,
    description: "Extraer información del servidor seguro",
    details: "Al finalizar la extracción de la información, el servidor debe ser destruido",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-05-11",
    assignedAt: null,
  },
  {
    id: 5,
    createdBy: {
      id: 7,
      name: "Administrador de la orden"
    },
    assignedTo: null,
    description: "Proteger al testigo clave en el juicio",
    details: "Se debe asesinar al abogado y al juez",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-08-29",
    assignedAt: null,
  },
  {
    id: 6,
    createdBy: {
      id: 1,
      name: "John Wick"
    },
    assignedTo: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Recuperar el microchip del laboratorio",
    details: "El laboratorio debe ser incendiado y no se pueden dejar testigos",
    status: MissionStatus.ASSIGNED,
    paymentType: MissionPaymentType.BLOOD_DEBT_COLLECTION,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-06-18",
    assignedAt: "2024-06-18",
  },
  {
    id: 7,
    createdBy: {
      id: 3,
      name: "Administrador de la orden"
    },
    assignedTo: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Eliminar al objetivo en París",
    details: "El asesinato se debe hacer con un francotirador",
    status: MissionStatus.COMPLETED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 899,
    imageUrl: '/images/evidence.webp',
    createdAt: "2024-07-25",
    assignedAt: "2024-08-11",
  },
  {
    id: 8,
    createdBy: {
      id: 4,
      name: "Administrador de la orden"
    },
    assignedTo: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Infiltrarse en la sede de la organización rival",
    details: "Se deben liberal a los secuestrados",
    status: MissionStatus.PAID,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: '/images/evidence.webp',
    createdAt: "2024-05-11",
    assignedAt: "2024-07-24",
  },
  {
    id: 9,
    createdBy: {
      id: 5,
      name: "James Bond"
    },
    assignedTo: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Extraer información del servidor seguro",
    details: "No se puede dejar rastros de la extracción",
    status: MissionStatus.ASSIGNED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-02-01",
    assignedAt: "2024-03-01",
  },
  {
    id: 10,
    createdBy: {
      id: 6,
      name: "Ava Faulkner"
    },
    assignedTo: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Proteger al testigo clave en el juicio",
    details: "Si alguien insulta al testigo, esta persona debe ser eliminada",
    status: MissionStatus.COMPLETED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 220,
    imageUrl: '/images/evidence.webp',
    createdAt: "2024-02-01",
    assignedAt: "2024-03-01",
  },
  {
    id: 11,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: null,
    description: "Recuperar el microchip del laboratorio",
    details: "El sujeto sobre el cual está el microchip debe quedar vivo",
    status: MissionStatus.CREATED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-05-11",
    assignedAt: null,
  },
  {
    id: 12,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: null,
    description: "Eliminar al objetivo en EEUU",
    details: "El arma del asesinato debe ser destruida y sin dejar ningún rastro",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 2000,
    imageUrl: null,
    createdAt: "2024-07-22",
    assignedAt: null,
  },
  {
    id: 13,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: null,
    description: "Infiltrarse en la sede de la organización rival",
    details: "El hijo del jefe debe ser asesinado",
    status: MissionStatus.REJECTED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: null,
    createdAt: "2024-01-14",
    assignedAt: null,
  },
  {
    id: 14,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: {
      id: 1,
      name: "John Wick"
    },
    description: "Extraer información del servidor seguro",
    details: "Todos los servidores deben quedar destruidos",
    status: MissionStatus.ASSIGNED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 4500,
    imageUrl: null,
    createdAt: "2024-07-17",
    assignedAt: "2024-08-02",
  },
  {
    id: 15,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: {
      id: 3,
      name: "Nikita Mears"
    },
    description: "Proteger al testigo clave en el juicio",
    details: "El testigo debe ser asesinado luego del juicio",
    status: MissionStatus.COMPLETED,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: '/images/evidence.webp',
    createdAt: "2024-03-16",
    assignedAt: "2024-05-19",
  },
  {
    id: 16,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: {
      id: 1,
      name: "John Wick"
    },
    description: "Sabotear las operaciones del enemigo",
    details: "Se debe robar el furgón con toda la mercancía",
    status: MissionStatus.PAID,
    paymentType: MissionPaymentType.BLOOD_DEBT,
    coinsAmount: null,
    imageUrl: '/images/evidence.webp',
    createdAt: "2024-01-22",
    assignedAt: "2024-01-25",
  },
  {
    id: 17,
    createdBy: {
      id: 2,
      name: "Jason Bourne"
    },
    assignedTo: null,
    description: "Rescatar al rehén de alto perfil",
    details: "Los secuestradores deben ser torturados y asesinados",
    status: MissionStatus.PUBLISHED,
    paymentType: MissionPaymentType.COINS,
    coinsAmount: 2350,
    imageUrl: null,
    createdAt: "2024-08-20",
    assignedAt: null,
  }
]
