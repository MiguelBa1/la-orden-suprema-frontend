import { UseQueryResult } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { MissionDetails } from '@pages/admin'
import { InputField, Textarea } from '@components/Forms'
import { missionPaymentTypeTranslations } from '@utils/translations'
import dayjs from 'dayjs'

type MissionDetailsFormProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

export function MissionDetailsForm({ missionDetailsQuery }: MissionDetailsFormProps) {
  const { data: missionDetailsData } = missionDetailsQuery
  const paymentTypeTranslation = missionDetailsData?.paymentType && missionPaymentTypeTranslations[missionDetailsData.paymentType]

  const { register } = useForm({
    values: {
      ...missionDetailsQuery.data,
      paymentType: paymentTypeTranslation,
      createdAt: dayjs(missionDetailsData?.createdAt).format('YYYY-MM-DD'),
      assignedAt: missionDetailsData?.assignedAt ? dayjs(missionDetailsData.assignedAt).format('YYYY-MM-DD') : null,
    },
  })
  
  if (!missionDetailsData) {
    return null
  }

  const hasAssignedAssassin = missionDetailsData.assignedTo !== null
  const isCoinPaymentType = missionDetailsData.coinsAmount !== null

  return (
    <div>
      <fieldset disabled>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            id="createdBy"
            label="Creada por"
            type="text"
            name="createdBy"
            registration={ register('createdBy.name') }
          />
          <InputField
            id="createdAt"
            label="Fecha de creación"
            type="date"
            name="createdAt"
            registration={ register('createdAt') }
          />
          { hasAssignedAssassin && (
            <>
              <InputField
                id="assignedTo"
                label="Asignada a"
                type="text"
                name="assignedTo"
                registration={ register('assignedTo.name') }
              />
              <InputField
                id="assignedAt"
                label="Fecha de asignación"
                type="date"
                name="assignedAt"
                registration={ register('assignedAt') }
              />
            </>
          ) }
          <Textarea
            id="details"
            label="Detalles"
            name="details"
            registration={ register('details') }
            className="md:col-span-2"
          />
          <InputField
            id="paymentType"
            label="Tipo de pago"
            type="text"
            name="paymentType"
            registration={ register('paymentType') }
          />
          { isCoinPaymentType && (
            <InputField
              id="coinsAmount"
              label="Cantidad"
              type="number"
              name="coinsAmount"
              registration={ register('coinsAmount') }
            />
          ) }
        </div>
      </fieldset>
    </div>
  )
}
