export class TaskService {

    get() {
        return [
            { name: "Recharge mobile", priority: 'low', category: 'General', completed: false, createdDate: new Date() },
            { name: "Buy groceries", priority: 'high', category: 'Shopping', completed: false, createdDate: new Date() },
            { name: "Go Shop", priority: 'medium', category: 'Shopping', completed: true, createdDate: new Date() }
        ]
    }
}