import { useQuery } from "@tanstack/react-query";
import type { ExternalPhoto } from "../models/external-photo";

interface PicsumPhotoResponse {
  id: string;
  author: string;
  download_url: string;
  url: string;
}

async function fetchExternalPhotos(): Promise<ExternalPhoto[]> {
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=8");

  if (!response.ok) {
    throw new Error("Falha ao buscar fotos externas");
  }

  const data = (await response.json()) as PicsumPhotoResponse[];

  return data.map((photo) => ({
    id: photo.id,
    author: photo.author,
    imageUrl: photo.download_url,
    sourceUrl: photo.url,
  }));
}

export default function useExternalPhotos() {
  const { data, isLoading, isError } = useQuery<ExternalPhoto[]>({
    queryKey: ["external-photos"],
    queryFn: fetchExternalPhotos,
    staleTime: 1000 * 60 * 15,
  });

  return {
    externalPhotos: data || [],
    isLoadingExternalPhotos: isLoading,
    isErrorExternalPhotos: isError,
  };
}
