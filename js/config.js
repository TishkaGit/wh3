/**
 * Конфигурация приложения
 */
const CONFIG = {
    DEBUG: true,
    NOTIFICATION_DURATION: 3000,
    CONTRACT_STATUSES: {
        0: { name: 'Создан', class: 'created' },
        1: { name: 'Утверждён', class: 'approved' },
        2: { name: 'Подписан', class: 'signed' },
        3: { name: 'Аннулирован', class: 'cancelled' }
    },
    SHIPMENT_STATUSES: {
        0: { name: 'Запланировано', class: 'planned' },
        1: { name: 'Отгружено', class: 'shipped' }
    }
};
