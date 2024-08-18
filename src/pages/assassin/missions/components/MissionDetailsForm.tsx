import { UseQueryResult } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { InputField, Textarea } from '@components/Forms'
import { missionPaymentTypeTranslations } from '@utils/translations'
import { MissionDetails } from '@pages/assassin'
import { useUser } from '@lib/react-query-auth.ts'

type MissionDetailsFormProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

export function MissionDetailsForm({ missionDetailsQuery }: MissionDetailsFormProps) {
  const userId = useUser()?.data?.id
  const { data: missionDetailsData } = missionDetailsQuery
  const paymentTypeTranslation = missionDetailsData?.payment_type && missionPaymentTypeTranslations[missionDetailsData.payment_type]

  const { register } = useForm({
    values: { ...missionDetailsQuery.data, payment_type: paymentTypeTranslation },
  })
  
  if (!missionDetailsData) {
    return null
  }

  const hasAssignedAssassin = missionDetailsData.assigned_to !== null
  const isCoinPaymentType = missionDetailsData.coins_amount !== null

  return (
    <div>
      <fieldset disabled>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            id="created_at"
            label="Fecha de creación"
            type="date"
            registration={ register('created_at') }
          />
          { hasAssignedAssassin && (
            <InputField
              id="assigned_at"
              label="Fecha de asignación"
              type="date"
              registration={ register('assigned_at') }
            />
          ) }
          { missionDetailsData.created_by.id !== userId && (
            <InputField
              id="created_by"
              label="Creada por"
              type="text"
              registration={ register('created_by.name') }
              className="md:col-span-2"
            />
          ) }
          { hasAssignedAssassin && missionDetailsData.assigned_to?.id !== userId && (
            <InputField
              id="assigned_to"
              label="Asignada a"
              type="text"
              registration={ register('assigned_to.name') }
              className="md:col-span-2"
            />
          ) }
          <Textarea
            id="details"
            label="Detalles"
            registration={ register('details') }
            className="md:col-span-2"
          />
          <InputField
            id="payment_type"
            label="Tipo de pago"
            type="text"
            registration={ register('payment_type') }
          />
          { isCoinPaymentType && (
            <InputField
              id="coins_amount"
              label="Cantidad"
              type="number"
              registration={ register('coins_amount') }
            />
          ) }
        </div>
      </fieldset>
    </div>
  )
}
