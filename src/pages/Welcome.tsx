import React, { useEffect } from 'react'
import { Message, Upload } from '@arco-design/web-react'
import { UploadItem, UploadListProps } from '@arco-design/web-react/lib/Upload'
import { useLocalStorageState } from 'ahooks'
import UploadCard from '@/components/UploadCard'
import { isAcceptFile } from '@/util/file'

const Welcome: React.FC = () => {
  const [images, setImages] = useLocalStorageState<UploadItem[]>('images', {
    defaultValue: [],
  })

  useEffect(() => {
    console.log(images)
  }, [images])

  const onDrop = (e: React.DragEvent) => {
    const files = Array.from(e.dataTransfer.files)
    const uploadFile = files[0]
    if (isAcceptFile(uploadFile, 'image/*')) {
      return
    }
    Message.info('错误的文件类型')
  }

  const renderUploadList = (fileList: UploadItem[], props: UploadListProps) => (
    <div
      style={{
        display: 'flex',
        marginTop: 20,
      }}
    >
      {fileList.map(fileItem => (
        <UploadCard key={fileItem.uid} uploadItem={fileItem} uploadProps={props} />
      ))}
    </div>
  )

  const onChange = (fileList: UploadItem[], file: UploadItem) => {
    setImages(fileList)
  }

  return (
    <div>
      {
        <div className="image-content">
          <Upload
            multiple
            accept="image/*"
            onDrop={onDrop}
            onChange={onChange}
            autoUpload={false}
            listType="picture-card"
            renderUploadList={renderUploadList}
          />
        </div>
      }
    </div>
  )
}

export default Welcome
