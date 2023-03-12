import { toast } from 'react-toastify';

export function Message(message: string, type: string) {
  if(type.startsWith('@@'))
    return

  toast(`${message} - ${type}`)
}
