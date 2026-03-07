import Text from "../components/text";
import Container from "../components/container";
import type { Photo } from "../contexts/photos/models/photo";
import Skeleton from "../components/skeleton";
import PhotosNavigator from "../contexts/photos/components/photos-navigator";

export default function PagePhotoDetails() {
  //Apenas para fazer o teste do mock
  const isLoadingPhoto = false;
  const photo = {
    id: "123",
    title: "Olá mundo!",
    imageId: "portrait-tower.png",
    albums: [
      { id: "321", title: "Album 1" },
      { id: "123", title: "Album 2" },
      { id: "234", title: "Album 3" },
    ],
  } as Photo;

  return (
    <Container>
      <header className="flex items-center justify-between gap-8 mb-8">
        {isLoadingPhoto ? (
          <Text variant="heading-large">{photo?.title}</Text>
        ) : (
          <Skeleton className="w-48 h-8" />
        )}
        <PhotosNavigator loading={isLoadingPhoto} />
      </header>
    </Container>
  );
}
