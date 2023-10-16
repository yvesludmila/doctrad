import { Card, Space, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import {BiLike} from "react-icons/bi"
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import SiderMenu from "./Components/SiderMenu";
export default function Home() {
  const { Title, Text } = Typography;
  return (
    <main style={{display:"flex"}}>
      <SiderMenu/>
      <Card
         title="Homaniadana"
        style={{ width: 700, margin: 20, maxHeight:170 }}
        actions={[
        
          <BiLike key="like" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
        
      >
           <Meta
           description="This is the description"
          /> 
      </Card>
    </main>
  )
}
