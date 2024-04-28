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

const Model_evaluate = () => {
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
    if (home.length > 0) {
      // Specify the keyword or pattern to search for
      const keyword = 'def evaluate(';
      const keyword2 = 'def ';

      const selectedCode = home.reduce((accumulator, homeItem) => {
        const fileLines = homeItem.file_content.split('\n');
        const startIndex = fileLines.findIndex(line => line.includes(keyword));
  
        if (startIndex !== -1) {

           let endIndex = startIndex + 1;
        while (endIndex < fileLines.length && !fileLines[endIndex].includes(keyword2)) {
          endIndex++;
        }

        // Extract lines based on the startIndex and endIndex
        const selectedLines = fileLines.slice(startIndex, endIndex+1);
        accumulator.push(...selectedLines);
      }
  
        return accumulator;
      }, []).join('\n');
  
      setCode(selectedCode);
    }
  }, [home]);
  
  return (
    <div className="codemirror-container">
      <div className="treeview-container">
        {renderTreeNodes(data)}
      </div>
      <div className="editor-container">
        <h1>Models.evaluate</h1>
        <CodeMirror
          value={code}
          extensions={[python({ jsx: true })]}
          readOnly
        />
      </div>
    </div>
  );
};

export default Model_evaluate;
