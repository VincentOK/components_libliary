import React from 'react';
import ReactDom from 'react-dom';
import ComponentsLine from '../src/components/ComponentsLine';
import ComponentsBar from '../src/components/ComponentsBar';
import { Collapse, Row, Col,Card } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
const { Panel } = Collapse;
const genExtra = () => (
  <SettingOutlined
    onClick={event => {
      event.stopPropagation();
    }}
  />
);
const Demo  = () => {
  return(
    <div>
      <Collapse
        defaultActiveKey={['1']}
        expandIconPosition="right"
      >
        <Panel header="折线图" key="1" extra={genExtra()}>
          <div>
            <Row>
              <Col span={12}>
                <ComponentsLine />
              </Col>
              <Col span={12}>
                <Card title="示例" bordered={false} style={{ width: "100%" }}>
                  <p>
                    1.npm install components_libliary
                  </p>
                  <p>
                   2.引入组件  ComponentsLine
                  </p>
                  <p>
                    3.使用 "ComponentsLine"
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </Panel>
        <Panel header="柱状图" key="2" extra={genExtra()}>
          <div>
            <Row>
              <Col span={12}>
                <ComponentsBar />
              </Col>
              <Col span={12}>
                <Card title="示例" bordered={false} style={{ width: "100%" }}>
                  <p>
                    1.npm install components_libliary
                  </p>
                  <p>
                    2.引入组件  ComponentsBar
                  </p>
                  <p>
                    3.使用 "ComponentsBar"
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </Panel>
      </Collapse>
    </div>
  )
};

ReactDom.render(<Demo />, document.getElementById('root'));
