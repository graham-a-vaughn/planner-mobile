
import { ChecklistItem } from './checklist-item';

export class Checklist {

  description: string;
  dateAdded: Date;
  items: ChecklistItem[]

  constructor(options: {
      description?: string,
      dateAdded?: Date,
      items?: ChecklistItem[]
    } = {}) {
    this.description = options.description || '';
    this.dateAdded = options.dateAdded || new Date();
    this.items = options.items || [];
  }
}
