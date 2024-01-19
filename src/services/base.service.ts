import { StorageKey } from "@/common/enums";
import { BaseModel } from "@/common/models";
import { storageService } from "@/services";

export class BaseService<T extends BaseModel, C, U> {
  private storageKey: StorageKey;

  constructor(storageKey: StorageKey) {
    this.storageKey = storageKey;
  }

  findAll(filters?: Record<string, string>): T[] {
    let items: T[] = JSON.parse(storageService.get(this.storageKey) || "[]");

    if (filters) {
      for (const [key, value] of Object.entries(filters)) {
        items = items.filter(
          (item) => item[key as keyof typeof item] === value
        );
      }
    }

    return items;
  }

  findOne(id: string): T {
    const item = this.findAll().find((item) => item.id === id);

    if (!item) {
      throw new Error(`Could not find ${this.storageKey} by id: ${id}`);
    }

    return item;
  }

  create(payload: C): T {
    const id = this.getRandomId();

    const createdItem = {
      ...payload,
      id,
    };
    const items = [...this.findAll(), createdItem];

    storageService.set(this.storageKey, JSON.stringify(items));

    return this.findOne(id);
  }

  update(id: string, payload: U): T {
    this.findOne(id);

    const updatedItem = {
      ...payload,
      id,
    };
    const items = [...this.findAll().filter((it) => it.id !== id), updatedItem];

    storageService.set(this.storageKey, JSON.stringify(items));

    return this.findOne(id);
  }

  delete(id: string): boolean {
    this.findOne(id);

    const items = [...this.findAll().filter((it) => it.id !== id)];
    storageService.set(this.storageKey, JSON.stringify(items));

    return true;
  }

  private getRandomId(): string {
    return Math.random().toString(16).slice(2);
  }
}
