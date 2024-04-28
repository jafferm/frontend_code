import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';
import './Codemirror.css'; // Import your CSS file for styling
import data from './data.json'; // Import JSON data

const renderTreeNodes = (nodes) => {
  return nodes.map(node => (
    <TreeView
      key={node.key}
      nodeLabel={<a href={node.link}><span>{node.label}</span></a>}
      defaultCollapsed={false}
    >
      {node.children && renderTreeNodes(node.children)}
    </TreeView>
  ));
};

const Training = () => {
  const [home, setHome] = useState([]);
  const [code, setCode] = useState('');

  useEffect(() => {
    const fetchAllHomes = async () => {
      try {
        const res = await axios.get('https://backend-code-0wjy.onrender.com/training');
        setHome(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAllHomes();
  }, []);

  useEffect(() => {
    const selectedCode = home
      .map(homeItem => homeItem.file_content.split('\n'))
      .flat()
      .join('\n');

    setCode(selectedCode);
  }, [home]);

  return (
    <div className="codemirror-container">
      <div className="treeview-container">
        {renderTreeNodes(data)}
      </div>
      <div className="editor-container">
        <h1>Model</h1>
        <CodeMirror
          value={code}
          extensions={[python({ jsx: true })]}
          readOnly
        />
      </div>
    </div>
  );
};

export default Training;
