import dayjs from 'dayjs'
import { UseQueryResult } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { InputField, Textarea } from '@components/Forms'
import { missionPaymentTypeTranslations } from '@utils/translations'
import { MissionDetails } from '@pages/assassin'
import { useUser } from '@lib/react-query-auth.ts'
import { MissionPaymentType } from '@models/enums'

type MissionDetailsFormProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

export function MissionDetailsForm({ missionDetailsQuery }: MissionDetailsFormProps) {
  const userId = useUser()?.data?.id
  const { data: missionDetailsData } = missionDetailsQuery
  const paymentTypeTranslation = missionDetailsData?.paymentType && missionPaymentTypeTranslations[missionDetailsData.paymentType]

  const { register } = useForm({
    values: {
      ...missionDetailsQuery.data,
      paymentType: paymentTypeTranslation,
      createdAt: dayjs(missionDetailsData?.createdAt).format('YYYY-MM-DD'),
    },
  })
  
  if (!missionDetailsData) {
    return null
  }

  const hasAssignedAssassin = missionDetailsData.assignedTo !== null
  const isCoinPaymentType = missionDetailsData.paymentType === MissionPaymentType.COINS

  return (
    <div>
      <fieldset disabled>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            id="createdAt"
            name="createdAt"
            label="Fecha de creación"
            type="date"
            registration={ register('createdAt') }
          />
          { hasAssignedAssassin && (
            <InputField
              id="assignedAt"
              name="assignedAt"
              label="Fecha de asignación"
              type="date"
              registration={ register('assignedAt') }
            />
          ) }
          { missionDetailsData.createdBy.id !== userId && (
            <InputField
              id="createdBy"
              name="createdBy"
              label="Creada por"
              type="text"
              registration={ register('createdBy.name') }
              className="md:col-span-2"
            />
          ) }
          { hasAssignedAssassin && missionDetailsData.assignedTo?.id !== userId && (
            <InputField
              id="assignedTo"
              name="assignedTo"
              label="Asignada a"
              type="text"
              registration={ register('assignedTo.name') }
              className="md:col-span-2"
            />
          ) }
          <Textarea
            id="details"
            name="details"
            label="Detalles"
            registration={ register('details') }
            className="md:col-span-2"
          />
          <InputField
            id="paymentType"
            name="paymentType"
            label="Tipo de pago"
            type="text"
            registration={ register('paymentType') }
          />
          { isCoinPaymentType && (
            <InputField
              id="coinsAmount"
              name="coinsAmount"
              label="Cantidad"
              type="number"
              registration={ register('coinsAmount') }
            />
          ) }
        </div>
      </fieldset>
    </div>
  )
}
