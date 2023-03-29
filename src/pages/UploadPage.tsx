import React, { useState, useEffect } from 'react';

import { postFile } from 'api/fileApi';

const UploadPage = () => {
  const [file, setFile] = useState<File | undefined>();

  const onSubmit = async () => {
    file && (await postFile(file).then((res) => console.log(res)));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const inputFile = e.target.files[0];
      setFile(inputFile);
    }
  };

  useEffect(() => {
    console.log('');
  }, []);

  return (
    <>
      <h1>アップロードページ</h1>
      <div>
        <p>動画編集をしましょう</p>
        <input type="file" accept="video/*" onChange={onChange} />
        <p>{file ? file.name : '選択されていません'}</p>
        <input type="submit" onClick={onSubmit} disabled={!file} value="送信する" />
      </div>
    </>
  );
};

export default UploadPage;
