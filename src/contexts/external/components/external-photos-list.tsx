import Card from "../../../components/card";
import Skeleton from "../../../components/skeleton";
import Text from "../../../components/text";
import type { ExternalPhoto } from "../models/external-photo";

interface ExternalPhotosListProps {
  photos: ExternalPhoto[];
  loading?: boolean;
  hasError?: boolean;
}

export default function ExternalPhotosList({
  photos,
  loading,
  hasError,
}: ExternalPhotosListProps) {
  if (hasError) {
    return (
      <Text as="p" variant="paragraph-medium" className="text-accent-red">
        Não foi possível carregar as fotos externas no momento.
      </Text>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <Skeleton key={`external-photo-loading-${index}`} className="h-40" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {photos.map((photo) => (
        <Card key={photo.id} variant="default" className="overflow-hidden">
          <img
            src={photo.imageUrl}
            alt={`Foto de ${photo.author}`}
            className="w-full h-40 object-cover"
            loading="lazy"
          />

          <div className="p-2 space-y-1">
            <Text variant="paragraph-small" className="truncate">
              {photo.author}
            </Text>

            <a
              href={photo.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-accent-brand hover:text-accent-brand-light transition"
            >
              Ver na API externa
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
