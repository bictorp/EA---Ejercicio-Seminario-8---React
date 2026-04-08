//encargado de guardar y recuperar los registros
export interface Activity {
  id: string;
  action: string;
  details: string;
  timestamp: Date;
}
class ActivityService {
  private storageKey = 'app_activities';

  // Recupera todas las actividades guardadas
  getActivities(): Activity[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Guarda una nueva actividad
  logActivity(action: string, details: string): void {
    const activities = this.getActivities();
    const newActivity: Activity = {
      id: Date.now().toString(),
      action,
      details,
      timestamp: new Date()
    };
    // Añadimos la nueva actividad al principio de la lista
    activities.unshift(newActivity); 
    localStorage.setItem(this.storageKey, JSON.stringify(activities));
  }
}

export default new ActivityService();