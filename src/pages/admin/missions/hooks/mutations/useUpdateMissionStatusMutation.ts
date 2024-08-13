import { useMutation } from '@tanstack/react-query'
import { updateMissionStatus } from '@pages/admin'
import { useToastStore } from '@stores/useToastStore.ts'

export function useUpdateMissionStatusMutation() {
  const toast = useToastStore()

  return useMutation({
    mutationFn: updateMissionStatus,
    onSuccess: () => {
      toast.addToast({ message: 'Estado de la misión actualizado correctamente', type: 'success' })
    },
    onError: () => {
      toast.addToast({ message: 'Ocurrió un error al actualizar el estado de la misión', type: 'error' })
    }
  })
}
