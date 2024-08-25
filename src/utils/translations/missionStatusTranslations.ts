import { MissionStatus } from '@models/enums'

export const missionStatusTranslations = {
  [MissionStatus.CREATED]: 'Creada',
  [MissionStatus.ASSIGNED]: 'Asignada',
  [MissionStatus.COMPLETED]: 'Completada',
  [MissionStatus.PAID]: 'Pagada',
  [MissionStatus.PUBLISHED]: 'Publicada',
  [MissionStatus.REJECTED]: 'Rechazada',
}
