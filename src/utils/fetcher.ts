interface FecthOptions extends RequestInit {
  json?: boolean;
}

export async function Fetcher<T>(
  url: string,
  options: FecthOptions = { json: true }
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`
    );
  }

  if (options.json === false) return (await response.text()) as unknown as T;

  return (await response.json()) as T;
}
