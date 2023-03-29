export const FileListElement = ({ url }: { url: string }) => {
  return (
    <>
      <video controls width="400">
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
};
