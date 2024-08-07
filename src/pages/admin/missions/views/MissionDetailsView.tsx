import { useParams } from 'react-router-dom'

type MissionDetailsParam = {
  missionId: string
}

export function MissionDetailsView() {
  const { missionId } = useParams<MissionDetailsParam>()

  return <div>Detalles de la misión { missionId }</div>
}
