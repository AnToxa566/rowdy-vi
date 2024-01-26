export interface PageResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export class ApiBaseService<T, C, U> {
  protected API_URL = process.env.API_URL;

  constructor(protected model: string) {}

  async findAll(queryParams?: Record<string, string>): Promise<PageResult<T>> {
    const queryString = new URLSearchParams();

    if (queryParams) {
      Object.keys(queryParams).forEach((key) => {
        queryString.append(key, queryParams[key]);
      });
    }

    const url = `${this.API_URL}/${this.model}?${queryString.toString()}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async findById(id: string): Promise<T> {
    const url = `${this.API_URL}/${this.model}/${id}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  async create(data: C): Promise<T> {
    const url = `${this.API_URL}/${this.model}`;

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const created = await response.json();

    return created;
  }

  async update(id: string, data: U): Promise<T> {
    const url = `${this.API_URL}/${this.model}/${id}`;

    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const updated = await response.json();

    return updated;
  }

  async delete(id: string): Promise<boolean> {
    const url = `${this.API_URL}/${this.model}/${id}`;

    await fetch(url, {
      method: "DELETE",
    });

    return true;
  }
}
