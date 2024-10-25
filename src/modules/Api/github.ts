import { Project } from "../types/types";

export async function fetchTSProjectsTop(
  page: number = 1,
  per_page: number = 3
): Promise<Project[]> {
  try {
    // можно использовать axios, но фетч привычнее
    const response = await fetch(
      `https://api.github.com/search/repositories?q=language:TypeScript&sort=stars&order=desc&per_page=${per_page}&page=${page}`,
      {
        method: "GET", //он метод по умолчанию, но в соотвествии с РЕСТ
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.statusText}`);
    }

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    return [];
  }
}

export {};
