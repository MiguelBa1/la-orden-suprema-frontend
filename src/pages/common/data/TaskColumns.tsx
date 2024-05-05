import { Column } from '@components/UI'
import { ActionButton } from '@pages/common/components'

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

export const columns: Column<Task>[] = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Tarea', dataIndex: 'name', key: 'name' },
  {
    title: 'Completada',
    dataIndex: 'completed',
    key: 'completed',
    render: (record) => record.completed ? 'Sí' : 'No'
  },
  {
    title: 'Acciones',
    key: 'actions',
    render: (record) => (
      <ActionButton
        taskName={ record.name }
      />
    ),
  },
]
