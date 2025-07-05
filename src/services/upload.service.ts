export class UploadService {
  private path = `${process.env.API_URL}/upload`;

  async uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${this.path}/image`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await response.json();
    return data.url;
  }
}

export const uploadService = new UploadService();
