import { MissionStatus } from '@models/enums'
import { missionStatusTranslations } from '@utils/translations'

type MissionStatusLabelProps = {
  status: MissionStatus
  className?: string;
}

export function MissionStatusLabel({ status, className }: MissionStatusLabelProps) {
  let labelColor = ''

  switch (status) {
    case MissionStatus.CREATED:
      labelColor = 'bg-gray-500'
      break
    case MissionStatus.PUBLISHED:
      labelColor = 'bg-blue-500'
      break
    case MissionStatus.ASSIGNED:
      labelColor = 'bg-yellow-500'
      break
    case MissionStatus.COMPLETED:
      labelColor = 'bg-green-500'
      break
    case MissionStatus.PAID:
      labelColor = 'bg-green-700'
      break
    case MissionStatus.REJECTED:
      labelColor = 'bg-red-500'
      break
  }

  return (
    <span className={ `px-2 py-1 text-white rounded-md ${labelColor} ${className}` }>
      { missionStatusTranslations[status] }
    </span>
  )
}
