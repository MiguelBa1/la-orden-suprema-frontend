import { MissionStatus } from '@models/enums'
import { MissionList } from '@pages/assassin'

export const missionListMock: MissionList = [
  {
    id: 1,
    description: "Recuperar el microchip del laboratorio",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 1,
      name: "Administrador de la orden"
    },
    assigned_to: null
  },
  {
    id: 2,
    description: "Eliminar al objetivo en París",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null
  },
  {
    id: 3,
    description: "Infiltrarse en la sede de la organización rival",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 3,
      name: "Nikita Mears"
    },
    assigned_to: null,
  },
  {
    id: 4,
    description: "Extraer información del servidor seguro",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 5,
      name: "James Bond"
    },
    assigned_to: null,
  },
  {
    id: 5,
    description: "Proteger al testigo clave en el juicio",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 7,
      name: "Administrador de la orden"
    },
    assigned_to: null
  },
  {
    id: 6,
    description: "Recuperar el microchip del laboratorio",
    status: MissionStatus.ASSIGNED,
    created_by: {
      id: 1,
      name: "John Wick"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    }
  },
  {
    id: 7,
    description: "Eliminar al objetivo en París",
    status: MissionStatus.COMPLETED,
    created_by: {
      id: 3,
      name: "Administrador de la orden"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    }
  },
  {
    id: 8,
    description: "Infiltrarse en la sede de la organización rival",
    status: MissionStatus.PAID,
    created_by: {
      id: 4,
      name: "Administrador de la orden"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    }
  },
  {
    id: 9,
    description: "Extraer información del servidor seguro",
    status: MissionStatus.ASSIGNED,
    created_by: {
      id: 5,
      name: "James Bond"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    }
  },
  {
    id: 10,
    description: "Proteger al testigo clave en el juicio",
    status: MissionStatus.COMPLETED,
    created_by: {
      id: 6,
      name: "Ava Faulkner"
    },
    assigned_to: {
      id: 2,
      name: "Jason Bourne"
    }
  },
  {
    id: 11,
    description: "Recuperar el microchip del laboratorio",
    status: MissionStatus.CREATED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null
  },
  {
    id: 12,
    description: "Eliminar al objetivo en París",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null
  },
  {
    id: 13,
    description: "Infiltrarse en la sede de la organización rival",
    status: MissionStatus.REJECTED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null
  },
  {
    id: 14,
    description: "Extraer información del servidor seguro",
    status: MissionStatus.ASSIGNED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: {
      id: 1,
      name: "John Wick"
    }
  },
  {
    id: 15,
    description: "Proteger al testigo clave en el juicio",
    status: MissionStatus.COMPLETED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: {
      id: 3,
      name: "Nikita Mears"
    }
  },
  {
    id: 16,
    description: "Sabotear las operaciones del enemigo",
    status: MissionStatus.PAID,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: {
      id: 4,
      name: "Ethan Hunt"
    }
  },
  {
    id: 17,
    description: "Rescatar al rehén de alto perfil",
    status: MissionStatus.PUBLISHED,
    created_by: {
      id: 2,
      name: "Jason Bourne"
    },
    assigned_to: null
  }
]
