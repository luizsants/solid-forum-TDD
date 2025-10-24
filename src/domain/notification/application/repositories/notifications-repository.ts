import { Notification } from '../../enterprise/entities/notification'

export interface NotificationsRepository {
  findById(id: Notification): Promise<void | null>
  create(notification: Notification): Promise<void>
  save(notification: Notification): Promise<void>
}
