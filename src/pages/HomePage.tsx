import React, { useState, useEffect } from 'react';

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
      <div>{listItems}</div>
    </>
  );
};

export default HomePage;
