export const FileListElement = ({ url }: { url: string }) => {
  return (
    <>
      <video controls width="250">
        <source src={url} type="video/mp4" />
      </video>
    </>
  );
};
