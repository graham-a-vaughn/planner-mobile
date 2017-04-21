
export class ChecklistItem {
  index: number;
  key: string;
  description: string;
  completed: boolean;

  constructor(options: {
      index: number,
      description?: string,
      completed?: boolean
    }) {
    this.index = options.index;
    this.description = options.description || '';
    this.completed = options.completed || false;
    this.key = 'item_' +this.index.toString();
  }
}
