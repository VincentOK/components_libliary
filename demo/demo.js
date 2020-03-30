import React from 'react';
import ReactDom from 'react-dom';
import MyComponent from '../src/components/SmallButton'
import TestForm from '../src/components/testForm'
const Demo  = () => {
  return <div>
    <h1>组件预览：</h1>
    <MyComponent />
    <TestForm />
  </div>
};

ReactDom.render(<Demo />, document.getElementById('root'));
