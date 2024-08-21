import { UseQueryResult } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { MissionDetails } from '@pages/admin'
import { InputField, Textarea } from '@components/Forms'
import { missionPaymentTypeTranslations } from '@utils/translations'

type MissionDetailsFormProps = {
  missionDetailsQuery: UseQueryResult<MissionDetails>
}

export function MissionDetailsForm({ missionDetailsQuery }: MissionDetailsFormProps) {
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
            id="created_by"
            label="Creada por"
            type="text"
            name="created_by"
            registration={ register('created_by.name') }
          />
          <InputField
            id="created_at"
            label="Fecha de creación"
            type="date"
            name="created_at"
            registration={ register('created_at') }
          />
          { hasAssignedAssassin && (
            <>
              <InputField
                id="assigned_to"
                label="Asignada a"
                type="text"
                name="assigned_to"
                registration={ register('assigned_to.name') }
              />
              <InputField
                id="assigned_at"
                label="Fecha de asignación"
                type="date"
                name="assigned_at"
                registration={ register('assigned_at') }
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
            id="payment_type"
            label="Tipo de pago"
            type="text"
            name="payment_type"
            registration={ register('payment_type') }
          />
          { isCoinPaymentType && (
            <InputField
              id="coins_amount"
              label="Cantidad"
              type="number"
              name="coins_amount"
              registration={ register('coins_amount') }
            />
          ) }
        </div>
      </fieldset>
    </div>
  )
}
