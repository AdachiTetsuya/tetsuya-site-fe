/** @jsxImportSource @emotion/react  */
import { css, SerializedStyles } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getFileList } from 'api/fileApi';

import { FileListElement } from 'components/FileListElement';

import { ListFileType } from 'types/fileType';

const HomePage = () => {
  const [fileList, setFileList] = useState<ListFileType[]>();

  const initFunc = async () => {
    await getFileList().then((res) => {
      setFileList(res);
    });
  };

  const listItems = fileList?.map((item, index) => (
    <FileListElement url={item.video} key={index} />
  ));

  useEffect(() => {
    initFunc();
  }, []);

  return (
    <>
      <h1>ホームページ</h1>
      <Link to={`/upload`}>アップロードする</Link>
      <div css={content}>{listItems}</div>
    </>
  );
};

export default HomePage;

const content: SerializedStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;
