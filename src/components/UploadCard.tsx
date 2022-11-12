import React from 'react'
import { UploadItem, UploadListProps } from '@arco-design/web-react/lib/Upload'
import { Card, Image } from '@arco-design/web-react'

interface UploadCardProps {
  uploadItem: UploadItem
  uploadProps: UploadListProps
}

const UploadCard: React.FC<UploadCardProps> = ({ uploadItem, uploadProps }) => {
  const url = uploadItem.url || uploadItem.originFile?.path
  return (
    <Card
      hoverable
      style={{
        width: 140,
        marginRight: 10,
      }}
      bodyStyle={{
        padding: '4px 8px',
      }}
      cover={
        <Image
          src={url}
          preview={false}
          style={{
            maxWidth: '100%',
            maxHeight: '50%',
          }}
        />
      }
    >
      <Card.Meta description={uploadItem.name?.split('.')[0]} />
    </Card>
  )
}

export default UploadCard
