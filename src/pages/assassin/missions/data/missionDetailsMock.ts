import { MissionDetails } from '@pages/assassin'
import { MissionPaymentType, MissionStatus } from '@models/enums'

export const missionDetailsMock: MissionDetails[] = [
  {
    id: 1,
    created_by: {
      id: 1,
      name: "Administrador de la orden"
    },
    assigned_to: null,
    description: "Recuperar el microchip del laboratorio",
    details: "Se debe recuperar sin asesinar a nadie",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 500,
    image_url: null,
    created_at: "2024-02-05",
    assigned_at: null
  },
  {
    id: 2,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null,
    description: "Eliminar al objetivo en París",
    details: "El asesinato se debe realizar con un tenedor",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: null,
    created_at: "2024-05-21",
    assigned_at: null,
  },
  {
    id: 3,
    created_by: {
      id: 3,
      name: "Nikita Mears"
    },
    assigned_to: null,
    description: "Infiltrarse en la sede de la organización rival",
    details: "Extraer los informes secretos sobre futuros robos",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 750,
    image_url: null,
    created_at: "2024-08-15",
    assigned_at: null,
  },
  {
    id: 4,
    created_by: {
      id: 5,
      name: "James Bond"
    },
    assigned_to: null,
    description: "Extraer información del servidor seguro",
    details: "Al finalizar la extracción de la información, el servidor debe ser destruido",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: null,
    created_at: "2024-05-11",
    assigned_at: null,
  },
  {
    id: 5,
    created_by: {
      id: 7,
      name: "Administrador de la orden"
    },
    assigned_to: null,
    description: "Proteger al testigo clave en el juicio",
    details: "Se debe asesinar al abogado y al juez",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: null,
    created_at: "2024-08-29",
    assigned_at: null,
  },
  {
    id: 6,
    created_by: {
      id: 1,
      name: "John Wick"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Recuperar el microchip del laboratorio",
    details: "El laboratorio debe ser incendiado y no se pueden dejar testigos",
    status: MissionStatus.ASSIGNED,
    payment_type: MissionPaymentType.BLOOD_DEBT_COLLECTION,
    coins_amount: null,
    image_url: null,
    created_at: "2024-06-18",
    assigned_at: "2024-06-18",
  },
  {
    id: 7,
    created_by: {
      id: 3,
      name: "Administrador de la orden"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Eliminar al objetivo en París",
    details: "El asesinato se debe hacer con un francotirador",
    status: MissionStatus.COMPLETED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 899,
    image_url: '/images/evidence.webp',
    created_at: "2024-07-25",
    assigned_at: "2024-08-11",
  },
  {
    id: 8,
    created_by: {
      id: 4,
      name: "Administrador de la orden"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Infiltrarse en la sede de la organización rival",
    details: "Se deben liberal a los secuestrados",
    status: MissionStatus.PAID,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: '/images/evidence.webp',
    created_at: "2024-05-11",
    assigned_at: "2024-07-24",
  },
  {
    id: 9,
    created_by: {
      id: 5,
      name: "James Bond"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Extraer información del servidor seguro",
    details: "No se puede dejar rastros de la extracción",
    status: MissionStatus.ASSIGNED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: null,
    created_at: "2024-02-01",
    assigned_at: "2024-03-01",
  },
  {
    id: 10,
    created_by: {
      id: 6,
      name: "Ava Faulkner"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    },
    description: "Proteger al testigo clave en el juicio",
    details: "Si alguien insulta al testigo, esta persona debe ser eliminada",
    status: MissionStatus.COMPLETED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 220,
    image_url: '/images/evidence.webp',
    created_at: "2024-02-01",
    assigned_at: "2024-03-01",
  },
  {
    id: 11,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null,
    description: "Recuperar el microchip del laboratorio",
    details: "El sujeto sobre el cual está el microchip debe quedar vivo",
    status: MissionStatus.CREATED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: null,
    created_at: "2024-05-11",
    assigned_at: null,
  },
  {
    id: 12,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null,
    description: "Eliminar al objetivo en EEUU",
    details: "El arma del asesinato debe ser destruida y sin dejar ningún rastro",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 2000,
    image_url: null,
    created_at: "2024-07-22",
    assigned_at: null,
  },
  {
    id: 13,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null,
    description: "Infiltrarse en la sede de la organización rival",
    details: "El hijo del jefe debe ser asesinado",
    status: MissionStatus.REJECTED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: null,
    created_at: "2024-01-14",
    assigned_at: null,
  },
  {
    id: 14,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: {
      id: 1,
      name: "John Wick"
    },
    description: "Extraer información del servidor seguro",
    details: "Todos los servidores deben quedar destruidos",
    status: MissionStatus.ASSIGNED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 4500,
    image_url: null,
    created_at: "2024-07-17",
    assigned_at: "2024-08-02",
  },
  {
    id: 15,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: {
      id: 3,
      name: "Nikita Mears"
    },
    description: "Proteger al testigo clave en el juicio",
    details: "El testigo debe ser asesinado luego del juicio",
    status: MissionStatus.COMPLETED,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: '/images/evidence.webp',
    created_at: "2024-03-16",
    assigned_at: "2024-05-19",
  },
  {
    id: 16,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: {
      id: 1,
      name: "John Wick"
    },
    description: "Sabotear las operaciones del enemigo",
    details: "Se debe robar el furgón con toda la mercancía",
    status: MissionStatus.PAID,
    payment_type: MissionPaymentType.BLOOD_DEBT,
    coins_amount: null,
    image_url: '/images/evidence.webp',
    created_at: "2024-01-22",
    assigned_at: "2024-01-25",
  },
  {
    id: 17,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null,
    description: "Rescatar al rehén de alto perfil",
    details: "Los secuestradores deben ser torturados y asesinados",
    status: MissionStatus.PUBLISHED,
    payment_type: MissionPaymentType.COINS,
    coins_amount: 2350,
    image_url: null,
    created_at: "2024-08-20",
    assigned_at: null,
  }
]
