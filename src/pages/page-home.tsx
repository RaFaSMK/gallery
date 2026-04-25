import Container from "../components/container";
import Text from "../components/text";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import useAlbums from "../contexts/albums/hooks/use-albums";
import ExternalPhotosList from "../contexts/external/components/external-photos-list";
import useExternalPhotos from "../contexts/external/hooks/use-external-photos";
import PhotosList from "../contexts/photos/components/photos-list";
import usePhotos from "../contexts/photos/hooks/use-photos";

export default function PageHome() {
  const { albums, isLoadingAlbums } = useAlbums();
  const { photos, isLoadingPhotos } = usePhotos();
  const { externalPhotos, isLoadingExternalPhotos, isErrorExternalPhotos } =
    useExternalPhotos();

  return (
    <>
      <Container>
        <AlbumsFilter
          albums={albums}
          loading={isLoadingAlbums}
          className="mb-9"
        />

        <PhotosList photos={photos} loading={isLoadingPhotos} />

        <section className="mt-12 space-y-4">
          <Text as="h2" variant="heading-medium">
            Inspirações de API externa
          </Text>

          <Text as="p" variant="paragraph-small" className="text-accent-span">
            Dados vindos de https://picsum.photos/v2/list
          </Text>

          <ExternalPhotosList
            photos={externalPhotos}
            loading={isLoadingExternalPhotos}
            hasError={isErrorExternalPhotos}
          />
        </section>
      </Container>
    </>
  );
}
